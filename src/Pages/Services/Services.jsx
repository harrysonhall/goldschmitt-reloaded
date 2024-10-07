import React, { useState, useEffect } from 'react';

const Services = () => {
  return (
    <div className='page' id='services'>
      <div className='hero'>
        <div className='hero-header1'>Our Services</div>
        <div className='text-21-400-resizable'>Goldschmitt (G&A) offers a suite of services and solutions to support our clients with their complex business requirements.</div>

        <button className="button-medium-rounded-1">Download Capabilities</button>
      </div>


      <HomeSection1 />

      <HomeSection2 />

      <HomeSection3 />
      
    </div>
  );
};

export default Services;







const HomeSection1 = () => (
  <div className="section" > 
    <div className="horizontal-line-1"></div>
    <div className="badge-medium-black">Build</div>
    <div className="header-1">Custom Computer Programming & Systems Design</div>
    <div className="text-1">We design and build custom and COTS-based solutions to meet your business needs and mission.</div>

    <div className="cards-container-1">
      
      <div className="text-card-1">
        <div className="subheader-14-700">Full System Lifecycle Support</div>
        <div className="text-14-400">We use defined, mature processes to support the full lifecycle of systems from conception through implementation through support.</div>
      </div>
      
      <div className="text-card-1">
        <div className="subheader-14-700">Requirements Analysis</div>
        <div className="text-14-400">We ensure that requirements meet your organization’s mission and goals.</div>
      </div>
      
      <div className="text-card-1">
        <div className="subheader-14-700">System Development and Configuration</div>
        <div className="text-14-400">We develop and configure systems to meet your mission requirements.</div>
      </div>
      
      <div className="text-card-1">
        <div className="subheader-14-700">Operations and Maintenance Planning</div>
        <div className="text-14-400">We provide strategies for on-going system support based in proven IT Service Management (ITSM) Frameworks. We have ITIL certified personnel on staff.</div>
      </div>
      
      <div className="text-card-1">
        <div className="subheader-14-700">Cloud Capable with Impact Level 4</div>
        <div className="text-14-400">We have solution experience with multiple Government cloud providers to quickly deploy our customer’s solutions and reduce their management overhead.</div>
      </div>
      
      <div className="text-card-1">
        <div className="subheader-14-700">Architecture and Design</div>
        <div className="text-14-400">We architect and design the system components using our proven templates and tools to ensure we provide a comprehensive design prior to development.</div>
      </div>


    </div>

  </div>
)





const HomeSection2 = () => (
  <div className="section">
    <div className="horizontal-line-1"></div>
    <div className="badge-medium-black">Support</div>
    <div className="header-1">Management Consulting & Business Support Services</div>
    <div className="text-1">Our services improve the way you work and your business outcomes.</div>

    <div className="cards-container-1">
      <div className="text-card-1">
        <div className="subheader-14-700">Business Process Development, Management and Re-Engineering</div>
        <div className="text-14-400">We rethink your business processes to improve cost, quality, and efficiency.</div>
      </div>

      <div className="text-card-1">
        <div className="subheader-14-700">Strategic Communications and Outreach</div>
        <div className="text-14-400">We manage your communications to get your team on the same page, manage changes, improve morale, and educate customers and users.</div>
      </div>

      <div className="text-card-1">
        <div className="subheader-14-700">Project, Program, and Portfolio Management</div>
        <div className="text-14-400">We provide processes and tools to improve project visibility at all levels across an organization.</div>
      </div>

      <div className="text-card-1">
        <div className="subheader-14-700">Cost and Alternatives Analysis</div>
        <div className="text-14-400">We evaluate the benefits and costs for various alternative solutions to ensure our customers can select their best approach.</div>
      </div>

      <div className="text-card-1">
        <div className="subheader-14-700">Risk Assessment</div>
        <div className="text-14-400">We support risk-based decision analysis and support mitigation planning to ensure mission success.</div>
      </div>

      <div className="text-card-1">
        <div className="subheader-14-700">IT Strategy/Alignment</div>
        <div className="text-14-400">We evaluate IT strategies to improve alignment to agency goals.</div>
      </div>
    </div>
  </div>
);




const HomeSection3 = () => (
  <div className="section">
    <div className="horizontal-line-1"></div>
    <div className="badge-medium-black">Train</div>
    <div className="header-1">Custom Training Development & Delivery</div>
    <div className="text-1">Our training solutions educate, spur growth, and ensure compliance.</div>

    <div className="cards-container-1">
      <div className="text-card-1">
        <div className="subheader-14-700">Custom Training Development</div>
        <div className="text-14-400">We combine expertise in instructional design with subject matter expertise to design effective training to ensure you meet your desired business outcomes.</div>
      </div>

      <div className="text-card-1">
        <div className="subheader-14-700">System Training</div>
        <div className="text-14-400">We provide training for technical systems to meet customer goals for education prior to and during the deployment of new solutions within their organizations.</div>
      </div>

      <div className="text-card-1">
        <div className="subheader-14-700">Training Delivery</div>
        <div className="text-14-400">We employ certified training delivery professionals to enable success.</div>
      </div>
    </div>
  </div>
);
