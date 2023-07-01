// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import { useState } from 'react'
// import { CountUp } from 'react-countup'
// import { ScrollTrigger } from 'react-scroll-trigger'
// function Ratings() {
//     const [endvalue, setEndValue] = useState(null)
//     function Active() {
//         setEndValue(25)
//     }
//     function Deactivated() {
//         setEndValue();
//     }
//     return (
//         <div className=' bg-gradient-to-r from-[#651549] via-[#961b0d] to-bordercolor rounded-t-3xl py-5 text-white'>
//             <div
//                 // data-aos="fade-up"
//                 // data-aos-duration="2000"
//                 className='mx-auto xl:w-9/12 w-11/12 md:w-10/12 gap-5 grid lg:grid-cols-4 grid-cols-2'>

//                 <div className='flex space-y-5 flex-col justify-center text-center   px-6 py-14 text-white rounded-3xl'>

//                     <div className='text-5xl font-semibold'>
//                         <ScrollTrigger onEnter={Active} onExit={Deactivated}>
//                             <CountUp start="0" end={endvalue} duration="2.5" />
//                             <FontAwesomeIcon icon={faPlus} className='px-1' />
//                         </ScrollTrigger>
//                     </div>
//                     <h3 className='text-xl font-extralight'>Satisfied Customers</h3>
//                 </div>  <div className='flex space-y-5 flex-col justify-center text-center   px-6 py-14 text-white rounded-3xl'>

//                     <div className='text-5xl font-semibold'>
//                         <ScrollTrigger onEnter={Active} onExit={Deactivated}>
//                             <CountUp start="0" end={endvalue} duration="2.5" />
//                             <FontAwesomeIcon icon={faPlus} className='px-1' />
//                         </ScrollTrigger>
//                     </div>
//                     <h3 className='text-xl font-extralight'>Satisfied Customers</h3>
//                 </div>  <div className='flex space-y-5 flex-col justify-center text-center   px-6 py-14 text-white rounded-3xl'>

//                     <div className='text-5xl font-semibold'>
//                         <ScrollTrigger onEnter={Active} onExit={Deactivated}>
//                             <CountUp start="0" end={endvalue} duration="2.5" />
//                             <FontAwesomeIcon icon={faPlus} className='px-1' />
//                         </ScrollTrigger>
//                     </div>
//                     <h3 className='text-xl font-extralight'>Satisfied Customers</h3>
//                 </div>  <div className='flex space-y-5 flex-col justify-center text-center   px-6 py-14 text-white rounded-3xl'>

//                     <div className='text-5xl font-semibold'>
//                         <ScrollTrigger onEnter={Active} onExit={Deactivated}>
//                             <CountUp start="0" end={endvalue} duration="2.5" />
//                             <FontAwesomeIcon icon={faPlus} className='px-1' />
//                         </ScrollTrigger>
//                     </div>
//                     <h3 className='text-xl font-extralight'>Satisfied Customers</h3>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Ratings