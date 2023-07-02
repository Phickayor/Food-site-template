import {
  CartContext
} from '@/Contexts/CartContext'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { useState } from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: '300' })
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const [itemNumber, setItemNumber] = useState(0)
  var [cart, setCart] = useState([])
  const AddCartItem = (item) => {
    if (cart.find(obj => obj.name === item.name) !== undefined) {
      toast.warning("This product is already in your cart");
    }
    else {
      setCart([...cart, item]);
      setItemNumber(itemNumber + 1);
      toast.success("One item added to Cart");
    }
  }
  const RemoveCartItem = (itemName) => {
    setCart(cart.filter((item) => item.name !== itemName));
    setItemNumber(itemNumber - 1);
    toast.error("One item removed from Cart");
  }
  const IncreaseQuantity = (itemName) => {
    cart.find((item) => {
      if (item.name === itemName) {
        item.quantity++;
        item.amount = item.quantity * item.price;
      }
    })
  }
  const DecreaseQuantity = (itemName) => {
    cart.find((item) => {
      if (item.name === itemName && item.quantity > 1) {
        item.quantity--;
        item.amount = item.quantity * item.price;
      }
    })
  }
  return (
    <div className={poppins.className}>
      <CartContext.Provider value={{ itemNumber, AddCartItem, RemoveCartItem, cart, IncreaseQuantity, DecreaseQuantity }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartContext.Provider>
      <ToastContainer />
    </div>)
}
