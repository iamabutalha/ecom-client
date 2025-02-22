import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import { data } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    token,
    backendUrl,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(cartItems);
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // api call for cod
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response.data);

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }

          break;
        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );

          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }

          break;

        case "razorpay":
          toast.error("Currently Not Avilable");
          setMethod("cod");
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* ---------------------Left Side --------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
        />
        <input
          required
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
        />

        <div className="flex gap-3">
          <input
            required
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
          />
          <input
            required
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
          />
        </div>

        <div className="flex gap-3">
          <input
            required
            type="number"
            placeholder="ZipCode"
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
          />
          <input
            required
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
          />
        </div>

        <input
          required
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
        />
      </div>
      {/* -------------Right Side -------------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full border-gray-300 ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4 " src={assets.stripe_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full border-gray-300 ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4 " src={assets.razorpay_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full border-gray-300 ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer"
              // onClick={() => navigate("/orders")}
            >
              PLACEORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
