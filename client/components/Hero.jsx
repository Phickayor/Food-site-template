import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Hero() {
    const right = <FontAwesomeIcon icon={faAngleDoubleRight} />
    return (
        <div className='lg:p-16 lg:pt-36 py-20 px-10 flex w-full bg-gradient-to-br text-white  from-[#651549] via-[#961b0d] to-bordercolor'>
            <div className='lg:w-1/2 flex space-y-5 flex-col justify-center'>
                <label className='bg-white w-fit border-bordercolor px-2 border-l-4 block text-[#651549] font-semibold'>Foods and Drinks</label>
                <h1 className='text-4xl mds:text-5xl lg:text-7xl font-semibold lg:leading-[75px]'>Hundreds of flavors <br />under one roof</h1>
                <button className='w-fit my-4 hover:scale-110 duration-300 bg-gradient-to-r to-[#651549]  from-bordercolor p-4 mx-3 rounded-2xl font-extrabold'>Explore Menu &nbsp;{right}</button>
            </div>
            <div className='hidden lg:block w-1/2'>
                <img
                    src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=3000"
                    className='rounded-full mx-10' />
            </div>
        </div>
    )
}

export default Hero