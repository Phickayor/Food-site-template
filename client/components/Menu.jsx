import React from 'react'
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
function Menu() {
    const right = <FontAwesomeIcon icon={faAngleRight} />
    return (
        <div>
            <p className='inline px-2 py-1 border-l-4 bg-slate-200 border-bordercolor'>Our Menu</p>
            <h1 className='text-3xl md:text-4xl font-rubik my-4 font-semibold'>Take a sneak <b className='text-bordercolor'>peak </b>at our <b className='text-bordercolor'>menu</b> .</h1>
            <div className='my-10 mx-auto w-11/12 shadow-2xl shadow-black rounded-b-2xl'>
                <div className='bg-bordercolor text-white flex justify-between p-4'>
                    <h1 className='font-semibold text-xl'>Our Menu</h1>
                    <h3 className='hover:underline font-medium cursor-pointer'>See All &nbsp;{right}</h3>
                </div>
                <div className='mx-auto w-11/12 py-4'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={5}
                        navigation
                        pagination
                        onSwiper={swiper => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className='px-4'
                    >
                        {menuItems.map((item, index) => (
                            <SwiperSlide className='hover:shadow-2xl cursor-pointer my-4  self-center rounded-3xl' key={index}>
                                <img src={item.image} alt={item.name} className='hover:scale-110 mx-auto w-11/12 rounded-2xl' />
                                <div className='mx-5 space-y-1 my-2'>
                                    <h1 className='text-lg'>{item.name}</h1>
                                    <h2 className='font-semibold'>{item.price}</h2>
                                </div>
                            </SwiperSlide>
                        ))}
                        <h1 className='my-1 opacity-0'>...</h1>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}

export default Menu