import Image from 'next/image'
import { faBars, faClose, faContactCard, faHistory, faHome, faNewspaper, faQuestion, faScroll, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
function Header() {
    const logo = <img src='/logo.png' className='self-start h-12 lg:h-16' />
    const bars = <FontAwesomeIcon icon={faBars} onClick={ToogleNav} className='cursor-pointer text-extralight' />
    const close = <FontAwesomeIcon icon={faClose} className='cursor-pointer text-extralight' />
    const home = <FontAwesomeIcon icon={faHome} />
    const about = <FontAwesomeIcon icon={faHistory} />
    const menu = <FontAwesomeIcon icon={faNewspaper} />
    const contact = <FontAwesomeIcon icon={faContactCard} />
    const faq = <FontAwesomeIcon icon={faQuestion} />
    const shop = <FontAwesomeIcon icon={faShoppingBasket} />
    const [width, setWidth] = useState("w-0")
    function ToogleNav() {
        width === "w-0" ? setWidth("w-full md:w-1/2") : setWidth("w-0")
    }
    return (
        <div className='sticky z-10 backdrop-blur-md bg-gradient-to-r from-[#651549]  via-bordercolor  to-[#961b0d] w-full top-0 font-semibold px-4 lg:px-10 py-3 text-white'>
            <div className="lg:flex hidden justify-between px-4 lg:px-5">
                <div className='inline-flex gap-x-2 font-bold text-xl items-center '>
                    {logo}
                    Abula.com
                </div>
                <ul className='flex space-x-5 self-center text-md font-semibold'>
                    <Link href='/' className='hover:border-b-4 border-[#651549] duration-100'><li>Home</li></Link>
                    <Link href='/about-us' className='hover:border-b-4 border-[#651549] duration-100'><li>About Us</li></Link>
                    <Link href='/menu' className='hover:border-b-4 border-[#651549] duration-100'><li>Menu</li></Link>
                    <Link href='/contact' className='hover:border-b-4 border-[#651549] duration-100'><li>Contact Us</li></Link>
                    <Link href="/faq" className='hover:border-b-4 border-[#651549] duration-100'><li>FAQ's</li></Link>
                </ul>
                <a href='#contact' className='self-center'>
                    <button className='font-semibold hover:bg-[#121212] duration-300 self-center bg-bordercolor hover:scale-105 px-5 py-3 text-sm rounded-lg text-white'>{shop} Order Online</button>
                </a>
            </div>
            {/* For Mobile */}
            <div className="flex lg:hidden justify-between lg:px-5">
                <div className='inline-flex gap-x-2 font-semibold text-xl items-center '>
                    {bars}{logo}Abula.com
                </div>
            </div>
            <div className={`absolute ${width} duration-[1.5s] bg-gradient-to-br from-[#651549] via-[#961b0d] to-bordercolor top-0 left-0  min-h-screen overflow-x-hidden overflow-y-auto`}>
                <div className='flex justify-between gap-x-20 px-4 p-5 font-semibold text-xl items-center '>
                    <h1 className='flex items-center gap-x-2'>{logo}Abula.com</h1>
                    <h1 onClick={ToogleNav} className=' flex cursor-pointer items-center mx-4 hover:scale-110 bg-black p-4 rounded-full text-2xl'>{close}</h1>
                </div>
                <ul className='flex flex-col space-y-20 px-10 my-14 self-center text-lg font-semibold'>
                    <Link href='/' onClick={ToogleNav} className='hover:scale-110 duration-100'><li>{home} &nbsp;Home</li></Link>
                    <Link href='/about-us' onClick={ToogleNav} className='hover:scale-110 duration-100'><li>{about} &nbsp;About Us</li></Link>
                    <Link href='/menu' onClick={ToogleNav} className='hover:scale-110 duration-100'><li>{menu} &nbsp;Menu</li></Link>
                    <Link href='/contact' onClick={ToogleNav} className='hover:scale-110 duration-100'><li>{contact} &nbsp; Contact Us</li></Link>
                    <Link href="/faq" onClick={ToogleNav} className='hover:scale-110 duration-100'><li>{faq} &nbsp; FAQ's</li></Link>
                </ul>
                <div className='flex flex-col mt-20'>
                    <button className='font-semibold hover:bg-[#121212] duration-300 mx-auto bg-bordercolor hover:scale-105 px-5 py-3  rounded-lg text-white'>{shop} Order Online</button>
                </div>
            </div>
        </div>
    )
}

export default Header