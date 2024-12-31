import React from "react";
//= Components
import Navbar from "./Navbar";
import Link from "next/link";

function Header() {
  return (
    <header className="tc-header-style4">
      <Navbar />
      <div className="container">
        <div className="info wow fadeInUp slow">
          <h1 className="text-gradient">
            {" "}
            Build Your Own <span> Digital Product. </span>{" "}
          </h1>
          <div className="btns">
            <a href="#"> <img width={200} src="/home_4/assets/img/header/play.png" alt="" /> </a>
          </div>
        </div>
      </div>
      <div className="shaps">
        <img
          src="/home_4/assets/img/header/shap1.png"
          alt=""
          className="shap-1"
        />
        <span className="shap-2 parallaxed"></span>
        <img
          src="/home_4/assets/img/header/3ds.png"
          alt=""
          className="img"
          data-speed="1"
          data-lag="0.7"
        />
      </div>
      
    </header>
  );
}

export default Header;
