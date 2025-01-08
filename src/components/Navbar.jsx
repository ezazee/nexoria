"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname(); // Mengambil path saat ini

  return (
    <nav className="navbar navbar-expand-lg navbar-light tc-navbar-style4">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <img
            src="/assets/img/logo.png"
            alt="Nexoria Creative"
            width={190}
            className="logo lt_item"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/services/" ? "active" : ""
                }`}
                href="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/inner_pages/page_about_us" ? "active" : ""
                }`}
                href="/inner_pages/page_about_us"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/inner_pages/page_blog_details_overlay"
                    ? "active"
                    : ""
                }`}
                href="/inner_pages/page_blog_details_overlay"
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/inner_pages/page_contact" ? "active" : ""
                }`}
                href="/inner_pages/page_contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="button_su border-0">
            <span className="su_button_circle bg-primary desplode-circle"></span>
            <Link
              href="/inner_pages/page_contact"
              className="butn text-capitalize border-0 button_su_inner bg-000 py-3 px-5"
            >
              <span className="button_text_container fsz-14 text-white">
                {" "}
                Discuss With Us <i className="ti-arrow-top-right ms-1"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
