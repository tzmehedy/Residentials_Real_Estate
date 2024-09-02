import React from "react";

import bannerImg from '../assets/images/RealEstate_Residance04.png'

import "react-awesome-slider/dist/styles.css";

const Header = () => {
  return (
    <div className="pb-10">
      <div className="flex flex-col-reverse md:flex-row justify-between p-10 items-center">
        <div className="text-white md:w-1/2">
          <h1 className="text-5xl font-bold">
            YOUR <br /> TRUSTED <br />{" "}
            <span className="text-yellow-300">REAL ESTATE</span> <br /> PARTNER
          </h1>
          <p className="md: mt-2">
            At Estate Rise, we turn your homeownership dreams into reality.
            Explore our curated selection of homes and let us help you find the
            perfect place to call your own.
          </p>
          <button className="btn mt-2 bg-yellow-500 border-0 md:px-7 md:mt-5 md:py-3">Contact Us</button>
        </div>
        <div>
          <img className="w-full h-96" src={bannerImg} alt="" />
        </div>
      </div>

      <div className="bg-white rounded-lg flex flex-col md:flex-row justify-center items-center p-2 m-2 space-y-2 md:p-3 md:m-3 md:gap-8">
        <div>
          <h1 className="font-bold">Categories</h1>
          <input
            type="text"
            className="border border-gray-600 lg:px-2 lg:py-3"
          />
        </div>
        <div>
          <h1 className="font-bold">Location</h1>
          <input
            type="text"
            className="border border-gray-600 lg:px-2 lg:py-3"
          />
        </div>
        <div>
          <h1 className="font-bold">Budget</h1>
          <input
            type="text"
            className="border border-gray-600 lg:px-2 lg:py-3"
          />
        </div>
        <div>
          <button className="bg-yellow-400 px-2 py-3 rounded-lg mt-5">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
