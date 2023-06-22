import React from 'react'

function AboutBanner() {
    return (
        <div className='bg-gradient-to-br text-white  from-[#651549] via-[#961b0d] to-bordercolor h-[500px]'>
            <img src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=3000'
                className='opacity-60 absolute w-full object-cover h-[500px]' />
            <div className='relative flex gap-x-20 justify-between h-full text-white mx-auto w-10/12 py-10 max-h-[500px]   '>
                <div className='space-y-5 flex flex-col justify-center'>
                    <p className='w-fit my-2 px-2 py-1 border-l-4 text-black bg-slate-200 border-bordercolor'>Main Course</p>
                    <h1 className='font-semibold text-6xl'>About Us</h1>
                    <p className='leading-[30px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Doloribus rem quasi praesentium quis repellat nisi libero. Laboriosam iste, odio, corrupti dolores
                        minus ratione voluptates libero cumque voluptatem quam officia velit.</p>
                </div>
                <img src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=2000"
                    className='hidden lg:block w-full object-cover rounded-3xl' />
            </div>
        </div>
    )
}

export default AboutBanner