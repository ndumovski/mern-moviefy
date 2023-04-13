import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Moviefy
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/directors">
              Directors
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-director">
              Add Director
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-movie">
              Add Movie
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
