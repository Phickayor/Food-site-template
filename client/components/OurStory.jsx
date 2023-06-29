import React from 'react'

function OurStory() {
    return (
        <div className='py-10'>
            <div className='gap-10 flex flex-col md:flex-row justify-around'>
                <div className='w-full flex flex-col justify-center'>
                    <p className=' px-2 w-fit py-1 border-l-4 bg-slate-200 border-bordercolor'>About Us</p>
                    <h1 className='text-3xl md:text-4xl my-4 font-semibold'>Our <span className='text-bordercolor'>Story</span></h1>
                    <p className='text-lg lg:text-xl md:py-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquid inventore minus quam fuga sed nisi, nemo sint, enim aliquam pariatur doloremque eos eum provident modi repudiandae culpa minima voluptatem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure.
                    </p>
                </div>
                <div className='md:w-1/2 w-full flex flex-col max-h-min self-center'>
                    <img
                        src='/test2.jpeg' alt="illustration" className='self-center md:h-96 h-56 object-cover w-full rounded-3xl' />
                </div>
            </div>
        </div >
    )
}

export default OurStory