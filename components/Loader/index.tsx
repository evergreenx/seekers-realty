/* eslint-disable react/jsx-key */
import React from "react";
import Logo2 from "../../public/logo2.svg";
import Image from "next/image";

const index = () => {
  return (
    <div className="bg-basic  h-screen z-40 items-center flex justify-center flex-col ">
      <Image src={Logo2} alt="logo" className="animate-pulse" />
      <h2 className="animate-bounce py-3">
        <span className="text-white font-bold text-2xl animate-bounce">
            Seekers Realty
        </span>

      </h2>
    </div>
  );
};

export default index;
