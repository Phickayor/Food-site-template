import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({ subsets: ['latin'], weight: ['300'] })
function faq() {
  return (
    <div className={poppins.className}>
      <Header />
      <div className='mx-auto md:w-10/12 w-11/12'>
        <Faq />
      </div>
      <Footer />
    </div>
  )
}

export default faq