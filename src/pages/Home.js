import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.js';
import Home_Main from '../components/Home_Main.js';
import Home_Second from '../components/Home_Second.js';
import Home_Third from '../components/Home_Third.js';

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Home_Main />
      <Home_Second />
      <Home_Third />
    </div>
  );
}

export default Home;
