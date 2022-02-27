/* eslint-disable react/jsx-key */
import React from "react";
import TopBar from "../components/TopBar/Index";
import Footer from "../components/Footer";

const Filter = () => (
  <>
    <div className="max-w-5xl mx-auto p-5 h-screen">
      <TopBar />

      <div className="search__header bg-white text-center">
        <h1 className="text-[#141B2D] font-bold text-5xl">
          Search for an offer
        </h1>

        <p className="py-5 text-xl">Choose from the most advantageous offers</p>
      </div>
    </div>

    <Footer />
  </>
);

export default Filter;
