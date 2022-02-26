/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Vector.svg'
import '../TopBar/style.module.css'
const Index = () => {
    return (
        <div className='flex items-center justify-between pt-5 mb-20 px-5  '>

            <div className="logo mr-12 ">
                <Image src={Logo} />
            </div>

            <div className="links flex-1 ">

                <ul className='flex text-textColor font-normal text-base space-x-5 '>
                    <li>Top offers</li>
                    <li>Search in offers</li>
                    <li> References</li>
                    <li> About us</li>
                    <li>Our team</li>
                </ul>
            </div>

            <div className="contact__us__button">
                <button className=" bg-basic text-white rounded-md px-5 py-2 hover:bg-blue-300">
                    Contact us
                </button>
            </div>
        </div>
    )
}

export default Index