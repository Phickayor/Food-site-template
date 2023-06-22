import AboutBanner from '@/components/AboutBanner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({ subsets: ["latin"], weight: ["300"] })
function AboutUs() {
    return (
        <div className={poppins.className}>
            <Header />
            <AboutBanner />
            <Footer />
        </div>
    )
}

export default AboutUs