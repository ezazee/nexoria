"use client";
import React, { useEffect } from 'react';

function WhatsAppPopup() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    let toTop = document.querySelector(".whatsapp")
    if (window.scrollY > 400) toTop.classList.add("show");
    else toTop.classList.remove("show");
  }

  return (
    <a href="#" className="whatsapp">
      <i className="lab la-whatsapp"></i>
    </a>
  )
}

export default WhatsAppPopup