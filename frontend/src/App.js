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
            <Route exact path="/" component={Home} />
            <Route exact path="/directors" component={Directors} />
            <Route exact path="/add-director" component={AddDirector} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/add-movie" component={AddMovie} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
