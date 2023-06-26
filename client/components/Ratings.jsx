import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CountUp from 'react-countup'

function Ratings() {
    return (
        <div className=' bg-gradient-to-r from-[#651549] via-[#961b0d] to-bordercolor rounded-t-3xl py-5 text-white'>
            <div
                // data-aos="fade-up"
                // data-aos-duration="2000"
                className='mx-auto xl:w-9/12 w-11/12 md:w-10/12 gap-5 grid lg:grid-cols-4 grid-cols-2'>

                <div className='flex space-y-5 flex-col justify-center text-center   px-6 py-14 text-white rounded-3xl'>
                    <div className='text-5xl font-semibold'> <CountUp start="0" end="25" duration="2.5" />
                        <FontAwesomeIcon icon={faPlus} className='px-1' />
                    </div>
                    <h3 className='text-xl font-extralight'>Satisfied Customers</h3>
                </div>
                <div className='flex space-y-5 flex-col justify-center text-center   px-6 py-14 text-white rounded-3xl'>
                    <div className='text-5xl font-semibold'> <CountUp start="0" end="25" duration="2.5" />
                        <FontAwesomeIcon icon={faPlus} className='px-1' />
                    </div>
                    <h3 className='text-xl font-extralight'>Satisfied Customers</h3>
                </div>
                <div className='flex space-y-5 flex-col justify-center text-center   px-6 py-14 text-white rounded-3xl'>
                    <div className='text-5xl font-semibold'> <CountUp start="0" end="25" duration="2.5" />
                        <FontAwesomeIcon icon={faPlus} className='px-1' />
                    </div>
                    <h3 className='text-xl font-extralight'>Satisfied Customers</h3>
                </div>
                <div className='flex space-y-5 flex-col justify-center text-center   px-6 py-14 text-white rounded-3xl'>
                    <div className='text-5xl font-semibold'> <CountUp start="0" end="25" duration="2.5" />
                        <FontAwesomeIcon icon={faPlus} className='px-1' />
                    </div>
                    <h3 className='text-xl font-extralight'>Satisfied Customers</h3>
                </div>
            </div>
        </div>
    )
}
export default Ratings