/* eslint-disable react/jsx-key */
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo2.svg'

const index = () => {
    return (
        <div className='bg-basic relative mb-0 top-0 w-full  text-lg text-white h-56 p-5 flex flex-col items-center justify-center'>

            <Image src={Logo} alt="logo" />
            <p>
                Seekers realty
            </p>
        </div>
    )
}

export default index