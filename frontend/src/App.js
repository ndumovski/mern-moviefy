import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/Home';
import Directors from './pages/Directors/Directors';
import AddDirector from './pages/Directors/Add/AddDirector';
import DirectorPage from './pages/Directors/Show/DirectorPage';
import EditDirector from './pages/Directors/Edit/EditDirector';
import Movies from './pages/Movies/Movies';
import AddMovie from './pages/Movies/Add/AddMovie';
import MoviePage from './pages/Movies/Show/MoviePage';
import EditMovie from './pages/Movies/Edit/EditMovie';


function App() {
  return (
    <Router>
      <div className="my-container">
        <NavBar />
        <div className="inside-container">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/directors" element={<Directors/>} />
            <Route exact path="/directors/add" element={<AddDirector/>} />
            <Route exact path="/directors/:slug" element={<DirectorPage/>} />
            <Route exact path="/directors/:slug/edit" element={<EditDirector/>} />
            <Route exact path="/movies" element={<Movies/>} />
            <Route exact path="/movies/add" element={<AddMovie/>} />
            <Route exact path="/movies/:slug" element={<MoviePage/>} />
            <Route exact path="/movies/:slug/edit" element={<EditMovie/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
