import Link from 'next/link'
import React from 'react'

function EmptyCart() {
    return (
        <div className='py-8 flex flex-col space-y-2'>
            <img src='/empty-cart.jpg' className='self-center md:w-1/2 lg:w-1/3 xl:w-1/4' />
            <div className='flex flex-col space-y-4'>
                <h1 className='text-4xl text-center font-semibold '>Your Cart is empty</h1>
                <Link href='/order-online' className='self-center'>
                    <button className='font-semibold hover:bg-[#121212] duration-300 bg-bordercolor hover:scale-105 px-5 py-3 text-xl rounded-lg text-white'>Add items to cart</button>
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart