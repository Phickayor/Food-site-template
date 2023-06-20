import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function About() {
    const right = <FontAwesomeIcon icon={faAngleDoubleRight} />
    return (
        <div className='py-10  '>
            <div className='gap-10 flex justify-around'>
                <div className='w-full'>
                    <p className='inline px-2 py-1 border-l-4 bg-slate-200 border-bordercolor'>About Us</p>
                    <h1 className='text-3xl md:text-4xl font-rubik my-4 font-semibold'>Get to <b className='text-bordercolor'>know us</b> better</h1>
                    <p className='font-krub text-lg lg:text-xl md:py-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex aliquid inventore minus quam fuga sed nisi, nemo sint, enim aliquam pariatur doloremque eos eum provident modi repudiandae culpa minima voluptatem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, iure, architecto deserunt veniam corrupti laborum laudantium quo vel dolorum numquam saepe, repudiandae totam! Veniam autem, distinctio a quis facilis expedita.
                    </p>
                    <button className='w-fit my-4 bg-bordercolor px-4 py-3 mx-3 rounded-xl hover:bg-[#121212] duration-300 hover:scale-110 font-semibold text-white'>Learn More &nbsp;{right}</button>
                </div>
                <div className='hidden w-1/2 md:flex flex-col max-h-min self-center'>
                    <img src='https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=2000' alt="illustration" className='self-center h-96 object-cover w-full rounded-3xl' />
                </div>
            </div>
        </div>
    )
}

export default About