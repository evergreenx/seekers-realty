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
import Loader from "../../components/Loader/";
import Map from "../../components/Map/";
import PropertyDetailsCmp from "../../components/PropertyDetails/Index";
const PropertyDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/detail",
    params: { externalID: id },
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      // new  x-rapidapi-key

      "x-rapidapi-key": "1cd2d3c714mshdb2bbd71336e187p1e0fdbjsn97c88b34479c",
    },
  };

  const { data, error, isFetching, isLoading } = useQuery(
    "properties",
    () =>
      // @ts-expect-error

      axios(options).then((res) => res.data),

    { cacheTime: 5, refetchOnWindowFocus: false }
  );
  console.log(data);

  // alert(data?.geography.lat);
  return (
    <div className=" flex-grow my-10 ">
      {/* ts @ts-expect-error */}
      <PropertyDetailsCmp
        isFetching={isFetching}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default PropertyDetails;
