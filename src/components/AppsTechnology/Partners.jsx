import React from 'react';
//= Data
import data from '@/data/AppsTechnology/partners.json';

function Partners() {
  return (
    <section className="tc-partners-style3 mb-50">
      <div className="container-fluid">
        <div className="title mb-50">
          <h2 className="fsz-50 mb-0"> Our <span className="sub_font text-secondary">Clients </span> </h2>
        </div>
        <div className="logos">
          {data.map(item => (
            <div className="btn_wrapper d-inline-block" key={item.id}>
              <a href={item.link} rel="noopener noreferrer" className="logo btn-item">
                <img src={item.logo} alt={item.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners;
