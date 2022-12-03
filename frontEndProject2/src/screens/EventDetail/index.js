import React from "react";

const EventDetail = () => {
  return (
    <>
      <section>
        <div className="w-100 position-relative">
          <div className="feat-wrap2 w-100 position-relative">
            <div className="feat-caro2">
              <div className="feat-item">
                <div
                  className="feat-img"
                  style={{
                    backgroundImage:
                      "url(assets/images/resources/feat-img1.jpg)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pb-120 gray-bg position-relative">
          <div className="container">
            <div className="event-detail-wrap2 w-100">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-8">
                  <div className="event-detail-inner2 bg-white w-100 overlap205">
                    <div className="event-detail-info2 w-100">
                      <h2 className="mb-0">The Paradise Beach Hotel</h2>
                      <span className="d-inline-block thm-clr">
                        02-05 July 2020
                      </span>
                      <i className="d-inline-block">California</i>
                      <ul className="event-detail-list mb-0 list-unstyled w-100">
                        <li>
                          Location:<span>2495 Tident St, NY</span>
                        </li>
                        <li>
                          Review:
                          <span>
                            <span className="rate text-color2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </span>
                            563 reviews
                          </span>
                        </li>
                        <li>
                          Phone:<span>(+0064) 725 4143 68</span>
                        </li>
                        <li>
                          Website:<span>www.jthemes.com</span>
                        </li>
                      </ul>
                      <div className="reviewer-review-btns d-inline-flex align-items-center w-100">
                        <a className="share-btn" href="/" title="">
                          Share
                        </a>
                        <a className="thm-btn" href="/" title="">
                          Join Event
                        </a>
                      </div>
                    </div>
                    <div className="event-detail-content-inner w-100">
                      <h3>About Event</h3>
                      <p className="mb-0">
                        <span>
                          Quisque non dictum eros, Praesent porta vehicula arcu
                          eu ornare.
                        </span>{" "}
                        Donec id egestas arcu. Suspendisse auctor ali
                        condimentum ligula ultricies cursus. Vestibulum vel orci
                        vel lacus rhoncus sagittis sed vitae mi. Pellentesque
                        suil molestie elit bibendum tincidunt semper. Aliquam ac
                        volutpat risus. In felis felis, posuere commodo aliquet
                        amit eget, sagittis sed turpis. Phasellus commodo turpis
                        non nunc egestas, et egestas felis pretium. Pellentesque
                        suli dignissim libero vitae tincidunt semper. Nam id
                        ante nisi. Nam sollicitudin, dolor non suscipit feugiat,
                        nibh lacus commodo metus, nec tempus dui velit sagittis
                        velit. Pellentesque elementum risus rhoncus justo porta,
                        at varius odio consequat. Duis non augue adipiscing,
                        posuere quam non, tempus urna.
                      </p>
                      <p className="mb-0">
                        <span>
                          Duis autem vel eum iriure dolor in hendrerit
                        </span>{" "}
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Nam liber tempor cum soluta nobis
                        eleifend option congue nihil imperdiet doming id quod
                        mazim placerat facer possim assum. Typi non habent. Duis{" "}
                      </p>
                    </div>
                    <div className="event-detail-content-inner w-100">
                      <h3>Who Speaking?</h3>
                      <div className="speaker-wrap w-100">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="speaker-box text-center w-100">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/images/resources/speaker-img1.jpg"
                                alt="Speaker Image 1"
                              />
                              <h4 className="mb-0">David Miller</h4>
                              <span className="d-block">
                                Marketing Envato Pty Ltd.
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="speaker-box text-center w-100">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/images/resources/speaker-img2.jpg"
                                alt="Speaker Image 2"
                              />
                              <h4 className="mb-0">David Miller</h4>
                              <span className="d-block">
                                Marketing Envato Pty Ltd.
                              </span>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="speaker-box text-center w-100">
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/images/resources/speaker-img3.jpg"
                                alt="Speaker Image 3"
                              />
                              <h4 className="mb-0">David Miller</h4>
                              <span className="d-block">
                                Marketing Envato Pty Ltd.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="event-detail-content-inner w-100">
                      <h3>Location</h3>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281080182!2d-0.2416802925144136!3d51.5287718404898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1670026313905!5m2!1sen!2s"
                        width="600"
                        height="450"
                        style={{border:0}}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="listing-loc-map place-map"
                      ></iframe>
                      <ul className="location-add-list mb-0 list-unstyled d-flex flex-wrap">
                        <li>
                          <span>
                            <i className="rounded-circle fas fa-map-marker-alt"></i>
                            484 Ellis St, San Francisco, CA 94102, United States
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="rounded-circle fas fa-phone-alt"></i>
                            +61 2 8236 9200
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="rounded-circle far fa-envelope"></i>
                            youremail@mail.com
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="rounded-circle fas fa-globe"></i>
                            www.website.com
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="event-detail-content-inner w-100">
                      <h3>Our Sponsors</h3>
                      <div className="sponsors-wrap w-100">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="spr-box w-100">
                              <a href="/" title="">
                                <img
                                  className="img-fluid"
                                  src="assets/images/resources/sp-img1.png"
                                  alt="Sponsor Image 1"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="spr-box w-100">
                              <a href="/" title="">
                                <img
                                  className="img-fluid"
                                  src="assets/images/resources/sp-img2.png"
                                  alt="Sponsor Image 2"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="spr-box w-100">
                              <a href="/" title="">
                                <img
                                  className="img-fluid"
                                  src="assets/images/resources/sp-img3.png"
                                  alt="Sponsor Image 3"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="spr-box w-100">
                              <a href="/" title="">
                                <img
                                  className="img-fluid"
                                  src="assets/images/resources/sp-img4.png"
                                  alt="Sponsor Image 4"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="spr-box w-100">
                              <a href="/" title="">
                                <img
                                  className="img-fluid"
                                  src="assets/images/resources/sp-img5.png"
                                  alt="Sponsor Image 5"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="spr-box w-100">
                              <a href="/" title="">
                                <img
                                  className="img-fluid"
                                  src="assets/images/resources/sp-img6.png"
                                  alt="Sponsor Image 6"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="event-detail-content-inner w-100">
                      <h3>Faq's</h3>
                      <div className="toggle w-100" id="toggle">
                        <div className="toggle-item w-100">
                          <h4 className="mb-0">
                            Royal Park of America Produces<i className=""></i>
                          </h4>
                          <div className="toggle-content w-100">
                            <p className="mb-0">
                              Royal Park of America produces premium branded and
                              private label lubricants for agriculture.
                            </p>
                          </div>
                        </div>
                        <div className="toggle-item w-100">
                          <h4 className="mb-0">
                            Private label Lubricants<i className=""></i>
                          </h4>
                          <div className="toggle-content w-100">
                            <p className="mb-0">
                              Royal Park of America produces premium branded and
                              private label lubricants for agriculture.
                            </p>
                          </div>
                        </div>
                        <div className="toggle-item w-100">
                          <h4 className="mb-0">
                            Automotive, Fleet<i className=""></i>
                          </h4>
                          <div className="toggle-content w-100">
                            <p className="mb-0">
                              Royal Park of America produces premium branded and
                              private label lubricants for agriculture.
                            </p>
                          </div>
                        </div>
                        <div className="toggle-item w-100">
                          <h4 className="mb-0">
                            industrial Applications.<i className=""></i>
                          </h4>
                          <div className="toggle-content w-100">
                            <p className="mb-0">
                              Royal Park of America produces premium branded and
                              private label lubricants for agriculture.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                  <div className="sidebar-wrap2 pt-140 w-100">
                    <div className="widget-box w-100">
                      <h3 className="thm-bg">Who Host this Event</h3>
                      <div className="event-organizer w-100">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="event-organizer1"
                          >
                            <div className="event-organizer-box w-100">
                              <div className="event-organizer-info d-flex flex-wrap align-items-center w-100">
                                <img
                                  className="img-fluid rounded-circle"
                                  src="assets/images/resources/event-organizer-img1.jpg"
                                  alt="Event Organizer Image 1"
                                />
                                <div className="event-organizer-info-inner">
                                  <h4 className="mb-0">Mark Willma</h4>
                                  <span className="thm-clr">
                                    Posted 3 days ago
                                  </span>
                                </div>
                              </div>
                              <ul className="post-meta event-organizer-meta mb-0 list-unstyled w-100">
                                <li>
                                  <i className="fas fa-map-marker-alt rounded-circle"></i>
                                  484 Ellis St, Francisco, CA 94102.
                                </li>
                                <li>
                                  <i className="far fa-envelope rounded-circle"></i>
                                  example@gmail.com
                                </li>
                                <li>
                                  <i className="fas fa-phone rounded-circle"></i>
                                  89+97872978129
                                </li>
                                <li>
                                  <i className="fas fa-globe rounded-circle"></i>
                                  www.yourwebsite.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="event-organizer2">
                            <div className="event-organizer-box w-100">
                              <div className="event-organizer-info d-flex flex-wrap align-items-center w-100">
                                <img
                                  className="img-fluid rounded-circle"
                                  src="assets/images/resources/event-organizer-img2.jpg"
                                  alt="Event Organizer Image 2"
                                />
                                <div className="event-organizer-info-inner">
                                  <h4 className="mb-0">Mark Joe</h4>
                                  <span className="thm-clr">
                                    Posted 8 days ago
                                  </span>
                                </div>
                              </div>
                              <ul className="post-meta event-organizer-meta mb-0 list-unstyled w-100">
                                <li>
                                  <i className="fas fa-map-marker-alt rounded-circle"></i>
                                  484 Ellis St, Francisco, CA 94102.
                                </li>
                                <li>
                                  <i className="far fa-envelope rounded-circle"></i>
                                  example@gmail.com
                                </li>
                                <li>
                                  <i className="fas fa-phone rounded-circle"></i>
                                  89+97872978129
                                </li>
                                <li>
                                  <i className="fas fa-globe rounded-circle"></i>
                                  www.yourwebsite.com
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="event-organizer3">
                            <div className="event-organizer-box w-100">
                              <div className="event-organizer-info d-flex flex-wrap align-items-center w-100">
                                <img
                                  className="img-fluid rounded-circle"
                                  src="assets/images/resources/event-organizer-img3.jpg"
                                  alt="Event Organizer Image 3"
                                />
                                <div className="event-organizer-info-inner">
                                  <h4 className="mb-0">Willma Mark</h4>
                                  <span className="thm-clr">
                                    Posted 5 days ago
                                  </span>
                                </div>
                              </div>
                              <ul className="post-meta event-organizer-meta mb-0 list-unstyled w-100">
                                <li>
                                  <i className="fas fa-map-marker-alt rounded-circle"></i>
                                  484 Ellis St, Francisco, CA 94102.
                                </li>
                                <li>
                                  <i className="far fa-envelope rounded-circle"></i>
                                  example@gmail.com
                                </li>
                                <li>
                                  <i className="fas fa-phone rounded-circle"></i>
                                  89+97872978129
                                </li>
                                <li>
                                  <i className="fas fa-globe rounded-circle"></i>
                                  www.yourwebsite.com
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-toggle="tab"
                              href="#event-organizer1"
                            >
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/images/resources/event-organizer-nav-img1.jpg"
                                alt="Event Organizer Nav Image 1"
                              />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#event-organizer2"
                            >
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/images/resources/event-organizer-nav-img2.jpg"
                                alt="Event Organizer Nav Image 2"
                              />
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#event-organizer3"
                            >
                              <img
                                className="img-fluid rounded-circle"
                                src="assets/images/resources/event-organizer-nav-img3.jpg"
                                alt="Event Organizer Nav Image 3"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget-box w-100">
                      <h3 className="thm-bg">Event Schedule</h3>
                      <div className="event-schedule-wrap text-center w-100">
                        <div className="event-schedule-box w-100">
                          <img
                            className="img-fluid rounded-circle"
                            src="assets/images/resources/event-schedule-img1.jpg"
                            alt="Event Schedule Image 1"
                          />
                          <h4 className="mb-0">
                            <a href="/" title="">
                              Auditorium A
                            </a>
                          </h4>
                          <i className="d-block">Introduction to WP</i>
                          <span>Day 1 - 20 Nov 2020</span>
                        </div>
                        <div className="event-schedule-box w-100">
                          <img
                            className="img-fluid rounded-circle"
                            src="assets/images/resources/event-schedule-img2.jpg"
                            alt="Event Schedule Image 2"
                          />
                          <h4 className="mb-0">
                            <a href="/" title="">
                              Auditorium A
                            </a>
                          </h4>
                          <i className="d-block">Introduction to WP</i>
                          <span>Day 2 - 21 Nov 2020</span>
                        </div>
                      </div>
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

export default EventDetail;
