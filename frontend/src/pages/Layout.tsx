import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

// layout page to ensure every page gets the nav bar at the top

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
