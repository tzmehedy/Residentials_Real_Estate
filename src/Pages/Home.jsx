import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';

import propertyTypes1 from '../assets/images/RealEstate_Residance05.png'
import propertyTypes2 from '../assets/images/RealEstate_Residance06.png'
import propertyTypes3 from '../assets/images/RealEstate_Residance07.png'
import { useLoaderData } from 'react-router-dom';
import PropertyCard from '../Components/PropertyCard';

const Home = () => {
    const properties = useLoaderData()
    return (
      <div className=''>
        <div className="bg-[#175151] bg-cover">
          <NavBar></NavBar>
          <Header></Header>
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
              and opportunity. Explore today and secure your ideal property with
              [Your Company Name]
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
              budget. From cozy apartments to luxurious estates, our properties
              for sale offer exceptional quality and value. Find your perfect
              match with [Your Company Name] and make your next move today
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

        <div>
            <h1 className='text-center font-bold text-xl'>All Properties</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-10 mt-10">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property}></PropertyCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Home;