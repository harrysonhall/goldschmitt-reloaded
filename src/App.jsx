import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";

import { Navigation } from "./Navigation/Navigation";
import { Footer } from "./Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contracts from "./Pages/Contracts/Contracts";
import Services from "./Pages/Services/Services";
import Solutions from "./Pages/Solutions/Solutions";
import News from "./Pages/News/News";
import Careers from "./Pages/Careers/Careers";
import Contact from "./Pages/Contact/Contact";

/* 
    For Build use:
    Comment out these imports when using Vite with Chrome Dev Tools.
    Only use when building and deploying.
*/

import "./Common/Common.css";
import "./App.css";
import "./Navigation/Navigation.css";
import "./Navigation/NavigationBlur.css";
import "./Footer/Footer.css";

import "./Pages/Home/Home.css";
import "./Pages/About/About.css";
import "./Pages/Contracts/Contracts.css";
import "./Pages/Services/Services.css";
import "./Pages/Solutions/Solutions.css";
import "./Pages/News/News.css";
import "./Pages/Careers/Careers.css";
import "./Pages/Contact/Contact.css";

import favicon192 from "./icon192x192.png";

const App = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = favicon192;
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />å
        <Route path="/about" element={<About />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

    // <>
    // <Navigation />

    // 	<Home />

    // <Footer />

    // </>
  );
};

export default App;
