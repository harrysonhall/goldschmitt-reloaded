import React, { useState, useEffect } from 'react';

import timeguard from './timeguard.jpg'
import risk from './risk.webp'


const Solutions = () => {
  return (
    <div className='page' id='solutions'>
      <div className='hero'>
        <div className='hero-header1'>Our Solutions</div>
        <div className='text-21-400-resizable'>We provide a wide range of professional solutions to meet your complex needs.</div>
      </div>


      <SolutionsSection1 />

      <SolutionsSection2 />
      
    </div>
  );
};

export default Solutions;





const SolutionsSection1 = () => (
  <div className="section"> 
    <div className="subheader-13-600">SaaS</div>
    <div className="horizontal-line-1"></div>
    <div className="solutions-container">
      <div className="header-1" style={{ gridArea: 'header' }}>Timeguard Solutions™</div>
      <div className="text-1" style={{ gridArea: 'description' }}>Timeguard Solutions™ offers modern cloud-based Saas solutions for complex roster, scheduling, staff, and visitor management for federal agencies, state governments, and private sector companies</div>
      <div className="solutions-picture" style={{ gridArea: 'picture',   backgroundImage: `url(${timeguard})` }}></div>
      <button className="button-small-rounded-1" style={{ gridArea: 'button' }}>Learn More</button>
    </div>
   
  </div>
)


const SolutionsSection2 = () => (
  <div className="section"> 
    <div className="subheader-13-600">SAAT</div>
    <div className="horizontal-line-1"></div>

    <div className="solutions-container">
      <div className="header-1" style={{ gridArea: 'header' }}>Risk Management Strategic Automated Assessment Tool (SAAT)</div>
      <div className="text-1" style={{ gridArea: 'description' }}>Goldschmitt has partnered with Strategic eBusiness Solutions Inc. to provide our customers with a Best-in-Class solution. Our Strategic Automated Assessment Tool (SAAT) is designed to simplify Federal compliance.</div>
      <div className="solutions-picture" style={{ gridArea: 'picture', backgroundImage: `url(${risk})` }}></div>
      <button className="button-small-rounded-1" style={{ gridArea: 'button' }}>Learn More</button>
    </div>
   
  </div>
)