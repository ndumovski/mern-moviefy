//React default imports for Footer.js:

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="page-footer font-small unique-color-dark">
            <div className="footer-background-color">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-mr-left mb-4 mb-md-0">
                            <h6 className="mb-0 footer-color">Get connected with us on social networks!</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 social-icons text-center">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/">
                                <i className="fab fa-imdb"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="http://netflix.com/">
                                <i className="fa fa-tv"></i>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ndumovski/">
                                <i className="fab fa-github"></i>  
                            </a>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="font-weight-bold footer-color">Moviefy</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                        <p className="content-bg">Welcome to Moviefy, here you can find your favorite movie directors and their most rated movies.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="font-weight-bold footer-color">Coming soon</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                        <p className="coming-soon">
                            <Link to="soon!">Seriefy</Link>
                        </p>
                        <p className="coming-soon">
                            <Link to="soon!">Bookfy</Link>
                        </p>
                        <p className="coming-soon">
                            <Link to="soon!">Gamefy</Link>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="font-weight-bold footer-color">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
                       
                        <p className="quick-links">
                            <Link to="/movies">Movies</Link>
                        </p>
                        <p className="quick-links">
                            <Link to="/directors">Directors</Link>
                        </p>
                        <p className="quick-links">
                            <Link target="_blank" to="https://www.imdb.com/">IMBD</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3 footer-color">
                &copy; <span id="currentYear"></span> Moviefy | All rights reserved. 
            </div>
        </footer>
    );
}

export default Footer;