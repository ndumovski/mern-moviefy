import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/HomePage/Home';
import Directors from './pages/Directors/Directors';
import AddDirector from './pages/AddDirector/AddDirector';
import Movies from './pages/Movies/Movies';
import AddMovie from './pages/AddMovie/AddMovie';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/directors" component={Directors} />
            <Route exact path="/add-director" component={AddDirector} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/add-movie" component={AddMovie} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
