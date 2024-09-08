import React from 'react';
import NavBar from '../Components/NavBar';
import { useLoaderData, useParams } from 'react-router-dom';

const PropertyDetails = () => {
    const params = useParams()
    const properties = useLoaderData()
    const property = properties.find(property => property.id === params.id)

    return (
      <div>
        <NavBar></NavBar>
        <div className="container mx-auto flex flex-col justify-center items-center mt-10">
          <div>
            <img src={property.relevant_image} className="w-full h-48" alt="" />
          </div>
          <div className="grid grid-cols-4 mt-10">
            <div className="col-span-1 space-y-10 border-r-4 border-r-yellow-500 px-5">
              <h1 className="text-[#175151] text-xl font-bold">
                {property.segment_name}
              </h1>
              <p>Location: {property.location}</p>
              <p>Area: {property.area}</p>
              <div>
                <h1 className="font-bold">Facilities:</h1>
                {property.facilities.map((facility) => (
                  <li>{facility}</li>
                ))}
              </div>
              <p>Price: {property.price}</p>
            </div>
            <div className="col-span-3 p-3 text-justify">
              <p>{property.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PropertyDetails;