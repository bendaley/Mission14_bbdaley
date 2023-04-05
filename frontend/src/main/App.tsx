import React from 'react';
import './App.css';
import FullMovieList from '../pages/MovieCollection';
import Home from '../pages/Home';
import Bacon from '../pages/Podcasts';
import Layout from '../pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import FoodList from '../food/FoodList';
import Test from '../food/Test';
import MovieList from '../movies/MovieList';
import MovieTest from '../movies/MovieTest';

// App.tsx page that brings all the functions together and creates the paths for navigation

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Layout" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="MovieCollection" element={<FullMovieList />} />
          <Route path="Podcast" element={<Bacon />} />
          <Route path="Header" element={<Header />} />
          <Route path="FoodList" element={<FoodList />} />
          <Route path="Test" element={<Test />} />
          <Route path="MovieList" element={<MovieList />} />
          <Route path="MovieTest" element={<MovieTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
