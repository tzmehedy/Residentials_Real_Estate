import React from "react";

import slider1 from '../assets/images/RealEstate_Residance27.png'
import slider2 from '../assets/images/RealEstate_Residance28.png'
import slider3 from '../assets/images/RealEstate_Residance29.png'

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
          <button className="btn mt-2 bg-yellow-500 border-0 md:px-7 md:mt-5 md:py-3">
            Contact Us
          </button>
        </div>
        <div className="w-1/2">
          {/* Slider start */}
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={slider1}
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={slider2}
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={slider3}
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          {/* Slider end */}
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
