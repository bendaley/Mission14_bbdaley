import React from 'react';
import TopBanner from '../Banner';
import Layout from './Layout';

// function to create the home page with a description of the website - also calls the layout function

function Home(props: any) {
  return (
    <>
      <div>
        <Layout />
        <TopBanner saying="Welcome! This Website will list out Joel's favorite movies" />
      </div>
    </>
  );
}

export default Home;
