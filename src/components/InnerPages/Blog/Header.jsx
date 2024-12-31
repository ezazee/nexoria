import React from 'react';
//= Components
import Navbar from '../Common/Navbar';
import StatementSplitter from '@/components/Common/StatementSplitter';

function Header({ title }) {
  return (
    <header className="tc-inner-header-style1">
      <Navbar darkLogo />
      <div className="header-content text-center">
        <div className="container">
          <p className="fsz-14 text-uppercase color-blue1 mb-10"> Welcome to our agency </p>
          <h2 className="fsz-80 text-capitalize"> <StatementSplitter statement={title} /> </h2>
        </div>
      </div>
      <img src="/inner_pages/assets/img/symbol_wh.png" alt="" className="symbol1" />
      <img src="/inner_pages/assets/img/symbol_wh.png" alt="" className="symbol2" />
    </header>
  )
}

export default Header