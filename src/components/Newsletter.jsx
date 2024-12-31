import React from "react";

function Newsletter() {
  return (
    <section className="tc-newsletter-style4">
      <div className="container">
        <div className="newsletter-content wow fadeInUp slow text-center">
          <div className="info mb-4">
            <p className="fsz-16 sub_font text-uppercase text-decoration-underline mb-20">
              Interested?
            </p>
            <h2 className="fsz-60">
              Stay connected with us for a FREE consultation.
            </h2>
          </div>
          <div className="button_su mt-4">
            <a href="#" className="butn button_su_inner bg-primary text-white">
              <span className="button_text_container fsz-15 text-uppercase">
                contact us
              </span>
            </a>
          </div>
          <div className="social-links mt-4 d-flex justify-content-center align-items-center">
            <h6 className="mb-0 me-3 text-uppercase">follow us:</h6>
            <div className="links">
              <a href="#" className="me-3">
                <i className="fab fsz-30 fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="numbers pt-100 pb-100 wow fadeInUp slow">
          <div className="row">
            <div className="col-lg-4">
              <div className="number-card d-flex align-items-center mt-20 mb-20">
                <h2 className="num fsz-60 me-30"> 85% </h2>
                <p className="fsz-18 color-999">
                  {" "}
                  Happy customers <br /> & repeating{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card d-flex align-items-center mt-20 mb-20">
                <h2 className="num fsz-60 me-30"> 150+ </h2>
                <p className="fsz-18 color-999">
                  {" "}
                  Brands trusted <br /> & companion{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="number-card d-flex align-items-center mt-20 mb-20">
                <h2 className="num fsz-60 me-30"> 265+ </h2>
                <p className="fsz-18 color-999">
                  {" "}
                  Projects completed <br /> in 25 years{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
