/* eslint-disable react/jsx-key */

 /* tslint:disable-next-line */
import React, { useEffect } from "react";
import Select from "react-select";
import Range from "../Filter/Range/index";
import axios from "axios";
import {
  purposeOptions,
  sortOptions,
  propertyTypeOptions,
  roomSizeOptions,
} from "./data";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const Index = () => {


  const [propertyPurpose, setPropertyPurpose] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");
  const [roomSize, setRoomSize] = React.useState("");
  const [maxValue, setMaxValue] = React.useState(1000000);
  const [minValue, setMinValue] = React.useState(0);

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002,6020",
      // @ts-expect-error
      purpose: propertyPurpose.value,
      // hitsPerPage: '25',
      // page: '0',
      // lang: 'en',
      // @ts-expect-error
      sort: sortBy.value,
      // rentFrequency: 'monthly',
      // categoryExternalID: '4'
    },
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key":
        "2f56c197d5mshf779d2fec591204p1bcbffjsn24d155b82ae2",
    },
  };

  const HandleSubmit = (e:any) => {
    e.preventDefault();
    // @ts-expect-error
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  // console.log(data , 'data');
  // console.log(error , 'error');
  // console.log(isLoading , 'isLoading');

  };

 

  return (
    <div className="bg-[#F3F3FA] my-10 ">
      <div className="filter__container max-w-5xl mx-auto p-5  py-10  ">
        <div className="filter__setting__text  ">
          <h2 className="filter__settings font-medium">Filter Settings</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 py-10    gap-5">
          <Select
            value={propertyPurpose}
            onChange={(option: any) => setPropertyPurpose(option)}
            placeholder="Purpose"
            // @ts-expect-error
            getOptionLabel={(option: any) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            getOptionValue={(option:any) => option.value}
            options={purposeOptions}
            className="border border-stone-900 rounded"
          />

          

          <Select
            value={sortBy}
            onChange={(option: any) => setSortBy(option)}
            placeholder={"Sort By"}
            // @ts-expect-error
            getOptionLabel={(option: any) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            getOptionValue={(option: any) => option.value}
            options={sortOptions}
            className="border border-stone-900 rounded"
          />

          <Select
            value={propertyType}
            onChange={(option: any) => setPropertyType(option)}
            placeholder="Property Type"
            options={propertyTypeOptions}
            // getOptionValue={(option: any) => option.value}
            // @ts-expect-error
            getOptionLabel={(option: any) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            className="border border-stone-900 rounded"
          />

          <Select
            value={roomSize}
            onChange={(option: any) => setRoomSize(option)}
            placeholder="Rooms"
            options={roomSizeOptions}
            // getOptionValue={(option: any) => option.value}
            // @ts-expect-error
            getOptionLabel={(option: any) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            className="border border-stone-900 rounded"
          />
        </div>

        <div className="justify-center w-3/4  mx-auto items-center flex-col">
          <div className="">
            <Range minValue={minValue} maxValue={maxValue} />
          </div>
        </div>

        <div className="button-submit mx-auto flex items-center justify-center">
          <button
          type="submit"
          onClick={HandleSubmit}
            // onClick={(event: React.MouseEvent<HTMLElement>) => HandleSubmit}
            className="bg-basic shadow-xl text-white font-medium py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
