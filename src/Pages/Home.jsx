import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';

const Home = () => {
    return (
      <div>
        <div className="bg-[#175151] bg-cover">
          <NavBar></NavBar>
          <Header></Header>
        </div>
      </div>
    );
};

export default Home;