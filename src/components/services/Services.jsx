"use client";
import React from "react";
//= Static Data
import data from "@/data/services/services.json";

function ServicesSection() {
  function showDetails(event) {
    const text = event.currentTarget.querySelector(".text");
    text.style.maxHeight = 70 + "px";
  }

  function hideDetails(event) {
    const text = event.currentTarget.querySelector(".text");
    text.style.maxHeight = 0 + "px";
  }

  return (
    <section className="tc-services-style6">
      <div className="container">
        <div className="section-head text-center mb-12">
          <h6 className="text-red-600 text-sm uppercase mb-6 font-bold">
            <span className="icon mr-2"> &gt; </span> services{" "}
            <span className="icon ml-2"> &lt; </span>
          </h6>
          <h2 className="text-4xl font-semibold mb-6">
            {" "}
            Our solution & services{" "}
          </h2>
        </div>

        <div className="row">
          {data.map((item) => (
            <div
              className="col-lg-4"
              key={item.id}
              onMouseMove={showDetails}
              onMouseLeave={hideDetails}
            >
              <a href="#" className="service-card wow fadeInUp slow">
                <span className="float-icon">
                  {" "}
                  <i className="ti-arrow-top-right"></i>{" "}
                </span>
                <div className="img">
                  <img src={item.icon} alt="" />
                </div>
                <div className="info">
                  <h5 className="fsz-24 fw-600"> {item.title} </h5>
                  <div className="text"> {item.details} </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
