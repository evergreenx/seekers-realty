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

const Index = ({ data, isLoading, isFetching, error }: any) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <div>Refetching ...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }
  return (
    <>

        {data.map((item: interfaceProps) => (
            
      <div
        key={item.id}
        className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img className="rounded-t-lg w-full h-56" src={item.coverPhoto.url} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold truncate tracking-tight text-textColor dark:text-white">
              {item.title}
            </h5>
          </a>
          <p className="mb-3 font-bold text-base text-basic dark:text-gray-400">
            {item.price} Aed
          </p>
        </div>
      </div>

        ))}
    </>

  );
};

export default Index;
