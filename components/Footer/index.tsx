/* eslint-disable react/jsx-key */
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo2.svg'

const index = () => {
    return (
        <div className='bg-basic w-full h-80 p-5 flex flex-col items-center justify-center'>

            <Image src={Logo} alt="logo" />
            Seekers realty
        </div>
    )
}

export default index