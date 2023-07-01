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
  var [cart, setCart] = useState([])
  const AddCartItem = (item) => {
    setCart([...cart, item])
    setItemNumber(itemNumber + 1)
  }
  const RemoveCartItem = (itemName) => {
    setCart(cart.filter((item) => item.name !== itemName));
    setItemNumber(itemNumber - 1)
  }
  return (
    <div className={poppins.className}>
      <CartContext.Provider value={{ itemNumber, AddCartItem, RemoveCartItem }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartContext.Provider>
    </div>)
}
