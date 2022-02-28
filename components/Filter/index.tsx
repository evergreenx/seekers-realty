/* eslint-disable react/jsx-key */
import React from "react";
import Select from "react-select";
import Range from "../Filter/Range/index";

const Index = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [purposeValue , setPurposeValue] = React.useState("");
 const [sortValue , setSortValue] = React.useState("");



  const purposeOptions = [
    { value: "buy", label: "buy" },
    { value: "rent", label: "rent" },
    
  ];


  // const sortOptions = [
  //   { value: "buy", label: "buy" },
  //   { value: "rent", label: "rent" },
    
  // ];
  return (
    <div className="bg-[#F3F3FA] my-10 ">
      <div className="filter__container max-w-5xl mx-auto p-5  py-10  ">
        <div className="filter__setting__text  ">
          <h2 className="filter__settings font-medium">Filter Settings</h2>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-4 px-10 py-10    gap-5">
        <Select
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
        
          
          placeholder="Purpose"
          options={purposeOptions}
          className="border border-stone-900 rounded"

        />

<Select
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}

          placeholder={"Sort By"}

          options={purposeOptions}
          className="border border-stone-900 rounded"
        />


<Select
          value={selectedOption}
          onChange={(option) => setSelectedOption(option)}
         
          options={purposeOptions}

          className="border border-stone-900 rounded"
          
        /> <Select
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
       
        className="border border-stone-900 rounded"

        options={purposeOptions}
      />
      </div>


<div className="justify-center w-3/4  mx-auto items-center flex-col">

  <div className="">

<Range />

  </div>

</div>
      </div>
    </div>
  );
};

export default Index;
