/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../public/hero.png";
import HeroImage2 from "../../public/hero2.png";
import { BiSearch } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";


const Hero = () => {

  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "http://a5.mzstatic.com/us/r30/Purple5/v4/c1/2f/4c/c12f4cba-1d9a-f6bf-2240-04085d3470ec/icon175x175.jpeg",
    "http://is2.mzstatic.com/image/thumb/Purple122/v4/d2/36/28/d23628e5-c9bf-d0fb-104f-61fa52976ff5/source/175x175bb.jpg"
  ];


  const changeImage = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

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
            <button className="bg-basic w-full font-bold shadow-2xl text-white rounded-md px-5 py-4 hover:bg-blue-300 flex items-center justify-center">
              <BiSearch className="mr-2 font-bold text-lg" />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="image_container section__img relative">
        {/* <Image src={HeroImage} alt={"hero"} className="bottom absolute" /> */}

        <Image src={HeroImage2} alt={"hero"} className="top absolute" />



      </div>
    </div>
  );
};

export default Hero;
