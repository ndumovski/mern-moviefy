import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/Home';
import Directors from './pages/Directors/Directors';
import AddDirector from './pages/AddDirector/AddDirector';
import Movies from './pages/Movies/Movies';
import AddMovie from './pages/AddMovie/AddMovie';

function App() {
  return (
    <Router>
      <div className="my-container">
        <NavBar />
        <div className="inside-container">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/directors" element={<Directors/>} />
            <Route exact path="/add-director" element={<AddDirector/>} />
            <Route exact path="/movies" element={<Movies/>} />
            <Route exact path="/add-movie" element={<AddMovie/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
