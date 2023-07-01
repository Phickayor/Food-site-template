import { CartContext } from '@/Contexts/CartContext';
import { faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';

function CartComponent() {
    const { RemoveCartItem, cart } = useContext(CartContext);

    return (
        <div className='py-5 lg:py-10'>
            <div>
                <h1 className='text-4xl font-extrabold text-center py-2'>Shopping <span className='text-bordercolor'>Cart</span></h1>
            </div>
            <ul className='my-8 mx-auto w-11/12 '>
                {
                    cart.map(item => {
                        return (
                            <div key={item.name} >
                                <li className='hidden lg:grid grid-cols-5 border-t-2 py-6'>
                                    <div className='self-center col-span-2 flex gap-x-4'>
                                        <img src={item.image} className='w-48 rounded-xl' />
                                        <div className='self-center'>
                                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                                            <p className='font-extralight'>{item.label}</p>
                                        </div>
                                    </div>

                                    <div className='flex gap-x-5 self-center'>
                                        <FontAwesomeIcon
                                            // onClick={(e) => {
                                            //     e.preventDefault();
                                            //     item.quantity++
                                            // }}
                                            icon={faPlusCircle} className='cursor-pointer text-3xl text-bordercolor' />
                                        <h1 className='text-2xl font-semibold'>{item.quantity + 1}</h1>
                                        <FontAwesomeIcon icon={faMinusCircle} className='cursor-pointer text-3xl text-bordercolor' />
                                    </div>
                                    <div className='self-center text-lg font-semibold'>
                                        <h3>{item.price}</h3>
                                    </div>
                                    <div className='self-center flex gap-x-4'>
                                        <FontAwesomeIcon onClick={() => {
                                            RemoveCartItem(item.name)
                                            alert(cart.length)
                                        }} icon={faTrash} className='cursor-pointer text-red-500 self-center' />
                                    </div>
                                </li>
                                {/* Mobile View */}
                                <li key={item.name} className='block lg:hidden border-t-2 py-6'>
                                    <div className='self-center col-span-2 flex gap-x-4'>
                                        <img src={item.image} className='w-48 rounded-xl' />
                                        <div className='self-center'>
                                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                                            <p className='font-extralight'>{item.label}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between mt-4 mx-auto w-11/12'>
                                        <div className='flex gap-x-2 self-center'>
                                            <FontAwesomeIcon
                                                icon={faPlusCircle} className='cursor-pointer text-3xl text-bordercolor' />
                                            <h1 className='text-2xl font-semibold'>{item.quantity}</h1>
                                            <FontAwesomeIcon icon={faMinusCircle} className='cursor-pointer text-3xl text-bordercolor' />
                                        </div>
                                        <div className='self-center text-lg font-semibold'>
                                            <h3>{item.price}</h3>
                                        </div>
                                        <div className='self-center flex gap-x-4'>
                                            <FontAwesomeIcon onClick={() => {
                                                RemoveCartItem(item.name)
                                                alert(cart.length)
                                            }} icon={faTrash} className='cursor-pointer text-red-500 self-center' />                                        </div>
                                    </div>

                                </li>
                            </div>

                        )
                    })
                }
            </ul >
        </div >
    )
}

export default CartComponent