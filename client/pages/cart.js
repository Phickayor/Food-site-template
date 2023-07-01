import CartComponent from '@/components/Cart'
import EmptyCart from '@/components/EmptyCart'
import React from 'react'
function Cart() {
    var cartItems = null
    return (
        <div className='mx-auto w-11/12'>
            {cartItems ?
                (<CartComponent />) :
                (<EmptyCart />)
            }
        </div>
    )
}

export default Cart