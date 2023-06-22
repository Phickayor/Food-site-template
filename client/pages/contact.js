import ContactForm from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({ subsets: ['latin'], weight: '300' })

function Contact() {
    return (
        <div className={poppins.className}>
            <Header />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact