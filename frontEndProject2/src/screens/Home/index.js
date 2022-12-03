import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <section>
      <div className="w-100 position-relative">
        <div className="feat-wrap pt-140 pb-140 dark-layer position-relative opc7 w-100">
          <div
            className="fixed-bg"
            style={{
              backgroundImage: "url(assets/images/resources/homePageBac.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="feat-inner pt-40 w-100">
              <h2 className="mb-0 text-center">
                Bookings | Explore on-going and <br /> Upcoming Events Around you...
              </h2>
              <form className="dir-form d-flex">
                <div className="field">
                  <label className="thm-clr">I'am looking for</label>
                  <input type="text" placeholder="Event name" />
                </div>
                <button className="thm-btn" type="submit">
                  <i className="fas fa-search"></i>DISCOVER NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="w-100 pt-80 pb-140 gray-layer opc55 position-relative">
        <div
          className="fixed-bg"
          style={{ backgroundImage: "url(assets/images/pattern-bg1.png)" }}
        ></div>
        <div className="container">
          <div className="sec-title text-center w-100">
            <h2 className="mb-0">Top Events</h2>
          </div>
          <div className="row">
            <div className="col-md-4 p-0">
              <div className="post-box-wrap">
                <div className="post-box brd-rd5 w-100 overflow-hidden">
                  <div className="post-img w-100">
                    <span className="rounded-pill bg-white position-absolute">
                      Free Signup
                    </span>
                    <Link to="/event-detail">
                      <img 
                        className="img-fluid w-100"
                        src="assets/images/resources/event1.png"
                        alt="Post Image 1"
                      />
                    </Link>
                  </div>
                  <div className="post-info w-100">
                    <h3 className="mb-0">
                      <Link to="/event-detail">Renaissance Ball</Link>
                    </h3>
                    <p className="mb-0">Celebrating the beauty and excellence <br/>of African womwn</p>
                    <ul className="post-meta mb-0 list-unstyled w-100">
                      <li>
                        <i className="fas fa-map-marker-alt rounded-circle"></i>
                        Jim Thorpe Multicultural Center
                      </li>
                      <li>
                        <i className="fas fa-calendar rounded-circle"></i>Date
                        November 19th, 2022
                      </li>
                    </ul>
                    <span className="evnt-loc d-block thm-bg">
                      <i className="fas fa-building rounded-circle"></i>
                      Events @OU
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="post-box-wrap">
                <div className="post-box brd-rd5 w-100 overflow-hidden">
                  <div className="post-img w-100">
                    <span className="rounded-pill bg-white position-absolute">
                      Free Signup
                    </span>
                    <Link to="/event-detail">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/resources/event2.jpg"
                        alt="Post Image 1"
                      />
                    </Link>
                  </div>
                  <div className="post-info w-100">
                    <h3 className="mb-0">
                      <Link to="/event-detail">Daughter of the Lake</Link>
                    </h3>
                    <p className="mb-0">Film Series</p>
                    <ul className="post-meta mb-0 list-unstyled w-100">
                      <li>
                        <i className="fas fa-map-marker-alt rounded-circle"></i>
                        Sam Noble Museum
                      </li>
                      <li>
                        <i className="fas fa-calendar rounded-circle"></i>Date
                        November 29th, 2022
                      </li>
                    </ul>
                    <span className="evnt-loc d-block thm-bg">
                      <i className="fas fa-building rounded-circle"></i>
                      Events @OU
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="post-box-wrap">
                <div className="post-box brd-rd5 w-100 overflow-hidden">
                  <div className="post-img w-100">
                    <span className="rounded-pill bg-white position-absolute">
                      Free Signup
                    </span>
                    <Link to="/event-detail">
                      <img 
                        className="img-fluid w-100"
                        src="assets/images/resources/event3.png"
                        alt="Post Image 1"
                      />
                    </Link>
                  </div>
                  <div className="post-info w-100">
                    <h3 className="mb-0">
                      <Link to="/event-detail">Omani National Day</Link>
                    </h3>
                    <p className="mb-0">Celebrating Omani National Day <br/> with Omani international students</p>
                    <ul className="post-meta mb-0 list-unstyled w-100">
                      <li>
                        <i className="fas fa-map-marker-alt rounded-circle"></i>
                        Thurman J. White Forum Building
                      </li>
                      <li>
                        <i className="fas fa-calendar rounded-circle"></i>Date
                        November 18th, 2022
                      </li>
                    </ul>
                    <span className="evnt-loc d-block thm-bg">
                      <i className="fas fa-building rounded-circle"></i>
                      Events @OU
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="w-100 pt-140 pb-140 position-relative">
        <div className="container">
          <div className="sec-title text-center w-100">
            <h2 className="mb-0">Top Listing Events</h2>
          </div>
          <div className="top-list-post-wrap position-relative w-100">
            <div className="top-list-img position-relative">
              <span className="rounded-pill position-absolute">Now Closed</span>
              <img 
                className="img-fluid rounded"
                src="assets/images/resources/event5.png"
                alt="Top List Image"
              />
            </div>
            <div className="top-list-info position-absolute rounded">
              
              <h3 className="mb-0">
                <a href="/" title="">
                  Explore on-going and Upcoming Events
                </a>
              </h3>
              
              <p className="mb-0">
               
              </p>
            
              <a className="thm-btn" href="/events" title="">
                Discover Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
