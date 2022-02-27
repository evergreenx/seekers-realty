import React from "react";
import Topbar from "../TopBar/Index";
import Hero from "./Hero";
import Footer from "../Footer/index";
const index = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-5">
        <Topbar />

        <Hero />
      </div>

      <Footer />
    </>
  );
};

export default index;
