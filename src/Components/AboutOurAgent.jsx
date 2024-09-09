import React from 'react';
import agentImg from '../assets/images/agent-image-1.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const AboutOurAgent = () => {
    return (
      <div className="flex flex-col justify-center items-center mt-20">
        <div>
          <h1 className="font-bold text-3xl">About Out Agent</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-10">
          <div className='w-1/2 flex justify-end'>
            <img className='' src={agentImg} alt="" />
          </div>
          <div className="bg-[#175151] flex justify-center items-center p-20 text-white">
            <div className='space-y-5'>
              <h1 className='text-2xl font-bold text-yellow-500'>Stevan Smith</h1>
              <span>Senior Agent of Tyche Properties</span>
              <p>
                Nam luctus justo ac leo feugiat, et pharetra ipsum pulvinar
                vestibulum congue, nulla nec suscipit ultricies, massa velit
                volutpat lacus non scelerisque libero seminest.
              </p>
              <div className='flex space-x-5'>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutOurAgent;