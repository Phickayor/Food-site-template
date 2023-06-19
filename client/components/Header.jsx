import Image from 'next/image'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
function Header() {
    // const logo = <img src='/logo.png' className='self-start scale-50' />
    const bars = <FontAwesomeIcon icon={faBars} className='cursor-pointer text-extralight' />
    const close = <FontAwesomeIcon icon={faClose} className='cursor-pointer text-extralight' />
    const [menuBtn, setmenuBtn] = useState(bars)
    return (
        <div className='absolute w-full top-0 font-semibold px-4 lg:px-10 py-3 text-white'>
            <div className="lg:flex hidden justify-between px-4 lg:px-5">
                <div className='inline-flex font-bold text-xl items-center '>
                    {/* {logo} */}
                    Abula.com
                </div>
                <ul className='flex space-x-5 self-center text-md font-semibold'>
                    <Link href='/' className='hover:text-purple-700 duration-300'><li>Home</li></Link>
                    <Link href='#about' className='hover:text-purple-700 duration-300'><li>About</li></Link>
                    <Link href='#skills' className='hover:text-purple-700 duration-300'><li>Menu</li></Link>
                    <Link href='/contact' className='hover:text-purple-700 duration-300'><li>Contact Us</li></Link>
                    <Link href="#services" className='hover:text-purple-700 duration-300'><li>FAQ's</li></Link>
                </ul>
                <a href='#contact'>
                    <button className='font-semibold hover:bg-purple-700 duration-300 self-center bg-[#ed8419] hover:scale-105 px-5 py-3 text-sm rounded-lg text-white'>Order Online</button>
                </a>
            </div>
            {/* For Mobile */}
            <div className="flex lg:hidden justify-between lg:px-5">
                <div className='inline-flex gap-x-3 font-semibold text-xl items-center '>
                    {menuBtn}{/* {logo} */}
                    Abula.com
                </div>
            </div>
        </div>
    )
}

export default Header