import { CartContext } from '@/Contexts/CartContext';
import { faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'

function CartComponent() {
    const { IncreaseQuantity, DecreaseQuantity, RemoveCartItem, cart, subTotal, Taxes, Shipping } = useContext(CartContext);
    const [Total] = useState(subTotal + Shipping + Taxes)

    return (
        <div className='py-5 lg:py-10 '>
            <h1 className='text-4xl font-extrabold py-2'>Shopping <span className='text-bordercolor'>Cart</span></h1>
            <div className=' lg:flex justify-between gap-x-20'>

                <div className='lg:w-3/5'>
                    <ul className='my-8'>
                        {cart.map((item) => {
                            return (
                                <div key={item.name} >
                                    <li className='flex justify-between border-t-2 py-6'>
                                        <div className='self-center col-span-2 flex gap-x-4'>
                                            <img src={item.image} className='sm:w-48 w-36 rounded-xl object-cover' />
                                            <div className='self-center space-y-2'>
                                                <h1 className='text-xl font-semibold'>{item.name}</h1>
                                                <p className='font-extralight'>{item.label}</p>
                                                <div className='self-center text-lg font-semibold'>
                                                    <h3>₦ {item.amount}</h3>
                                                </div>
                                                <div className='flex gap-x-5 self-center'>
                                                    <FontAwesomeIcon
                                                        onClick={() => IncreaseQuantity(item.name)}
                                                        icon={faPlusCircle} className='cursor-pointer text-3xl text-bordercolor' />
                                                    <h1 className='text-2xl font-semibold'>{item.quantity}</h1>
                                                    <FontAwesomeIcon
                                                        onClick={() => DecreaseQuantity(item.name)}
                                                        icon={faMinusCircle} className='cursor-pointer text-3xl text-bordercolor' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='self-center flex gap-x-4'>
                                            <FontAwesomeIcon
                                                onClick={() => RemoveCartItem(item.name)}
                                                icon={faTrash} className='cursor-pointer text-red-500 self-center' />
                                        </div>

                                    </li>
                                </div>
                            )
                        })}
                    </ul >
                </div>
                <div className='bg-slate-200 h-fit lg:w-2/5 rounded-xl p-5'>
                    <h1 className='font-semibold text-2xl text-slate-900'>Order Summary</h1>
                    <div className='flex flex-col space-y-3 mx-auto w-11/12 py-5 border-b-2 border-black '>
                        <div className='flex justify-between '>
                            <h3>Subtotal</h3>
                            <span>₦ {subTotal}</span>
                        </div>
                        <div className='flex  justify-between'>
                            <h3>Shipping estimate</h3>
                            <span>₦ {Shipping}</span>
                        </div>
                        <div className='flex justify-between'>
                            <h3>Tax estimate</h3>
                            <span>₦ {Taxes}</span>
                        </div>
                    </div>
                    <div className='flex py-4 justify-between w-11/12 mx-auto'>
                        <h3 className='font-bold text-lg'>Order Total</h3>
                        <span>₦ {Total}</span>
                    </div>
                    <div className='flex flex-col mx-auto w-10/12 '>
                        <button className='font-semibold self-center w-full px-5 py-3 hover:bg-[#121212] duration-300 bg-bordercolor hover:scale-105 rounded-lg text-white'>Pay Now</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartComponent