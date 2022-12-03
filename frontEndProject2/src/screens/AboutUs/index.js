import React from "react";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="w-100 pt-180 pb-110 black-layer opc45 position-relative">
          <div
            className="fixed-bg"
            style={{backgroundImage: "url(assets/images/pg-tp-bg.jpg)"}}
          ></div>
          <div className="container">
            <div className="pg-tp-wrp text-center w-100">
              <h1 className="mb-0">About us</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" title="Home">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">About us</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-140 pb-140 gray-bg position-relative">
          <div className="container">
            <div className="about-wrap w-100">
              <div className="row align-items-center">
                <div className="col-md-12 col-sm-12 col-lg-6">
                  <img
                    className="img-fluid w-100"
                    src="assets/images/resources/about-img1.jpg"
                    alt="About Image 1"
                  />
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                  <div className="about-desc w-100">
                    <h2 className="mb-0">Scheduler</h2>
                    <p className="mb-0">
                    </p>
                    <p className="mb-0">
                    The Scheduler is a Web-based service that provides the students
                    of the University of Oklahoma and residents of Traditions East
                    and West with reserving  universities’ storm shelters and its
                    facilities. Unlike other services or products, our Scheduler
                    provides very user-friendly reservation service for residential
                    and gathering places at the University of Oklahoma. 
                    </p>
                    <a className="thm-btn" href="mailto:ghulam.ali.doulat-1@ou.edu" title="">
                      Message Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section>
        <div className="w-100 pt-140 pb-90 gray-bg position-relative">
          <div className="container">
            <div className="sec-title text-center w-100">
              <span className="d-block thm-clr">
                Discover & connect with great our developers
              </span>
              <h2 className="mb-0">Our Technical Experts</h2>
            </div>
            <div className="team-wrap res-row w-100">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-4">
                  <div className="team-box w-100 overflow-hidden position-relative">
                    <img
                      className="img-fluid w-100"
                      src="assets/images/resources/team-img1-1.jpg"
                      alt="Team Image 1"
                    />
                    <div className="team-info w-100 position-absolute">
                      <h3 className="mb-0">
                        <a href="/" title="">
                          Lkhanaajav Mijiddorj
                        </a>
                      </h3>
                      <span className="d-block">Back-end Developer</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-4">
                  <div className="team-box w-100 overflow-hidden position-relative">
                    <img
                      className="img-fluid w-100"
                      src="assets/images/resources/team-img1-2.jpg"
                      alt="Team Image 2"
                    />
                    <div className="team-info w-100 position-absolute">
                      <h3 className="mb-0">
                        <a href="/" title="">
                          Ali Barazi
                        </a>
                      </h3>
                      <span className="d-block">Front-end Developer</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-4">
                  <div className="team-box w-100 overflow-hidden position-relative">
                    <img
                      className="img-fluid w-100"
                      src="assets/images/resources/team-img1-3.jpg"
                      alt="Team Image 3"
                    />
                    <div className="team-info w-100 position-absolute">
                      <h3 className="mb-0">
                        <a href="/" title="">
                          Ghulam Ali Doulat
                        </a>
                      </h3>
                      <span className="d-block">Project Manager & Front-end Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
