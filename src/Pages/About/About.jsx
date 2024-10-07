import React, { useState, useEffect } from "react";

import person1 from "./headshots/person1.webp";
import person2 from "./headshots/person2.webp";
import person3 from "./headshots/person3.webp";
import person4 from "./headshots/person4.webp";
import person5 from "./headshots/person5.webp";
import person6 from "./headshots/person6.webp";
import person7 from "./headshots/person7.webp";
import person8 from "./headshots/person8.webp";
import person9 from "./headshots/person9.webp";
import person10 from "./headshots/person10.webp";
import person11 from "./headshots/person11.webp";
import person12 from "./headshots/person12.webp";

const About = () => {
  return (
    <div className="page" id="about">
      <div className="hero">
        <div className="hero-header1">About Us</div>
        <div className="text-21-400-resizable">
          Who we are and what we're about.
        </div>
      </div>

      <AboutSection1 />

      <AboutSection2 />

      <AboutSection3 />
    </div>
  );
};

export default About;

const AboutSection1 = () => (
  <div id="about-section1" className="section">
    <div className="subheader-13-600">Who We Are</div>
    <div className="horizontal-line-1"></div>
    <div className="header-40-600">
      Mission, Values, and Commitment to Growth
    </div>

    <div id="values-container">
      <div className="text-card-1">
        <div className="subheader-17-600">Mission</div>
        <div className="text-16-400">
          Our mission is to make a lasting, positive impact in the public,
          private sectors, and our community. This mission offers Goldschmitt
          principals and team members the opportunity to apply proven
          methodologies, innovation, and best practices to help clients achieve
          their goals.
        </div>
      </div>

      <div className="text-card-1">
        <div className="subheader-17-600">Values</div>
        <div className="text-16-400">
          Deeply ingrained in our corporate culture, our core values are the
          principles by which our personnel and company operate. We value
          experience and results and we are committed to our customers,
          partners, and personnel.
        </div>
      </div>

      <div className="text-card-1">
        <div className="subheader-17-600">Business Training Program</div>
        <div className="text-16-400">
          Our customers rely on us to support their mission and deliver results,
          and we invest in our employees’ growth, education, and skill
          development. Our Business Training Program combines business skills
          training with hands-on experience for junior employees.
        </div>
      </div>
    </div>
  </div>
);

const AboutSection2 = () => (
  <div id="about-section2" className="section">
    <div className="subheader-13-600">Industries</div>
    <div className="horizontal-line-1"></div>

    <div
      className="header-40-600"
      style={{ gridArea: "header", marginBottom: "40px" }}
    >
      Who We Serve
    </div>
    <div id="who-we-serve-container">
      <div
        className="text-16-400"
        style={{ gridArea: "description", alignSelf: "flex-start" }}
      >
        Our expertise in technology, engineering, management, and analytics
        allows us to serve a broad constituency of clients.
      </div>

      <div style={{ gridArea: "civilian" }} className="serve-card">
        <div className="subheader-17-600">U.S. Civilian Government</div>
        <div className="text-16-400">
          Our priority is that your needs are met, to your full satisfaction,
          every time.
        </div>
      </div>

      <div style={{ gridArea: "defense" }} className="serve-card">
        <div className="subheader-17-600">U.S. Defense Government</div>
        <div className="text-16-400">
          We work with you to come up with ideas that are right for you and your
          clients.
        </div>
      </div>

      <div style={{ gridArea: "stateAndLocal" }} className="serve-card">
        <div className="subheader-17-600">State and Local Governments</div>
        <div className="text-16-400">
          We leverage existing relationships to give you and your clients the
          best possible value.
        </div>
      </div>

      <div style={{ gridArea: "edu" }} className="serve-card">
        <div className="subheader-17-600">Educational Institutions</div>
        <div className="text-16-400">
          Your satisfaction is our #1 priority. We’ll do what it takes to find
          the best solution.
        </div>
      </div>

      <div style={{ gridArea: "commercial" }} className="serve-card">
        <div className="subheader-17-600">
          Commercial and Non-Profit Organizations
        </div>
        <div className="text-16-400">
          We work to ensure our services meet the highest quality in support of
          your needs and mission.
        </div>
      </div>
    </div>
  </div>
);

const AboutSection3 = () => (
  <div id="about-section2" className="section">
    <div className="subheader-13-600">Team</div>
    <div className="horizontal-line-1"></div>

    <div
      className="header-40-600"
      style={{ gridArea: "header", marginBottom: "40px" }}
    >
      Meet the Experts.
    </div>

    <div id="people-container">
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person1})` }}></div>
        <div className="text-15-400">Marc Goldschmitt</div>
        <div className="text-15-400">Founder and CEO</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person2})` }}></div>
        <div className="text-15-400">Rachael Sutler</div>
        <div className="text-15-400">Chief Operating Officer</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person3})` }}></div>
        <div className="text-15-400">Bob Fudge</div>
        <div className="text-15-400">VP of Business Transformation</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person4})` }}></div>
        <div className="text-15-400">Patrick Grenier</div>
        <div className="text-15-400">VP of Design and Development</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person5})` }}></div>
        <div className="text-15-400">Vince Fertig</div>
        <div className="text-15-400">Director of Software Architecture</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person6})` }}></div>
        <div className="text-15-400">Nancy Jones</div>
        <div className="text-15-400">VP of Finance</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person7})` }}></div>
        <div className="text-15-400">Anne Dodson</div>
        <div className="text-15-400">
          Director of Human Capital and Workforce Management
        </div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person8})` }}></div>
        <div className="text-15-400">Ashley Miller</div>
        <div className="text-15-400">Director of Contracts</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person9})` }}></div>
        <div className="text-15-400">Ellen Seeley</div>
        <div className="text-15-400">
          Director of Corporate Operations and Compliance
        </div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person10})` }}></div>
        <div className="text-15-400">Ghislaine Sabbagh-Hughes</div>
        <div className="text-15-400">Director of Information Systems</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person11})` }}></div>
        <div className="text-15-400">Danielle Bischoff</div>
        <div className="text-15-400">Director of Training</div>
      </div>
      <div className="people-card">
        <div style={{ backgroundImage: `url(${person12})` }}></div>
        <div className="text-15-400">Laura Kelmelis</div>
        <div className="text-15-400">
          Director of Special Programs and Security
        </div>
      </div>
    </div>
  </div>
);
