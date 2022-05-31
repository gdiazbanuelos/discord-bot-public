import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.js';


function Home() {
  return (
    <div className="">
      <NavBar />
      <Link to={'/docs'}>
        <button>Docs</button>
      </Link>
    </div>
  );
}

export default Home;
