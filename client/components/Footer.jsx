import React from 'react'
import { faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
    const instagram = (
        <FontAwesomeIcon icon={faInstagram} className="font-semibold text-4xl" />
    ); const linkedin = (
        <FontAwesomeIcon icon={faLinkedinIn} className="font-semibold text-4xl" />
    );
    const twitter = (
        <FontAwesomeIcon icon={faTwitter} className="font-semibold text-4xl" />
    );
    return (
        <div className='mx-auto grid grid-cols-4 place-content-center bg-slate-200 py-5 lg:px-10'>
            <div className='col-span-2 space-y-2 self-center'>
                <div className="flex space-x-2 mx-4 self-center items-center border-2" >
                    <img src="/logo.png" className="h-16 lg:w-fit" />
                    <h1 className="text-3xl font-bold self-center">Abula.com</h1>
                </div>
                <div className='mx-auto w-11/12 space-y-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus qui porro, officiis.</p>
                    <div className="flex space-x-4 text-slate-500">
                        <a className="hover:scale-110">{instagram}</a>
                        <a className="hover:scale-110" >{linkedin}</a>
                        <a className="hover:scale-110">{twitter}</a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center text-xl font-semibold'>Sitemap</h1>
                <ul className='flex flex-col space-y-3 my-4 text-center'>
                    <li className="cursor-pointer hover:scale-110 hover:text-bordercolor">Home</li>
                    <li className="cursor-pointer hover:scale-110 hover:text-bordercolor">About us</li>
                    <li className="cursor-pointer hover:scale-110 hover:text-bordercolor">Our Menu</li>
                    <li className="cursor-pointer hover:scale-110 hover:text-bordercolor">Order-now</li>
                    <li className="cursor-pointer hover:scale-110 hover:text-bordercolor">Contact us</li>
                    <li className="cursor-pointer hover:scale-110 hover:text-bordercolor">FAQ's</li>
                </ul>
            </div>
            <div>
                <h1 className='text-center text-xl font-semibold'>Support</h1>
                <ul className='flex flex-col space-y-3 my-4 text-center'>
                    <li className="cursor-pointer hover:scale-110 hover:text-bordercolor">Privacy Policy</li>
                    <li className="cursor-pointer hover:scale-110 hover:text-bordercolor">Terms & Conditions</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer