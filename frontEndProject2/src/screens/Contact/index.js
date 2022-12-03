import React from "react";

const Contact = () => {
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
              <h1 className="mb-0">Contact Us</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" title="Home">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">
                <a href="/contact" title="contact">
                    Contact
                </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-100 pb-100 gray-bg position-relative">
          <div className="container">
            <div className="get-touch-wrap2 w-100">
              <div className="get-touch-info-wrap res-row w-100">
                <div className="row mrg15">
                  <div className="col-md-6 col-sm-6 col-lg-4">
                    <div className="get-touch-info-box d-flex flex-wrap w-100">
                      <i className="fas fa-phone-alt thm-clr"></i>
                      <div className="get-touch-info-inner">
                        <h4 className="mb-0">Phone</h4>
                        <span className="d-block">+1 405 384 0188</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-4">
                    <div className="get-touch-info-box d-flex flex-wrap w-100">
                      <i className="fas fa-map-marker-alt thm-clr"></i>
                      <div className="get-touch-info-inner">
                        <h4 className="mb-0">Address</h4>
                        <span className="d-block">
                          2500 Asp Ave <br/>Bldg B 201<br/>Traditions Square East <br/>Norman, OK 73072
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-lg-4">
                    <div className="get-touch-info-box d-flex flex-wrap w-100">
                      <i className="far fa-envelope thm-clr"></i>
                      <div className="get-touch-info-inner">
                        <h4 className="mb-0">Email</h4>
                        <a href="mailto:ghulam.ali.doulat-1@ou.edu" title="">
                          ghulam.ali.doulat-1@ou.edu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-wrap v2 text-center w-100">
                <h2 className="mb-0">
                  Have A Question? <br /> Drop Us A Line! Name
                </h2>
                <form className="w-100" action="#" method="post" id="email-form">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <div className="form-group w-100">
                        <div className="response w-100"></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-4">
                      <input
                        className="w-100 brd-rd5 mt-25 fname"
                        type="text"
                        name="fname"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-4">
                      <input
                        className="w-100 brd-rd5 mt-25 email"
                        type="email"
                        name="email"
                        placeholder="Email *"
                      />
                    </div>
                    <div className="col-md-12 col-sm-6 col-lg-4">
                      <input
                        className="w-100 brd-rd5 mt-25 subject"
                        type="url"
                        name="subject"
                        placeholder="Website"
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <textarea
                        className="w-100 brd-rd5 mt-25 contact_message"
                        name="contact_message"
                        placeholder="Message"
                      ></textarea>
                      <button className="thm-btn mt-40" id="submit" type="submit">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
