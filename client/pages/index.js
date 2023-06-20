import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedProduct from '@/components/FeaturedProduct'
import Menu from '@/components/Menu'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export default function Home() {
  return (
    <div className={poppins.className}>
      <Header />
      <Hero />
      <div className='w-11/12 mx-auto '>
        <About />
        <FeaturedProduct />
        <Menu />
      </div>
    </div>
  )
}
