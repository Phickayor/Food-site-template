import React, { useState } from 'react'
import Appetizers from './Appetizers'
import { faAngleDown, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Deserts from './Deserts'
import Grills from './Grills'

function ShoppingPage() {
    const [categoryprops, setcategoryprops] = useState("w-0")
    const [categoryselected, setcategoryselected] = useState("Choose Category")
    const [content, setContent] = useState((<><Deserts /><Appetizers /><Grills /></>))
    const close = <FontAwesomeIcon icon={faClose} className='cursor-pointer text-extralight' />
    const HandleCategory = ((e) => {
        categoryprops === "w-0" ? setcategoryprops("w-full p-8") : setcategoryprops("w-0");
        if (typeof (e) === 'string') {
            setcategoryselected(e)
            if (e === "Appetizers") {
                setContent(<Appetizers />)
            } else if (e === "All") {
                setContent(<><Deserts /><Appetizers /><Grills /></>)
            } else if (e === "Desserts") {
                setContent(<Deserts />)
            }
            else {
                setContent(<Grills />)
            }
        }
        else { console.log("not string"); }
    })
    return (
        <div className='flex justify-between w-full'>
            <div className={`absolute ${categoryprops} duration-300 overflow-x-hidden lg:w-fit bg-slate-50 lg:bg-inherit lg:relative lg:p-10  `}>
                <div className='flex justify-between  self-start'>
                    <h1 className='font-semibold text-2xl text-bordercolor'>Categories</h1>
                    <h1 onClick={HandleCategory} className='lg:hidden flex cursor-pointer items-center text-white hover:scale-110 bg-black p-3
                     rounded-full text-xl'>{close}</h1>
                </div>
                <ul className='flex lg:px-10 flex-col space-y-10 py-10 self-center whitespace-nowrap text-lg font-semibold'>
                    <li onClick={() => HandleCategory('All')} className='cursor-pointer lg:hover:scale-110 hover:list-disc duration-100'>All</li>
                    <li onClick={() => HandleCategory('Appetizers')} className='cursor-pointer lg:hover:scale-110 hover:list-disc duration-100'>Appetizers</li>
                    <li onClick={() => HandleCategory('Desserts')} className='cursor-pointer lg:hover:scale-110 hover:list-disc duration-100'>Desserts</li>
                    <li onClick={() => HandleCategory('Grills')} className='cursor-pointer lg:hover:scale-110 hover:list-disc duration-100'>Grills</li>
                </ul>
            </div>
            <div className='py-5 w-full px-10 border-l-2 space-y-10'>
                <div onClick={HandleCategory} className='cursor-pointer lg:hidden flex justify-between px-5 text-lg rounded-2xl w-full p-3 my-4 text-slate-900 bg-slate-400'>
                    <option className='font-semibold'>{categoryselected}</option>
                    <FontAwesomeIcon icon={faAngleDown} className='self-center' />
                </div>
                {content}
            </div>
        </div>
    )
}

export default ShoppingPage