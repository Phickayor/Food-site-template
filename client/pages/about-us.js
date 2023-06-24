import AboutBanner from '@/components/AboutBanner'
import Footer from '@/components/Footer'
import Goals from '@/components/Goals'
import Header from '@/components/Header'
import OurStory from '@/components/OurStory'
import Team from '@/components/Team'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({ subsets: ['latin'], weight: '300' })
function AboutUs() {
    return (
        <div className={poppins.className}>
            <Header />
            <AboutBanner />
            <div className='mx-auto w-11/12'>
                <OurStory />
                <Goals />
                <Team />
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs