import React, { useState, useEffect } from 'react';

import vaLogo from './VA-logo.webp'
import starsLogo from './stars-logo.webp'
import GSALogo from './GSA-logo.webp'

const Contracts = () => {
  return (
    <div className='page' id='contracts'>
      <div className='hero'>
        <div className='hero-header1'>Our Contracts</div>
        <div className='text-21-400-resizable'>G&A offers several convenient ways to purchase our support services. Should the dollar amount for the contract be under $4.5 Million, as an 8(a) vendor, G&A is prepared to support in the execution of your end of year contracting goals.</div>

         <div id="contracts-ids-container">
          <div className="horizontal-line-1"></div>
           
          <div className="contract-card-1">
            <div className="subheader-17-700">DUNS</div>
            <div className="text-14-400">014735067</div>
          </div>
    
          <div className="vertical-line-1"></div>
          <div className="horizontal-line-1"></div>
          
          <div className="contract-card-1">
            <div className="subheader-17-700">UEI</div>
            <div className="text-14-400">UA16ZXLPQWY6</div>
          </div>
    
          <div className="vertical-line-1"></div>
          <div className="horizontal-line-1"></div>
    
          <div className="contract-card-1">
            <div className="subheader-17-700">Cage Code</div>
            <div className="text-14-400">5SLG2</div>
          </div>

          <div className="horizontal-line-1"></div>
        </div>
      </div>
      

      <ContractsSection1 />

      <ContractsSection2 />

      <ContractsSection3 />
      
    </div>
  );
};

export default Contracts;







const ContractsSection1 = () => (
  <div className="section">
    <div style={{ gridArea: 'information' }}>
      <div className="header-40-700-resize">8(A) STARS III: 47QTCB22D0029</div>
      <div className="subheader-21-600">Sub Area: Emerging Technologies</div>
      <div className="text-16-400" style={{ marginTop: '20px' }}>The Best-in-Class 8(a) STARS III GWAC is a small business set-aside contract that provides flexible access to customized IT solutions from a large, diverse pool of 8(a) industry partners. The 8(a) STARS III GWAC:</div>
      <ul>
        <li>Expands capabilities for emerging technologies</li>
        <li>Supports CONUS requirements</li>
        <li>Features limited protestability up to $10M</li>
        <li>Offers expert guidance from the GSA team, including free scope review services and market research</li>
      </ul>
      <div className="text-16-400">Program Manager for 8(a) STARS III: <br />Laura Kelmelis, info@goldschmitt.com</div>
    </div>
    <div className="picture-container" style={{ gridArea: 'picture' }}>
       <div>
          <img src={starsLogo} />
         <Grid />
      </div>
      <button className="button-medium-rounded-1" onClick={() => window.open('https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/governmentwide-acquisition-contracts/8a-stars-iii')}>Contract Information</button>
    </div>

     <button className="button-medium-rounded-1" onClick={() => window.open('https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/governmentwide-acquisition-contracts/8a-stars-iii')}>Contract Information</button>
  </div>
)


const ContractsSection2 = () => (
  <div className="section">
    <div style={{ gridArea: 'information' }}>
      <div className="header-40-700-resize">VA VECTOR SG2, SG3: VA119A-17-D099</div>
      {/* <div className="subheader-21-600">Sub Area: Service Groups</div> */}
      <div className="text-16-400" style={{ marginTop: '20px' }} >VECTOR is a multiple-award, indefinite-delivery/indefinite-quantity (IDIQ) contract that has a five-year base period and five option years and is a set-aside program for service-disabled, veteran-owned small businesses that covers general management and business support services to VA. Goldschmitt will provide support in the following service areas:</div>
      <ul>
        <li className="text-16-400">Service Group 2 – Studies and Analysis</li>
        <li className="text-16-400">Service Group 3 – Training</li>
      </ul>
      <div className="text-16-400">Program Manager for VA VECTOR: <br />Rachael Sutler, PMP, ITIL v3, info@goldschmitt.com</div>
    </div>
    <div className="picture-container" style={{ gridArea: 'picture' }}>
      <div>
         <img src={vaLogo} />
         <Grid />
      </div>
      <button className="button-medium-rounded-1" onClick={() => window.open('https://www.va.gov/OSDBU/acquisition/vector-town-hall.asp')}>Contract Information</button>
    </div>

    <button className="button-medium-rounded-1" onClick={() => window.open('https://www.va.gov/OSDBU/acquisition/vector-town-hall.asp')}>Contract Information</button>
  </div>
);

const ContractsSection3 = () => (
  <div className="section">
    <div style={{ gridArea: 'information' }}>
      <div className="header-40-700-resize">GSA Schedule 00Corp/PSS: 47QRAA18D004V</div>
      {/* <div className="subheader-21-600">Sub Area: Professional Services</div> */}
      <div className="text-16-400" style={{ marginTop: '20px' }}>The Professional Services Schedule (PSS) is an indefinite delivery/indefinite quantity (IDIQ) multiple award schedule, providing direct access to simple or complex fixed-price or labor-hour professional services. Goldschmitt is an awardee in the following SINs:</div>
      <ul>
        <li className="text-16-400">874 1 – Integrated Consulting Services</li>
        <li className="text-16-400">874 4 – Training Services</li>
        <li className="text-16-400">874 7 – Integrated Business Program Support Services</li>
      </ul>
      <div className="text-16-400">Program Manager for GSA Schedule 00Corp: <br />Rachael Sutler, PMP, ITIL v3, info@goldschmitt.com</div>
    </div>
    <div className="picture-container" style={{ gridArea: 'picture' }}>
      <div>
        <img src={GSALogo} />
        <Grid />
      </div>
      <button className="button-medium-rounded-1" onClick={() => window.open('https://www.gsa.gov/buy-through-us/purchasing-programs/gsa-multiple-award-schedule/gsa-schedule-offerings/mas-categories/professional-services-category')}>Contract Information</button>
    </div>

    <button className="button-medium-rounded-1" onClick={() => window.open('https://www.gsa.gov/buy-through-us/purchasing-programs/gsa-multiple-award-schedule/gsa-schedule-offerings/mas-categories/professional-services-category')}>Contract Information</button>
  </div>
);






const Grid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="grid" width="321" height="321" viewBox="0 0 321 321">
  <defs>
    <clipPath id="clipPath">
      <rect width="285.082" height="321" fill="none"/>
    </clipPath>
    <clipPath id="clipPath-2">
      <rect width="300.082" height="321" fill="none"/>
    </clipPath>
  </defs>
  <g id="Group_209" data-name="Group 209" transform="translate(-1230 -4033.541)">
    <g id="Repeat_Grid_6" data-name="Repeat Grid 6" transform="translate(1551 4064.5) rotate(90)" clipPath="url(#clipPath)">
      <g transform="translate(-1221 -2785.5)">
        <line id="Line_13" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1179 -2785.5)">
        <line id="Line_13-2" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1137 -2785.5)">
        <line id="Line_13-3" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1095 -2785.5)">
        <line id="Line_13-4" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1053 -2785.5)">
        <line id="Line_13-5" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1011 -2785.5)">
        <line id="Line_13-6" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-969 -2785.5)">
        <line id="Line_13-7" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
    </g>
    <g id="Repeat_Grid_7" data-name="Repeat Grid 7" transform="translate(1243.959 4033.541)" clipPath="url(#clipPath-2)">
      <g transform="translate(-1221 -2785.5)">
        <line id="Line_13-8" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1179 -2785.5)">
        <line id="Line_13-9" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1137 -2785.5)">
        <line id="Line_13-10" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1095 -2785.5)">
        <line id="Line_13-11" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1053 -2785.5)">
        <line id="Line_13-12" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-1011 -2785.5)">
        <line id="Line_13-13" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-969 -2785.5)">
        <line id="Line_13-14" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
      <g transform="translate(-927 -2785.5)">
        <line id="Line_13-15" data-name="Line 13" y2="497" transform="translate(1221.5 2785.5)" fill="none" stroke="#dbdbdb" strokeWidth="1" strokeDasharray="3"/>
      </g>
    </g>
  </g>
</svg>

)