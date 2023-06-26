import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlRice, faVolumeMute, faBed, faPeopleGroup, faRoad, faLifeRing } from '@fortawesome/free-solid-svg-icons'
import 'aos/dist/aos.css'
import Aos from 'aos'
function Services() {
    const food = <FontAwesomeIcon icon={faBowlRice} />
    const serene = <FontAwesomeIcon icon={faVolumeMute} />
    const staffs = <FontAwesomeIcon icon={faPeopleGroup} />
    const road = <FontAwesomeIcon icon={faRoad} />
    const life = <FontAwesomeIcon icon={faLifeRing} />
    return (
        <div>
            <div>
                <div
                    // data-aos="zoom-in-left"
                    // data-aos-duration="2000"
                    className=' py-10 lg:px-10 px-5 flex flex-col '>
                    <h1 className="lg:text-4xl text-3xl font-semibold text-slate-700 text-center">Why Choose Us</h1>
                    <p className='text-md lg:text-lg my-2 text-center'>
                        Choose us for unparalleled luxury, exquisite cuisine, serene ambiance, and exceptional service.
                    </p>
                    <ul className="mx-auto w-11/12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-5 text-md ">
                        <li className="flex space-x-5 sm:my-5">
                            <h1 className='text-slate-700 lg:text-2xl text-xl'>{food}</h1>
                            <div className='space-y-2'>
                                <h3 className="font-bold text-gray20 text-lg">Exquisite Culinary Delights.</h3>
                                <p className="font-light">
                                    Indulge in our mouthwatering, high-quality cuisine
                                </p>
                            </div>
                        </li>
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 lg:text-2xl text-xl'>{serene}</h1>
                            <div className='space-y-2'>
                                <h3 className="font-bold text-gray20  text-lg">Serene Enviroment</h3>
                                <p className="font-light">
                                    Relax and rejuvenate in our tranquil and peaceful surroundings.
                                </p>
                            </div>
                        </li>
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 lg:text-2xl text-xl'>{staffs}</h1>
                            <div className='space-y-2'>
                                <h3 className="font-bold text-gray20  text-lg">Unmatched Customer Satisfaction</h3>
                                <p className="font-light">
                                    We strive to ensure your utmost satisfaction.
                                </p>
                            </div>
                        </li>
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 lg:text-2xl text-xl'>{road}</h1>
                            <div className='space-y-2'>
                                <h3 className="font-bold text-gray20  text-lg">A Trusted Destination</h3>
                                <p className="font-light">
                                    Choose us for a trusted and reliable hospitality experience.
                                </p>
                            </div>
                        </li>
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 lg:text-2xl text-xl'>{life}</h1>
                            <div className='space-y-2'>
                                <h3 className="font-bold text-gray20  text-lg">Memorable Experiences</h3>
                                <p className="font-light">
                                    We create unforgettable moments that exceed expectations.
                                </p>
                            </div>
                        </li>
                        <li className="flex space-x-5">
                            <h1 className='text-slate-700 lg:text-2xl text-xl'>{life}</h1>
                            <div className='space-y-2'>
                                <h3 className="font-bold text-gray20  text-lg">Memorable Experiences</h3>
                                <p className="font-light">
                                    We create unforgettable moments that exceed expectations.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services