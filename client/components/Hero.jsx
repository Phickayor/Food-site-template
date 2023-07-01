import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function Hero() {
    const right = <FontAwesomeIcon icon={faAngleDoubleRight} />
    return (
        <div className='lg:p-16 pt-18 py-20 px-10 flex gap-20  w-full bg-gradient-to-br text-white  from-[#651549] via-[#961b0d] to-bordercolor'>
            <div className='lg:w-1/2 flex space-y-5 flex-col justify-center'>
                <label className='bg-white w-fit border-bordercolor px-2 border-l-4 block text-[#651549] font-semibold'>Foods and Drinks</label>
                <h1 className='text-5xl leading-[60px]  xl:text-7xl font-semibold xl:leading-[75px]'>Hundreds of flavors <br />under one roof</h1>
                <Link href='/menu' className='w-fit my-4 hover:scale-110 duration-300 bg-gradient-to-r to-[#651549]  from-bordercolor p-4 mx-3 rounded-2xl font-extrabold'>Explore Menu &nbsp;{right}</Link>
            </div>
            <div className='hidden md:block w-1/2 self-center'>
                <img
                    src="/test.jpeg"
                    className='rounded-full' />
            </div>
        </div>
    )
}

export default Hero