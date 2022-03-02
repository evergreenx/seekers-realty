/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";

type interfaceProps = {
  title: string;
  price: number;
  location: string;
  coverImg: string;
  id: string;
};

const Index = ({ id, title, price, location, coverImg }: interfaceProps) => {
  return (
    <>
      <div
        key={id}
        className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          < Image
            className="rounded-t-lg w-fit"
            src={coverImg}
            alt=""
            width={320}
            height={200}
           
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold truncate tracking-tight text-textColor dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-bold text-base text-basic dark:text-gray-400">
            {price} Aed
          </p>
        
        </div>
      </div>
    </>
  );
};

export default Index;
