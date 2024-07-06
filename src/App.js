import React from 'react';
import {Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="/top-rated" element= {<TopRatedPage/>} />
          <Route path="/upcoming" element= {<UpcomingPage/>} />
          <Route path="/movie/:id" element= {<MovieDetailPage/>} />
          <Route path="/search/:query" element= {<SearchResultsPage/>} />
        </Routes>
      </div>
  );
}

export default App;
