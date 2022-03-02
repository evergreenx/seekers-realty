/* eslint-disable react/jsx-key */
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import companyIcon from "../../public/company (2) 1.svg";
import landSizeIcon from "../../public/dimensions 1.svg";
import locationIcon from "../../public/pin 1.svg";
import millify from "millify";
import Map from '../../components/Map/';
const PropertyDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/detail",
    params: { externalID: id },
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "a0b235c575msh6b6911bc8928ab9p116993jsnac85cbf17f82",
    },
  };

  const { data, error, isFetching, isLoading, refetch } = useQuery(
    "properties",
    () =>
      // @ts-expect-error

      axios(options).then((res) => res.data),

    { cacheTime: 5 }
  );
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if(isFetching)
  {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>No data</div>;
  }


  // alert(data?.geography.lat);
  return (
    <div key={data?.id} className=" max-w-5xl mx-auto p-5">
      <div className="property__name custom__header">
        <h2 className="font-bold  text-textColor text-3xl">{data?.title}</h2>
      </div>

      <div className=" py-5">
        <img
          src={data?.coverPhoto?.url}
          width="756px"
          height={"363px"}
          alt="property"
          className="shadow-md rounded-md"
        />
      </div>

      <div className="property-info py-8 grid lg:grid-cols-3 grid-cols-1 gap-10 items-center justify-center">
        <div className="iv flex  items-center space-x-6">
          <Image
            src={companyIcon}
            width="100px"
            height="100px"
            alt="company icon"
          />

          <h4 className="font-bold text-xl">{data?.category[0].name}</h4>
        </div>

        <div className="iv flex  items-center space-x-6">
          <Image
            src={landSizeIcon}
            width="100px"
            height="100px"
            alt="company icon"
          />

          <h4 className="font-bold text-xl">{millify(data?.area)} sqft </h4>
        </div>

        <div className="iv flex  items-center space-x-6">
          <Image
            src={locationIcon}
            width="100px"
            height="100px"
            alt="company icon"
          />

          <h4 className="font-bold text-xl">{data?.location[0].name}</h4>
        </div>

    


      </div>

      <div className="property__details">


        <div className="property__details__description py-8">
          <h3 className="font-bold text-xl">Description</h3>
          <p className="text-textColor font-normal text-lg">{data?.description}</p>
            </div>
      </div>


      <div className="basic__characters py-10">
        
        <div className="basic__characters__item">
          <h3 className="font-bold text-xl">Basic Characters</h3>
          <div className="flex flex-col space-y-4">
<ul className="list-disc">
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
    <span className="font-normal text-lg">{millify (data?.area) } sqft</span>
  </li>

  <li>
    <span className="text-lg">Verify status:</span>
    <span className="font-normal text-lg">{data?.verification?.status} </span>
  </li>


  <li>
    <span className="text-lg">City : </span>
    <span className="font-normal text-lg">{data?.location[0].name} </span>
  </li>
</ul>

            </div>
            </div>
      </div>

{/* @ts-ignore*/}
 <Map longitude={data?.geography.lng} latitude={data?.geography.lat}  />

 
    </div>
  );
};

export default PropertyDetails;
