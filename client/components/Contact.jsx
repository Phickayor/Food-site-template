import React, { useState } from 'react'
import { faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faMapMarker,
    faPhone,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
    const phone = <FontAwesomeIcon icon={faPhone} />;
    const mail = <FontAwesomeIcon icon={faEnvelope} />;
    const location = <FontAwesomeIcon icon={faMapMarker} />;
    const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
    const instagram = (
        <FontAwesomeIcon icon={faInstagram} className="font-semibold text-4xl" />
    ); const linkedin = (
        <FontAwesomeIcon icon={faLinkedinIn} className="font-semibold text-4xl" />
    );
    const twitter = (
        <FontAwesomeIcon icon={faTwitter} className="font-semibold text-4xl" />
    );
    const [load, setLoad] = useState()
    return (
        <div className='bg-gradient-to-r from-[#651549]  via-bordercolor  to-[#961b0d] py-10 text-white'>
            <div className='mx-auto w-11/12 lg:flex gap-10 '>
                <div className="px-5 lg:px-10 lg:w-1/2"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div className="mx-auto lg:w-10/12 my-10 h-full">
                        <p className='inline px-2 py-1 border-l-4 bg-slate-500 border-bordercolor'>Talk to us</p>
                        <h1 className="font-bold text-darkblue lg:text-4xl text-2xl my-4">Contact Us</h1>
                        <p className="text-textcolor text-xl">
                            Fill up the form and get a response from our team within 24 hours
                        </p>
                        <ul className="lg:my-10 my-5 space-y-5 text-xl">
                            <li className="flex">{phone} &nbsp; +123-456-7890</li>
                            <li className="flex">{mail} &nbsp; johndoe@gmail.com</li>
                            <li className="flex ">{location} &nbsp; 3, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur, 104102, Lagos</li>
                        </ul>
                        <div className="flex space-x-6">
                            <a className="hover:scale-110">{instagram}</a>
                            <a className="hover:scale-110" >{linkedin}</a>
                            <a className="hover:scale-110">{twitter}</a>
                        </div>
                    </div>

                </div>
                <form className=' my-10 space-y-8 font-semibold'>
                    <div className='flex space-x-5'>
                        <input type="text" placeholder="Name*" className=' focus:outline-none text-black rounded-lg px-5 p-3 w-1/2' />
                        <input type="text" placeholder="Email*" className=' focus:outline-none text-black px-5 rounded-lg  p-3 w-1/2' />
                    </div>
                    <div className='flex space-x-5'>
                        <input type="text" placeholder="Phone Number*" className='focus:outline-none text-black rounded-lg  px-5 p-3 w-1/2' />
                        <input type="text" placeholder="Subject*" className='focus:outline-none text-black rounded-lg  px-5 p-3 w-1/2' />
                    </div>
                    <textarea className='focus:outline-none text-black px-5 rounded-lg p-4 w-full h-40' placeholder='Your Message*' />
                    <button className="px-10 py-4 text-primary2 font-semibold bg-[#651549] rounded-xl">Submit Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact