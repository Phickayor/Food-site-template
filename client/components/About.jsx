import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function About() {
    const right = <FontAwesomeIcon icon={faAngleDoubleRight} />
    return (
        <div className='py-10  '>
            <div className='gap-10 flex justify-around'>
                <div className='w-full'>
                    <p className='inline px-2 py-1 border-l-4 bg-slate-200 border-bordercolor'>About Us</p>
                    <h1 className='text-3xl md:text-4xl my-4 font-semibold'>Get to <span className='text-bordercolor'>know us</span> better</h1>
                    <p className='text-lg lg:text-xl md:py-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquid inventore minus quam fuga sed nisi, nemo sint, enim aliquam pariatur doloremque eos eum provident modi repudiandae culpa minima voluptatem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure.
                    </p>
                    <Link href='/about-us' className='w-fit my-4 bg-bordercolor px-4 py-3 mx-3 rounded-xl hover:bg-[#121212] duration-300 hover:scale-110 font-semibold text-white'>Learn More &nbsp;{right}</Link>
                </div>
                <div className='hidden w-1/2 md:flex flex-col max-h-min self-center'>
                    <img src='/test2.jpeg' alt="illustration" className='self-center h-96 object-cover w-full rounded-3xl' />
                </div>
            </div>
        </div>
    )
}

export default About