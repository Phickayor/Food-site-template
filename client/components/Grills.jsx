import React, { useContext } from 'react'
import menu from '../utils/menu.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    CartContext
} from '@/Contexts/CartContext';
function Grills() {
    const { AddCartItem, RemoveCartItem } = useContext(CartContext);

    function HandleItem(e) {
        if (e.target.innerHTML === 'Add to Cart') {
            toast.success("One item added to Cart")
            e.target.innerHTML = 'Added to Cart'
            setItemNumber(itemNumber + 1)
        } else {
            toast.error("One item removed from Cart")
            e.target.innerHTML = 'Add to Cart'
            setItemNumber(itemNumber - 1)
        }
        e.target.classList.toggle('bg-green-500')
    }
    return (
        <div className='space-y-8 mx-auto lg:w-11/12'>
            <div className='lg:mx-5 mx-2'>
                <p className='w-fit my-2 px-2 py-1 border-l-4 bg-slate-200 border-bordercolor'>Grills</p>
                <label className='text-3xl font-semibold'>Tantalizing <span className='text-bordercolor'>Grills</span></label>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 '>
                {menu.map(
                    (food, index) => {
                        if (food.label === "Grills") {
                            return (
                                <div key={index} className='flex flex-col justify-center py-5 space-y-4 text-white rounded-2xl bg-gradient-to-tr from-[#651549] via-[#961b0d] to-bordercolor '>
                                    <img src={food.image} className='mx-auto rounded-2xl w-3/4' />
                                    <div className='text-center'>
                                        <h1 className='text-xl font-semibold'>{food.name}</h1>
                                        <h1 className='text-lg'>{food.price}</h1>
                                        <button
                                            onClick={(e) => {
                                                var item = { name: food.name, price: food.price, image: food.image }
                                                var btn = e.target
                                                btn.classList.toggle("bg-green-500")
                                                btn.innerHTML === "Add to Cart" ?
                                                    (btn.innerHTML = "Added to Cart",
                                                        toast.success("One item added to Cart"),
                                                        AddCartItem(item)
                                                    )
                                                    :
                                                    (btn.innerHTML = "Add to Cart",
                                                        toast.error("One item removed from cartItem"),
                                                        RemoveCartItem(item.name)
                                                    )
                                            }}
                                            className='font-semibold hover:bg-[#121212] duration-300 bg-bordercolor hover:scale-105 p-2 px-4 rounded-lg text-white'>Add to Cart</button>
                                    </div>
                                </div>
                            )
                        }
                    }
                )}
                <ToastContainer />
            </div>
        </div >
    )
}

export default Grills