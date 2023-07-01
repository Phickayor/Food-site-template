import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedProduct from '@/components/FeaturedProduct'
import Menu from '@/components/Menu'
import ContactForm from '@/components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='w-11/12 mx-auto '>
        <About />
        <FeaturedProduct />
        <Menu />
      </div>
      <ContactForm />
    </div>
  )
}
