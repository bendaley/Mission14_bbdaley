import React from 'react';
import Layout from './Layout';

// function to create the button that links to the baconsale website. The page also includes a header

function Bacon(props: any) {
  return (
    <>
      <div className="text-center">
        <Layout />
        <h1>My Podcasts</h1>
        <br></br>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <a
              href="https://baconsale.com"
              className="btn btn-outline-danger btn-lg btn-block"
            >
              Visit Bacon Sale Podcast
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bacon;
