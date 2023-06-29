import CartComponent from '@/components/Cart'
import EmptyCart from '@/components/EmptyCart'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ShoppingPage from '@/components/ShoppingPage'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({ subsets: ['latin'], weight: '300' })
function OrderOnline() {
    return (
        <div className={poppins.className}>
            <Header />
            <ShoppingPage />
            <Footer />
        </div>
    )
}

export default OrderOnline