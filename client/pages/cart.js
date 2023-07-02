import { CartContext } from '@/Contexts/CartContext';
import CartComponent from '@/components/Cart'
import EmptyCart from '@/components/EmptyCart'
import React, { useContext, useEffect } from 'react'
function Cart() {
    const { cart } = useContext(CartContext);
    return (
        <div className='mx-auto w-11/12'>
            {cart.length === 0 ?
                (<EmptyCart />)
                : (<CartComponent />)
            }
        </div>
    )
}

export default Cart