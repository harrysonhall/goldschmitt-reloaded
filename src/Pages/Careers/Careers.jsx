import React, { useState, useEffect } from 'react';

const Careers = () => {
  return (
    <div className='page' id='careers'>
      <div className='hero'>
        <div className='hero-header1'>Careers</div>
        <div className='text-21-400-resizable'>Be apart of an unstoppable team.</div>
      </div>


      <CareersSection1 />

      <CareersSection2 />
      
    </div>
  );
};

export default Careers;





const CareersSection1 = () => (
  <div id="careers-section1" className="section">
    <div className="subheader-13-600">Benefits</div>
    <div className="horizontal-line-1"></div>
    <div className="header-40-600">Our Benefits</div>

    <div className="cards-container-1">
     <div className="text-card-1">
        <div className="subheader-17-600">Inclusive and flexible environment</div>
        <div className="text-16-400">
          We foster a diverse and inclusive workplace, offering flexibility with telework and adaptable schedules whenever customer requirements allow.
        </div>
      </div>
      
      <div className="text-card-1">
        <div className="subheader-17-600">Learn and advance</div>
        <div className="text-16-400">
          Our rapidly growing company offers ample opportunities for career development, working on high-impact projects across 12 federal agencies, and collaborating with talented professionals.
        </div>
      </div>
      
      <div className="text-card-1">
        <div className="subheader-17-600">Stable and recognized growth</div>
        <div className="text-16-400">
          Goldschmitt is one of the top 50 fastest-growing businesses, recognized by INC500 and VET100, providing a stable and exciting work environment.
        </div>
      </div>
      
      <div className="text-card-1">
        <div className="subheader-17-600">Industry leadership</div>
        <div className="text-16-400">
          As the #2 IT services provider in America and #1 federal contractor in the VA/DC-Metro area, you’ll work with the best in the business, gaining valuable experience in systems design and data analytics.
        </div>
      </div>

      
    </div>

  </div>
)



const CareersSection2 = () => (
  <div id="careers-section2" className="section">
    <div className="subheader-13-600">Job Postings</div>
    <div className="horizontal-line-1"></div>
    <div className="header-40-600">Open Positions</div>

  <div id="jobs-container">
    <div className="subheader-13-600">Department of Treasury</div>
    <div className="job-department-container">
      <JobCard 
        title="FOIA Analyst I" 
        location="Washington, District of Columbia (Hybrid)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="FOIA Analyst II" 
        location="Washington, District of Columbia (Hybrid)" 
        onClick={() => console.log('Apply button clicked')} 
      />
    </div>

    <div className="subheader-13-600">Finance</div>
    <div className="job-department-container">
      <JobCard 
        title="Accounting Assistant" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
    </div>

    <div className="subheader-13-600">Project Management and Analysis (PMO)</div>
    <div className="job-department-container">
      <JobCard 
        title="Business Analyst (BPA)" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Business and Data Analyst - Asset Management Specialist" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Business and Data Analyst - Automated Facility Management Specialist" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Change Management Analyst" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Data Analyst" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Enterprise Architect" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Facilities Management SME" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Financial Analyst" 
        location="Dayton, Ohio (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Frontend Engineer" 
        location="Sterling, Virginia (Hybrid)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Frontend Engineer (Part-Time)" 
        location="Sterling, Virginia (Hybrid)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Help Desk Subject Matter Expert" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Senior Project Manager" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Software Engineer" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Software Engineer (Part-Time)" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Systems Engineer" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Technical Writer" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Training Management Subject Matter Expert" 
        location="Sterling, Virginia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
    </div>

    <div className="subheader-13-600">SBA CARES</div>
    <div className="job-department-container">
      <JobCard 
        title="Call Center Team Lead III" 
        location="Remote" 
        onClick={() => console.log('Apply button clicked')} 
      />
    </div>

    <div className="subheader-13-600">USDS</div>
    <div className="job-department-container">
      <JobCard 
        title="Customer Service Representative" 
        location="Augusta, Georgia (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
      <JobCard 
        title="Customer Service Representative" 
        location="Hendersonville, Tennessee (Remote)" 
        onClick={() => console.log('Apply button clicked')} 
      />
    </div>
  </div>


  </div>
)




const JobCard = ({ title, location, onClick }) => (
  <div className="job-card">
    <div>
      <div className="text-18-700">{title}</div>
      <div className="text-16-400">{location}</div>
    </div>
    <button className="button-small-rounded-1" onClick={onClick}>Apply</button>
  </div>
);