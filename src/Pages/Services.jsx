import React from 'react';
import NavBar from '../Components/NavBar';
import bannarImg from "../assets/images/single-family-home.jpg";

import propertyTypes1 from "../assets/images/RealEstate_Residance05.png";
import propertyTypes2 from "../assets/images/RealEstate_Residance06.png";
import propertyTypes3 from "../assets/images/RealEstate_Residance07.png";

const Services = () => {
    return (
      <div>
        <NavBar></NavBar>

        <div className="">
          <img className="w-full max-h-96" src={bannarImg} alt="" />
        </div>

        <div className="mt-10 flex flex-col justify-center items-center">
          <div>
            <h1 className="font-bold text-2xl">Services</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center my-20 gap-10">
            <div className="max-w-xs p-6 rounded-md shadow-xl hover:shadow-2xl dark:bg-gray-50 dark:text-gray-900">
              <img
                src={propertyTypes1}
                alt=""
                className="rounded-md dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">
                  Offer Property
                </h2>
              </div>
              <p className="dark:text-gray-800 text-justify">
                Discover premium properties tailored to your lifestyle. Whether
                you're buying your first home, investing, or looking for your
                dream residence, our exclusive offers provide unparalleled value
                and opportunity. Explore today and secure your ideal property
                with [Your Company Name]
              </p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-xl hover:shadow-2xl dark:bg-gray-50 dark:text-gray-900">
              <img
                src={propertyTypes2}
                alt=""
                className="rounded-md dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">
                  Sale Property​
                </h2>
              </div>
              <p className="dark:text-gray-800">
                Explore a diverse range of homes designed to meet every need and
                budget. From cozy apartments to luxurious estates, our
                properties for sale offer exceptional quality and value. Find
                your perfect match with [Your Company Name] and make your next
                move today
              </p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-xl hover:shadow-2xl dark:bg-gray-50 dark:text-gray-900">
              <img
                src={propertyTypes3}
                alt=""
                className="rounded-md dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">
                  Rent Property​
                </h2>
              </div>
              <p className="dark:text-gray-800">
                Find the ideal rental that suits your lifestyle. From modern
                apartments to spacious family homes, our rental properties offer
                comfort, convenience, and flexibility. Let [Your Company Name]
                help you discover your next home today
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;