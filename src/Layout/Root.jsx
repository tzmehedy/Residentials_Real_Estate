import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Root = () => {
    return (
      <div>
        <Outlet></Outlet>
        <div className='mt-10'>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;