import Footer from '@/components/Footer'
import FullMenu from '@/components/FullMenu'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({ subsets: ['latin'], weight: '300' })
function Menu() {
    return (
        <div className={poppins.className}>
            <Header />
            <FullMenu />
            <Footer />
        </div>
    )
}

export default Menu