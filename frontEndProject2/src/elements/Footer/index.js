import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-100 dark-bg2 position-relative">
          <div className="footer-cont-wrap w-100">
            <div className="container">
              <div className="footer-cont-inner d-flex flex-wrap align-items-center justify-content-between">
                <div className="footer-cont-info">
                  <ul className="mb-0 list-unstyled d-inline-flex">
                    <li>
                      <i className="rounded thm-bg fas fa-phone"></i>Free support:
                      +1-405-384-0188
                    </li>
                    <li>
                      <i className="rounded thm-bg fas fa-envelope"></i>Email:{" "}
                      <a href="mailto:ghulam.ali.doulat-1@ou.edu" title="">
                        ghulam.ali.doulat-1@ou.edu
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-cont-btn">
                  <a className="thm-btn rounded" href="about.html" title="">
                    YESSSS
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-data w-100">
            <div className="container res-row">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-3">
                  <div className="widget w-100">
                    <div className="logo">
                      <h1 className="mb-0">
                        <a href="index.html" title="Home">
                          <img alt="Logo"
                            className="img-fluid"
                            src="assets/images/logoFinal.png"
                            srcSet="assets/images/logoFinal.png"
                          />
                        </a>
                      </h1>
                    </div>
                    <p className="mb-0">
                    Scheduler is a Web-based service that provides the residents
                    of Traditions East and West with reserving their storm shelter
                    and its facilities. Unlike other services or products,
                    our Scheduler provides very user-friendly reservation
                    service for residential places at universities. 
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-5">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-6">
                      <div className="widget w-100">
                        <h3>Userful Links</h3>
                        <ul className="mb-0 list-unstyled w-100">
                          <li>
                            <a href="/about-us" title="">
                              About
                            </a>
                          </li>
                          <li>
                            <a href="/events" title="">
                              Events
                            </a>
                          </li>
                          <li>
                            <a href="/contact" title="">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                      <div className="widget w-100">
                        <h3>Userful Links</h3>
                        <ul className="mb-0 list-unstyled w-100">
                          <li>
                            <a href="/login" title="">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="/login" title="">
                              Register
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
