/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import companyIcon from "../../public/company (2) 1.svg";
import landSizeIcon from "../../public/dimensions 1.svg";
import locationIcon from "../../public/pin 1.svg";
import millify from "millify";
import Map from "../Map/";
import CustomCarosuel from "../../components/PropertyDetails/CustomCarosuel";

interface Props {
  data: any;
  isFetching: any;
  isLoading: any;
  error: any;
}

const Index = ({ isFetching, data, isLoading, error }: Props) => {
  if (isLoading) {
    return (
        <>
      <div className="flex items-center justify-center w-full max-w-5xl mx-auto p-5  py-10">
        <svg
          role="status"
          className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
      </>
    );
  }

  if (isFetching) {
    return (
      <>
        <div className="flex items-center justify-center w-full max-w-5xl mx-auto p-5  py-10">
          <svg
            role="status"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </>
    );
  }

  if (error) {
    return(
        <>
        
           `An error has occurred:  ${error?.message}`
        </>

    ) 
  }
//   if (data.length === 0) {
//     return <div>No data</div>;
//   }

  return (
    <>
      <div key={data?.id} className=" max-w-5xl mb-20 mx-auto p-5">
        <div className="property__name custom__heading ">
          <h2 className="font-bold  text-textColor text-3xl">{data?.title}</h2>
        </div>

        <div className=" py-5">
          <Image
            src={data?.coverPhoto?.url}
            width="756px"
            height={"363px"}
            alt="property"
            blurDataURL={data?.coverPhoto?.url}
            placeholder="blur"
            className="shadow-md rounded-md"
          />
        </div>

        <div className="image__carosuel py-10 px-4">
            <CustomCarosuel photos={data.photos} />
        </div>

        <div className="property-info py-8 grid lg:grid-cols-3 grid-cols-1 gap-10 items-center justify-center">
          <div className="iv flex  items-center space-x-6">
            <Image src={companyIcon} alt="company icon" />

            <h4 className="font-bold text-xl">{data?.category[0]?.name}</h4>
          </div>

          <div className="iv flex  items-center space-x-6">
            <Image src={landSizeIcon} alt="company icon" />

            <h4 className="font-bold text-xl">{millify(data?.area)} sqft </h4>
          </div>

          <div className="iv flex  items-center space-x-6">
            <Image src={locationIcon} alt="company icon" />

            <h4 className="font-bold text-xl">{data?.location[0]?.name}</h4>
          </div>
        </div>

        <div className="property__details">
          <div className="property__details__description py-8">
            <h3 className="font-bold text-xl custom__heading mb-5 ">
              Description
            </h3>
            <p className="text-textColor font-normal text-lg">
              {data?.description}
            </p>
          </div>
        </div>

        <div className="basic__characters py-10">
          <div className="basic__characters__item">
            <h3 className="font-bold text-xl custom__heading mb-5 ">
              Basic Characters
            </h3>
            <div className="flex flex-col space-y-4">
              <ul className="list-disc px-4">
                <li>
                  <span className="text-lg">Bedrooms:</span>
                  <span className="font-normal text-lg">{data?.rooms}</span>
                </li>

                <li>
                  <span className="text-lg">Bathroom:</span>
                  <span className="font-normal text-lg">{data?.baths}</span>
                </li>

                <li>
                  <span className="text-lg">Apartment area:</span>
                  <span className="font-normal text-lg">
                    {millify(data?.area)} sqft
                  </span>
                </li>

                <li>
                  <span className="text-lg">Verify status:</span>
                  <span className="font-normal text-lg">
                    {data?.verification?.status}{" "}
                  </span>
                </li>

                <li>
                  <span className="text-lg">City : </span>
                  <span className="font-normal text-lg">
                    {data?.location[0].name}{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* @ts-ignore*/}

        <div className="w-full map__contain container">
          <Map longitude={data?.geography.lng} latitude={data?.geography.lat} />
        </div>
      </div>
    </>
  );
};

export default Index;
