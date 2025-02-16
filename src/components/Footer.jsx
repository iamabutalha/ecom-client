import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <div >
      <div className="footer flex flex-row sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            laudantium adipisci sunt minima tempora velit a?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+923149807334</li>
            <li>info@forever@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="text-gray-400"/>
        <p className="py-5 text-sm text-center text-gray-400">Copyright 2024 @forever.com ALL right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
