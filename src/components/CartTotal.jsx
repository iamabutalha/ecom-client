import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
    const {curreny, delivery_fee, getCartAmount} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'}/>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>SubTotal</p>
            <p>{curreny}{getCartAmount()}.00 </p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Shipping fee</p>
            <p>{curreny} {delivery_fee}.00</p>

        </div>
        <hr />

        <div className='flex justify-between'>
                <b>Total</b>
                <b>{curreny} {getCartAmount() === 0  ? 0 : getCartAmount() + delivery_fee}</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
