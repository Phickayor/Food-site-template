import CartComponent from '@/components/Cart'
import EmptyCart from '@/components/EmptyCart'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({ subsets: ['latin'], weight: '300' })
function Cart() {
    var cartItems = null
    return (
        <div className={poppins.className}>
            <Header />
            <div className='mx-auto w-11/12'>
                {cartItems ?
                    (<CartComponent />) :
                    (<EmptyCart />)
                }
            </div>
            <Footer />
        </div>
    )
}

export default Cart