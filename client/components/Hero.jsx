import React from 'react'

function Hero() {
    return (
        <div className='lg:p-16 lg:pt-36 py-20 px-10 flex w-full bg-gradient-to-br text-white  from-[#651549] via-[#961b0d] to-[#ed8419]'>
            <div className='lg:w-1/2 flex flex-col justify-center'>
                <label className='bg-white w-fit border-[#ed8419] px-2 border-l-4 block text-[#651549] font-semibold'>Foods and Drinks</label>
                <h1 className='text-4xl mds:text-5xl lg:text-7xl font-semibold lg:leading-[75px]'>Hundreds of flavors <br />under one roof</h1>
                <button className='w-fit my-4 bg-[#ed8419] px-4 py-3 mx-3 rounded-2xl font-semibold'>Explore Menu</button>
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