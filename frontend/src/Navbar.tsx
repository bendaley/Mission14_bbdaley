import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// function to create the navigation bar displayed at the top of every page

function Navbar() {
  return (
    <div>
      <nav className="d-flex justify-content-end mr-3">
        <Link to="/" className="mx-3">
          Home
        </Link>
        <Link to="/Podcast" className="mx-3">
          Podcast
        </Link>
        <Link to="/MovieCollection" className="mx-3">
          Movie Collection
        </Link>
        <Link to="/Header" className="mx-3">
          Header
        </Link>
        <Link to="/FoodList" className="mx-3">
          FoodList
        </Link>
        <Link to="/Test" className="mx-3">
          Test
        </Link>
        <Link to="/MovieList" className="mx-3">
          MovieList
        </Link>
        <Link to="/MovieTest" className="mx-3">
          MovieTest
        </Link>
      </nav>
      <br></br>
    </div>
  );
}

export default Navbar;
