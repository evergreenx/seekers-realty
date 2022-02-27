/* eslint-disable react/jsx-key */
import React from "react";
import Select from "react-select";

const Index = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="bg-[#F3F3FA] my-10 ">
      <div className="filter__container max-w-5xl mx-auto p-5  py-10  ">
        <div className="filter__setting__text  ">
          <h2 className="filter__settings font-medium">Filter Settings</h2>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 py-10    gap-5">
        <Select
          value={selectedOption}
          onChange={() => {
            setSelectedOption(selectedOption);
          }}
          options={options}
          className="border border-stone-900 rounded"

        />

<Select
          value={selectedOption}
          onChange={() => {
            setSelectedOption(selectedOption);
          }}
          options={options}
          className="border border-stone-900 rounded"
        />


<Select
          value={selectedOption}
          onChange={() => {
            setSelectedOption(selectedOption);
          }}
          options={options}

          className="border border-stone-900 rounded"
          
        /> <Select
        value={selectedOption}
        onChange={() => {
          setSelectedOption(selectedOption);
        }}
        className="border border-stone-900 rounded"

        options={options}
      />
      </div>
      </div>
    </div>
  );
};

export default Index;
