import React from 'react'

function Header() {
  return (
    <header className="tc-header-style1 pb-70">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-10">
            <h1 className=""> Design. Development. <span className="fst-italic color-999 fw-500 fm-playfair"> Mastership </span> </h1>
            <p className="fsz-22 mt-60"> We design and develop exceptional digital products and services, <br /> eCommerce, and brand communication solutions. </p>
          </div>
          <div className="col-lg-2">
            <img  src="/assets/img/header/services.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header