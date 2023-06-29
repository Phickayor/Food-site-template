import React, { useEffect, useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import menuItems from '../utils/menu.json'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
function Menu() {
    const right = <FontAwesomeIcon icon={faAngleRight} />
    const [slides, setSlides] = useState(null)
    function AdjustSlides() {
        window.innerWidth > 1024 ? setSlides(5) : setSlides(2)
    }
    useEffect(() => {
        AdjustSlides()
        const handleResize = () => {
            AdjustSlides();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

    return (
        <div>
            <p className='inline px-2 py-1 border-l-4 bg-slate-200 border-bordercolor'>Our Menu</p>
            <h1 className='text-3xl md:text-4xl  my-4 font-semibold'>Take a sneak <span className='text-bordercolor'>peak </span>at our <span className='text-bordercolor'>menu</span> .</h1 >
            <div className='my-10 mx-auto lg:w-11/12 shadow-2xl shadow-black rounded-b-2xl'>
                <div className='bg-bordercolor text-white flex justify-between p-4'>
                    <h1 className='font-semibold text-xl'>Our Menu</h1>
                    <Link href='/menu' className='hover:underline font-medium cursor-pointer'>See All &nbsp;{right}</Link>
                </div>
                <div className='mx-auto w-11/12 py-4'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={slides} //2 for Desktop
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={swiper => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {menuItems.map((item, index) => (
                            <SwiperSlide className='hover:shadow-2xl cursor-pointer my-4 hover:scale-110 self-center rounded-3xl' key={index}>
                                <img src={item.image} alt={item.name} className=' mx-auto w-11/12 rounded-2xl' />
                                <div className='mx-5 space-y-1 my-2'>
                                    <h1 className='text-lg'>{item.name}</h1>
                                    <h2 className='font-semibold'>{item.price}</h2>
                                </div>
                            </SwiperSlide>
                        ))}
                        <h1 className='opacity-0'>...</h1>
                    </Swiper>
                </div>
            </div>

        </div >
    )
}

export default Menu