import React from "react";
import { Link } from "react-router-dom";

import EventCard from '../../elements/EventCard'
import events from '../../data/events.json'

const Event = () => {
  return (
    <>
      <section>
        <div className="w-100 pt-180 pb-110 black-layer opc45 position-relative">
          <div
            className="fixed-bg"
            style={{ backgroundImage: "url(assets/images/pg-tp-bg.jpg)" }}
          ></div>
          <div className="container">
            <div className="pg-tp-wrp text-center w-100">
              <h1 className="mb-0">City Night Life Directory</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" title="Home">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Listing Place</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pt-120 pb-140 gray-bg position-relative">
          <div className="container">
            <div className="listing-top-bar d-flex flex-wrap align-items-center justify-content-between w-100">
              <div className="listing-filter-inner d-inline-flex align-items-center">
                <a
                  className="rounded advanc-filter-btn"
                  href="/"
                  title=""
                >
                  <i className="fas fa-sliders-h"></i>Show Filter
                </a>
                <p className="mb-0">
                  20 Result Found in USA <strong>( Showing 1 - 20 )</strong>
                </p>
              </div>
              <div className="slc-wp">
                <select>
                  <option>Sort By</option>
                  <option>Date</option>
                  <option>Name</option>
                </select>
              </div>
            </div>
            <div className="listing-layout mt-70 w-100">
              <div className="row">
                {Object.keys(events).map((eventId) => <EventCard name={events[eventId].name} />)}
              </div>
            </div>
            <div className="view-all mt-30 text-center w-100">
              <a
                className="thm-btn brd-btn"
                href="listing-layout2.html"
                title=""
              >
                Load More
              </a>
            </div>
            <div className="listing-explore-info-wrap advance-filter-wrap">
              <span className="advanc-filter-close-btn">
                <i className="fas fa-times"></i>
              </span>
              <div className="mini-title w-100">
                <h4 className="mb-0">What are you looking for?</h4>
                <span className="d-block">Search or select categories</span>
              </div>
              <div className="listing-explore-form-wrap w-100">
                <form>
                  <div className="wdgt w-100">
                    <div className="field w-100">
                      <input
                        type="text"
                        placeholder="What are you looking for?"
                      />
                    </div>
                    <div className="field slc-wp w-100">
                      <select>
                        <option>All Categories</option>
                        <option>Restaurant</option>
                        <option>Fast Food</option>
                        <option>Drink</option>
                      </select>
                    </div>
                    <div className="field w-100">
                      <input type="text" placeholder="Where to Look?" />
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="wdgt advance-search w-100">
                    <h4>Advance Search</h4>
                    <div className="search-range">
                      <label>Price Range</label>
                      <ul className="search-price-opt">
                        <li>
                          <span>$$</span>
                        </li>
                        <li>
                          <span>$$$</span>
                        </li>
                        <li>
                          <span>$$$$</span>
                        </li>
                      </ul>
                      <div className="slc-wp">
                        <label>Sort by:</label>
                        <select>
                          <option>Name</option>
                          <option>Date</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="wdgt search-tags w-100">
                    <h4>Tags</h4>
                    <ul className="tags-list row mb-0 list-unstyled">
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-1" />
                          <label htmlFor="tag1-1">Reservations (04)</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-2" />
                          <label htmlFor="tag1-2">Outdoor Seating</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-3" />
                          <label htmlFor="tag1-3">Wheelchair Accesible</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-4" />
                          <label htmlFor="tag1-4">Smoking Allowed</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-5" />
                          <label htmlFor="tag1-5">Accepts Credit Cards</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-6" />
                          <label htmlFor="tag1-6">Parking street</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-7" />
                          <label htmlFor="tag1-7">Outdoor Seating</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-8" />
                          <label htmlFor="tag1-8">Accepts Credit Cards</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-9" />
                          <label htmlFor="tag1-9">Wireless Internet</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-10" />
                          <label htmlFor="tag1-10">Parking street</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-11" />
                          <label htmlFor="tag1-11">Wirless Internet</label>
                        </span>
                      </li>
                      <li className="col-md-6 col-sm-6 col-lg-6">
                        <span>
                          <input type="checkbox" id="tag1-12" />
                          <label htmlFor="tag1-12">Parking street</label>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="wdgt location-search w-100">
                    <div className="field slc-wp w-100">
                      <select>
                        <option>Location</option>
                        <option>Location 1</option>
                        <option>Location 2</option>
                      </select>
                    </div>
                  </div>
                  <button className="thm-btn" type="submit">
                    Search Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
