import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export default function Home() {
  return (
    <div className={poppins.className}>
      <Header />
      <Hero />
      <About />
    </div>
  )
}
