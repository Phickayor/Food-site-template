import {
  CartContext
} from '@/Contexts/CartContext'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { useState } from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: '300' })
export default function App({ Component, pageProps }) {
  const [itemNumber, setItemNumber] = useState(0)
  var cart = []
  const AddCartItem = (item) => {
    cart.push(item)
    setItemNumber(itemNumber + 1)
    console.log(cart)
  }
  const RemoveCartItem = (item) => {
    alert("Removed from cart")
    setItemNumber(itemNumber - 1)
  }
  return (
    <div className={poppins.className}>
      <CartContext
        .Provider value={{ itemNumber, AddCartItem, RemoveCartItem }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartContext
        .Provider>
    </div>)
}
