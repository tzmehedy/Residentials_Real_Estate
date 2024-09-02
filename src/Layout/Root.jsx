import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';

const Root = () => {
    return (
      <div>
        <div className="">
            <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Root;