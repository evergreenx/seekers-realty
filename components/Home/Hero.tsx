/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import HeroImage from "../../public/hero.png";
import { BiSearch } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
const Hero = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
            <div className="text-container">
                <h2 className="text-textColor text-6xl font-bold py-10">Modern Living for everyone</h2>

                <p className="text-textColor font-normal text-xl ">
                    We provide a complete service for the sale, purchase or rental of real
                    estate. We have been operating in Madrid and Barcelona more than 15
                    years.
                </p>




                <div className="search bg-[#F3F3FA] p-5 rounded-md">


                    <div className="input__container d flex rounded-md px-3  border items-center bg-white  ">
                        <MdLocationPin className="text-xl text-gray-400" />

                        <input type={"text"} className="input p-4 w-full outline-none " placeholder="Search for a property"


                        />


                    </div>

                    <div className="button">
                        <button className="bg-basic text-white rounded-md px-5 py-2 hover:bg-blue-300 flex items-center justify-center">


                            <BiSearch className="mr-2 font-bold text-lg" />

                            Search
                        </button>

                    </div>
                </div>
            </div>

            <div className="image_container">
                <Image src={HeroImage} alt={'hero'} />
            </div>


        </div>
    );
};

export default Hero;
