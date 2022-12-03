import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header className="stick stickyed style1 w-100 d-flex flex-wrap justify-content-between align-items-center">
        <div className="logo">
          <h1 className="mb-0">
            <Link to="/" title="Home">
              <img
                className="img-fluid"
                src="assets/images/logoFinal.png"
                alt="Logo"
                srcSet="assets/images/logoFinal.png"
              />
            </Link>
          </h1>
        </div>
        <div className="menu-wrap">
          <nav className="d-inline-flex align-items-center">
            <div>
              <ul className="mb-0 list-unstyled d-inline-flex">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            <Link to="/login" className="login-btn">
              <i className="thm-clr fas fa-user"></i>login or Register
            </Link>
          </nav>
        </div>
      </header>
      <div className="rspn-hdr">
        <div className="rspn-mdbr">
          <div className="rspn-scil">
            <a href="/" title="Facebook" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" title="Google Plus" target="_blank">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="/" title="Twitter" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" title="Linkedin" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <form className="rspn-srch">
            <input type="text" placeholder="Enter Your Keyword" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="lg-mn">
          <div className="logo">
            <Link to="/" title="Home">
              <img
                className="img-fluid"
                src="assets/images/logo.png"
                alt="Logo"
                srcSet="assets/images/retina-logo.png"
              />
            </Link>
          </div>
          <span className="rspn-mnu-btn">
            <i className="fa fa-list-ul"></i>
          </span>
        </div>
        <div className="rsnp-mnu">
          <span className="rspn-mnu-cls">
            <i className="fa fa-times"></i>
          </span>
          <ul className="mb-0 list-unstyled w-100">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
