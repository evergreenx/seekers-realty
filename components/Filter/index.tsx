/* eslint-disable react/jsx-key */
import React from "react";
import Select from "react-select";
import Range from "../Filter/Range/index";
import { purposeOptions , sortOptions , propertyTypeOptions , roomSizeOptions} from './data'
import { ReactElement } from "react";
const Index = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [propertyPurpose, setPropertyPurpose] = React.useState(null);
  const [sortBy, setSortBy] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");
  const [roomSize, setRoomSize] = React.useState("");
  const [maxValue, setMaxValue] = React.useState(1000000);
  const [minValue, setMinValue] = React.useState(0);

 

  return (
    <div className="bg-[#F3F3FA] my-10 ">
      <div className="filter__container max-w-5xl mx-auto p-5  py-10  ">
        <div className="filter__setting__text  ">
          <h2 className="filter__settings font-medium">Filter Settings</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 py-10    gap-5">
          <Select
            value={propertyPurpose}
            onChange={(option: null ) => setPropertyPurpose(option)}
            placeholder="Purpose"
            getOptionLabel ={(option: any) => (
              <div className="capitalize text-black truncate">
                {option.name}
              </div>
            )}
            getOptionValue={(option: any) => option.value}
            options={purposeOptions}
            className="border border-stone-900 rounded"
          />

          <Select
            value={sortBy}
            onChange={(option: any) => setSortBy(option)}
            placeholder={"Sort By"}
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
            getOptionValue={(option: any) => option.value}
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
            getOptionValue={(option: any) => option.value}
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
      </div>
    </div>
  );
};

export default Index;
