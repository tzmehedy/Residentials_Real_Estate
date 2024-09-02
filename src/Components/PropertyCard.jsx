import React from 'react';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";


const PropertyCard = ({property}) => {

    const {
      relevant_image,
      estate_title,
      location,
      price,
      area,
    } = property;
    return (
      <div>
        <div className="max-w-xs rounded-md hover:shadow-2xl shadow-xl dark:bg-gray-50 dark:text-gray-800 p-3 ">
          <img
            src={relevant_image}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 rounded-lg"
          />
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {estate_title}
              </h2>
              <p className="dark:text-gray-800">{location}</p>
              <p className="font-bold text-xl text-[#175151]">{price}</p>
              <p className="flex items-center gap-2 text-lg font-bold">
                <MdOutlineCheckBoxOutlineBlank></MdOutlineCheckBoxOutlineBlank>
                {area}
              </p>
            </div>
            <button className="btn bg-[#175151] text-white font-bold">View Property</button>
          </div>
        </div>
      </div>
    );
};

export default PropertyCard;