import React, { useEffect, useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import FeaturedProducts from '../utils/featuredproducts.json'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function FeaturedProduct() {
    const cart = <FontAwesomeIcon icon={faCartShopping} />
    const [slides, setSlides] = useState()
    function AdjustSlides() {
        window.innerWidth > 1024 ? setSlides(2) : setSlides(1)
    }

    useEffect(() => {
        AdjustSlides();
        const handleResize = () => {
            AdjustSlides();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    return (
        <div className='py-5 '>
            <div>
                <div className='w-full'>
                    <p className='inline px-2 py-1 border-l-4 bg-slate-200 border-bordercolor'>Featured Products</p>
                    <h1 className='text-3xl md:text-4xl font-rubik my-4 font-semibold'>Here are some of our <b className='text-bordercolor'>special delicacies</b> .</h1>
                    {/* swiper */}
                    {(<Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={slides} //2 for Desktop
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={swiper => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className='my-10 lg:w-11/12 '
                    >
                        {FeaturedProducts.map((food, index) => (
                            <SwiperSlide key={index} className='bg-black rounded-2xl'>
                                <img
                                    className="w-full absolute opacity-60 object-cover h-96 -z-10 rounded-2xl"
                                    src={food.image}
                                    alt={food.name}
                                />
                                <div className=' h-96 flex flex-col justify-center lg:mx-20 mx-5  text-white space-y-5'>
                                    <div className='space-y-2'>
                                        <label className='inline-block text-sm w-fit px-2 border-l-4 bg-slate-200 border-bordercolor text-black'>{food.label}</label>
                                        <h1 className='text-5xl font-semibold text-bordercolor'>{food.name}</h1>
                                    </div>
                                    <p className='text-xl'>{food.content}</p>
                                    <button className='w-fit my-4 bg-bordercolor px-4 py-3 rounded-xl hover:bg-[#121212] duration-300 hover:scale-110 font-semibold text-white'>Add To Cart &nbsp;{cart}</button>
                                </div>
                            </SwiperSlide>
                        ))}
                        <h1 className="mt-5 opacity-0">...</h1>
                    </Swiper>)}
                </div>
                <div>
                </div>
            </div>
        </div >
    )
}

export default FeaturedProduct