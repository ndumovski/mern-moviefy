import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header>
      <nav className="header-nav">
        <Link id="redirect" className="header-title" to="/"> Moviefy</Link>
        <div className="topnav">
          <Link to="/add-movie">Add Movie</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/add-director">Add Director</Link>
          <Link to="/directors">Directors</Link>
        </div>
      </nav>
    </header>
    
  );
}

export default NavBar;
