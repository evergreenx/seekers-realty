/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import HeroImage from "../../public/hero.png";
import { BiSearch } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center mb-20">
      <div className="text-container">
        <h2 className="text-textColor custom__heading text-6xl font-bold py-10">
          Modern Living for everyone
        </h2>

        <p className="text-textColor font-normal text-xl ">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>

        <div className="search mt-10 bg-[#F3F3FA] shadow-md flex-col lg:flex-row p-5 rounded-md flex items-center gap-5">
          <div className="input__container  flex rounded-md px-3 border-2   items-center bg-white flex-1">
            <MdLocationPin className="text-2xl text-gray-400" />

            <input
              type={"text"}
              className="input p-4 w-full outline-none placeholder-black-500 shadow-2xl  font-bold "
              placeholder="Search for a property"
            />
          </div>

          <div className="button">
            <button className="bg-basic font-bold shadow-2xl text-white rounded-md px-5 py-4 hover:bg-blue-300 flex items-center justify-center">
              <BiSearch className="mr-2 font-bold text-lg" />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="image_container">
        <Image src={HeroImage} alt={"hero"} />
      </div>
    </div>
  );
};

export default Hero;
