/* eslint-disable react/jsx-key */
import React from "react";
import TopBar from "../../components/TopBar/Index";
import Footer from "../../components/Footer";
import Filtercmp from "../../components/Filter/index";

const Filter = () => (
  <>
    <div className=" font-sans ">
      <div className="search__header bg-white text-center p-5">
        <h1 className="text-[#141B2D] font-bold text-5xl custom__heading">
          Search for an offer
        </h1>

        <p className="py-5 text-xl p-3">
          Choose from the most advantageous offers
        </p>
      </div>

      <Filtercmp />

      <div className="max-w-5xl mx-auto p-5"></div>
    </div>
  </>
);

export default Filter;
