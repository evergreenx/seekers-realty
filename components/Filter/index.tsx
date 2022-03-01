/* eslint-disable react/jsx-key */
import React from "react";
import Select from "react-select";
import Range from "../Filter/Range/index";

const Index = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [propertyPurpose, setPropertyPurpose] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");
  const [roomSize , setRoomSize] = React.useState("");
  const [maxValue , setMaxValue] = React.useState(1000000);
  const [minValue , setMinValue] = React.useState(0);

  const purposeOptions = [
    { name: "Buy", value: "for-sale" },
    { name: "Rent", value: "for-rent" },
  ];

  const sortOptions = [
    { name: "Lowest Price", value: "price-asc" },
    { name: "Highest Price", value: "price-des" },
    { name: "Newest", value: "date-asc" },
    { name: "Oldest", value: "date-desc" },
    { name: "Verified", value: "verified-score" },
    { name: "City Level Score", value: "city-level-score" },
  ];

  const propertyTypeOptions = [
    { name: "Apartment", value: "4" },
    { name: "Townhouses", value: "16" },
    { name: "Villas", value: "3" },
    { name: "Penthouses", value: "18" },
    { name: "Hotel Apartments", value: "21" },
    { name: "Villa Compound", value: "19" },
    { name: "Residential Plot", value: "14" },
    { name: "Residential Floor", value: "12" },
    { name: "Residential Building", value: "17" },
  ];

  const roomSizeOptions = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' },
    { name: '6', value: '6' },
    { name: '7', value: '7' },
    { name: '8', value: '8' },
    { name: '9', value: '9' },
    { name: '10', value: '10' },
  ]

  
  return (
    <div className="bg-[#F3F3FA] my-10 ">
      <div className="filter__container max-w-5xl mx-auto p-5  py-10  ">
        <div className="filter__setting__text  ">
          <h2 className="filter__settings font-medium">Filter Settings</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 py-10    gap-5">
          <Select
            value={propertyPurpose}
            onChange={(option) => setPropertyPurpose(option)}
            placeholder="Purpose"
            getOptionLabel={(option) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            getOptionValue={(option) => option.value}
            options={purposeOptions}
            className="border border-stone-900 rounded"
          />

          <Select
            value={sortBy}
            onChange={(option:any) => setSortBy(option)}
            placeholder={"Sort By"}
            getOptionLabel={(option:any) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            getOptionValue={(option:any) => option.value}
            options={sortOptions}
            className="border border-stone-900 rounded"
          />

          <Select
            value={propertyType}
            onChange={(option) => setPropertyType(option)}
            placeholder="Property Type"
            options={propertyTypeOptions}
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            className="border border-stone-900 rounded"
          />






<Select
            value={roomSize}
            onChange={(option) => setRoomSize(option)}
            placeholder="Rooms"
            options={roomSizeOptions}
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            className="border border-stone-900 rounded"
          />
        </div>

        <div className="justify-center w-3/4  mx-auto items-center flex-col">
          <div className="">
            <Range  minValue={minValue} maxValue={maxValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
