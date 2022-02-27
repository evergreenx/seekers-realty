/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Vector.svg'
import '../TopBar/style.module.css'
import Link from 'next/link'
const Index = () => {
    return (
        <div className=' max-w-5xl mx-auto flex scroll items-center justify-between pt-10 mb-20 px-5 w-full  '>


<Link href="/" passHref>

<div className="mr-20 cursor-pointer">
                <Image src={Logo}  />
</div>
</Link>

            

            <div className="links flex-1 lg:block hidden ">

                <ul className='flex text-textColor font-normal text-base space-x-5'>
                    <li className=' cursor-pointer '>Top offers</li>
                    <li className=' cursor-pointer '>Search in offers</li>
                    <li className=' cursor-pointer '> References</li>
                    <li className=' cursor-pointer '> About us</li>
                    <li className=' cursor-pointer '>Our team</li>
                </ul>
            </div>

            <div className="contact__us__button">
                <button className=" shadow-xl bg-basic text-white rounded-md px-5 py-2 hover:bg-blue-300">
                    Contact us
                </button>
            </div>
        </div>
    )
}

export default Index