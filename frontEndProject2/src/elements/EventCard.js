import React from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
    const {
        name
    } = props;
    return (
        <div className="col-md-6 col-sm-6 col-lg-4">
            <div className="list-post-box2 position-relative w-100">
                <div className="list-post-img2 overflow-hidden position-relative w-100">
                    <img 
                        className="img-fluid w-100"
                        src="assets/images/resources/list-post-img2-2.jpg"
                        alt="List Post Image 2"
                    />
                    <span className="list-post-stats rounded-pill position-absolute">
                    Now Closed
                    </span>
                    <div className="list-post-like-rate position-absolute d-flex flex-wrap align-items-center justify-content-between">
                        <a
                            className="list-post-like2"
                            href="/"
                            title=""
                        >
                            <i className="far fa-heart thm-clr"></i>Save
                        </a>
                        <span className="list-post-rate text-color2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>4.5</span>
                        </span>
                    </div>
                </div>
                <div className="list-post-info2 w-100">
                      <ul className="post-meta2 d-inline-flex mb-0 list-unstyled">
                        <li>
                          <i className="thm-clr far fa-clock"></i>May 28, 2018
                        </li>
                        <li>
                          <i className="thm-clr fas fa-users"></i>50
                        </li>
                      </ul>
                      <h3 className="mb-0">
                        <Link to="/event-detail" title="">
                          {name}
                        </Link >
                      </h3>
                      <p className="mb-0">
                        Italian traditional served pizzeria.
                      </p>
                      <ul className="post-meta mb-0 list-unstyled w-100">
                        <li>
                          <i className="fas fa-map-marker-alt rounded-circle"></i>
                          95 South Park Avenue
                        </li>
                        <li>
                          <i className="fas fa-phone rounded-circle"></i>+61 2
                          8236 9200
                        </li>
                      </ul>
                      <Link 
                        className="list-post-event-btn"
                        to="/event-detail"
                        title=""
                      >
                        Join Event<i className="fas fa-arrow-right"></i>
                      </Link >
                    </div>
            </div>
        </div>
    );
};

export default EventCard;