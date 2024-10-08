import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import inc5000 from "./inc-5000-logo.webp";

import cert1 from "./certs/cert-1.webp";
import cert2 from "./certs/cert-2.webp";
import cert3 from "./certs/cert-3.webp";
import cert4 from "./certs/cert-4.webp";
import cert5 from "./certs/cert-5.webp";

const CHARACTER_DELETE_WAIT = 125;
const CHARACTER_ADD_WAIT = 200;
const FULL_WORD_WAIT = 1000;
const WORD_DONE_WAIT = 500;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function animateText(element) {
  await wait(FULL_WORD_WAIT); // Wait before starting

  element.innerHTML = "I";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "In";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Inn";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Inno";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Innov";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Innova";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Innovat";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Innovate";

  await wait(FULL_WORD_WAIT); // Wait when the full word is typed out

  element.innerHTML = "Innovat";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Innova";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Innov";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Inno";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Inn";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "In";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "I";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "";

  await wait(WORD_DONE_WAIT); // Wait when it's fully deleted

  element.innerHTML = "T";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Tr";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Tra";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Tran";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Trans";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Transf";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Transfo";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Transfor";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Transform";

  await wait(FULL_WORD_WAIT); // Wait when the full word is typed out

  element.innerHTML = "Transfor";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Transfo";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Transf";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Trans";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Tran";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Tra";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Tr";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "T";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "";

  await wait(WORD_DONE_WAIT); // Wait when it's fully deleted

  element.innerHTML = "S";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Su";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Suc";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Succ";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Succe";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Succee";
  await wait(CHARACTER_ADD_WAIT);
  element.innerHTML = "Succeed";

  await wait(FULL_WORD_WAIT); // Wait when the full word is typed out

  element.innerHTML = "Succee";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Succe";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Succ";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Suc";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "Su";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "S";
  await wait(CHARACTER_DELETE_WAIT);
  element.innerHTML = "";

  animateText(element);
}

const Home = () => {


  const toggleMenu = () => {
	  const root = document.querySelector('#html')
	  root.hasAttribute("mobile-menu-opened") ? root.removeAttribute("mobile-menu-opened") : root.setAttribute("mobile-menu-opened", "")
  }

  const navigate = useNavigate()
  const location = useLocation()

  const navigateTo = (path) => {
	  document.querySelector('#html').removeAttribute("mobile-menu-opened");

	  if (location.pathname === path) {
		  window.scrollTo({ top: 0, behavior: 'smooth' });
	  } else {
		  navigate(path);
		  window.scrollTo(0, 0);
	  }
  }

  useEffect(() => {
	const element = document.getElementById("home-hero-header-text");
	animateText(element);
  }, []);

  return (
	<div className="page" id="home">
	  <div className="hero">
		<div id="home-hero-subheader" className="subheader-17-600">
		  Delivering excellence where it matters
		</div>
		<div className="home-hero-header">
		  Dare to
		  <div>
			<div>
			  <a id="home-hero-header-text"></a> <div></div>
			</div>
		  </div>
		</div>
		<div id="home-hero-text" className="text-21-400-resizable">
		  Our industry-leading team drives mission success with proven
		  solutions, trusted by government and enterprise clients.
		</div>

		<button
		  className="button-medium-cornered-1"
		  onClick={() => navigateTo('/about')}
		>
		  Learn more
		</button>

		<div id="home-hero-subheader2">Quality Certifications</div>
		<div id="home-hero-certifications-container">
		  <div id="home-hero-certs-1">
			<img src={cert1} alt="Certificate 1" />
			<img src={cert2} alt="Certificate 2" />
		  </div>

		  <div id="home-hero-certs-2">
			<img src={cert3} alt="Certificate 3" />
			<img src={cert4} alt="Certificate 4" />
			<img src={cert5} alt="Certificate 5" />
		  </div>
		</div>
	  </div>

	  <HomeSection1 />

	  <div id="home-services" className="section">
		<div className="horizontal-line-1"></div>
		<div className="header-1">Our Services</div>
		<div className="text-1">
		  Goldschmitt integrates seamlessly with your organization to exceed
		  your goals. Our proven, repeatable processes meet international
		  standards and guide every phase of your business and system
		  management.
		</div>
	  </div>
	  <div id="home-services-container">
		<div style={{ width: "20px", justifySelf: "flex-end" }}></div>
		<div className="home-services-card">
		  <div className="subheader-21-700">
			Computer Programming and System Design
		  </div>
		  <div className="text-16-400">
			Design and build custom and COTS solutions to meet your business
			needs.
		  </div>
		  <button className="button-small-rounded-1" onClick={() => navigateTo('/services#computer-systems-design')}>Learn more</button>
		</div>

		<div className="home-services-card">
		  <div className="subheader-21-700">
			Management Consulting and Business Support
		  </div>
		  <div className="text-16-400">
			Our services improve the way you work and your business outcomes.
		  </div>
		  <button className="button-small-rounded-1" onClick={() => navigateTo('/services#managment-consulting')}>Learn more</button>
		</div>

		<div className="home-services-card">
		  <div className="subheader-21-700">
			Customized Training, Development, and Delivery
		  </div>
		  <div className="text-16-400">
			Our training solutions educate, spur growth, and ensure compliance..
		  </div>
		  <button className="button-small-rounded-1" onClick={() => navigateTo('/services#computer-systems-design')}>Learn more</button>
		</div>

		<div style={{ width: "20px" }}></div>
	  </div>

	  <HomeSection3 />
	</div>
  );
};

export default Home;

const HomeSection1 = () => (
  <div id="home-section1" className="section">
	<div className="horizontal-line-1"></div>
	<div className="badge-medium-black">Why Goldschmitt</div>
	<div className="header-1">
	  <a className="gradient-text">More</a> than just a <br /> service provider
	</div>
	<div className="text-1">
	  Goldschmitt integrates seamlessly with your organization to exceed your
	  goals. Our proven, repeatable processes meet international standards and
	  guide every phase of your business and system management.
	</div>

	<div className="home-why-cardConatiner">
	  <div className="text-card-1" style={{ gridArea: "management" }}>
		<div className="subheader-14-700">
		  Comprehensive Requirement Management
		</div>
		<div className="text-14-400">
		  We document and refine your business requirements, ensuring clarity
		  and alignment from day one.
		</div>
	  </div>

	  <div className="text-card-1" style={{ gridArea: "assessment" }}>
		<div className="subheader-14-700">Thorough Testing and Assessments</div>
		<div className="text-14-400">
		  We conduct rigorous assessments and thorough testing to guarantee our
		  solutions exceed expectations.
		</div>
	  </div>

	  <div className="text-card-1" style={{ gridArea: "design" }}>
		<div className="subheader-14-700">Innovative Solution Design</div>
		<div className="text-14-400">
		  We design, develop, and deploy solutions tailored to your specific
		  needs, turning your vision into reality.
		</div>
	  </div>

	  <div className="text-card-1" style={{ gridArea: "maintenance" }}>
		<div className="subheader-14-700">
		  Efficient Operations and Maintenance
		</div>
		<div className="text-14-400">
		  We efficiently manage the operations and maintenance of your business
		  solutions, ensuring long-term sustainability.
		</div>
	  </div>

	  <div className="text-card-1" style={{ gridArea: "training" }}>
		<div className="subheader-14-700">Customized Training</div>
		<div className="text-14-400">
		  We offer tailored training that equips your team with the skills and
		  knowledge to ensure future success.
		</div>
	  </div>
	</div>
  </div>
);

const HomeSection3 = () => (
  <div id="home-section3" className="section">
	<div className="horizontal-line-1" style={{ gridArea: "line" }}></div>
	<div id="header-container">
	  <div className="header-1">
		Four Years of <br />
		Exceptional Growth
	  </div>
	  <div className="text-1">
		Goldschmitt has done it again! We’re thrilled to announce that we’ve
		made the INC 5000’s prestigious list of fastest-growing companies for
		the fourth time in a row, a testament to our relentless drive to
		innovate and expand.
	  </div>
	</div>

	<div id="inc-5000-container" style={{ gridArea: "logo" }}>
	  <div className="square"></div>
	  <div className="square"></div>
	  <div className="square"></div>
	  <div className="square"></div>

	  <div id="inc-5000-logo-wrapper">
		<img src={inc5000} />
	  </div>
	</div>

	<div className="home-fourYears-cardContainer" style={{ gridArea: "cards" }}>
	  <div className="text-card-1">
		<div className="subheader-17-700">Dare to Innovate</div>
		<div className="text-14-400">
		  Our innovative PMO structure, collaborative team environment,
		  exceptional past performance and experience, provides our customers
		  with the confidence they need to keep reaching to Goldschmitt for
		  support.
		</div>
	  </div>

	  <div className="vertical-line-1"></div>
	  <div className="horizontal-line-1"></div>

	  <div className="text-card-1">
		<div className="subheader-17-700">Dare to Transform</div>
		<div className="text-14-400">
		  Goldschmitt transformed how we work to meet our customers’ evolving
		  needs. Our agility in adapting to a rapidly changing environment
		  enabled us to grow from a small one-person team to over 300 employees,
		  proving that transformation is at the heart of our success.
		</div>
	  </div>

	  <div className="vertical-line-1"></div>
	  <div className="horizontal-line-1"></div>

	  <div className="text-card-1">
		<div className="subheader-17-700">Dare to Succeed</div>
		<div className="text-14-400">
		  Even after our astonishing 10,873 percent growth in 2023, which earned
		  us the 34th spot on INC’s 2023 List, we didn’t just rest on our
		  laurels. We kept the momentum going, landing on the list again at Rank
		  736 for 2024, a 632% growth from 2023—an extraordinary achievement
		  that underscores our relentless drive and success!
		</div>
	  </div>
	</div>
  </div>
);
