import { CartContext } from '@/Contexts/CartContext';
import CartComponent from '@/components/Cart'
import EmptyCart from '@/components/EmptyCart'
import React, { useContext } from 'react'
function Cart() {
    const { AddCartItem, RemoveCartItem, cart } = useContext(CartContext);
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