import React, { useState, useEffect } from "react";

import photo1 from "./photo-1.webp";
import photo2 from "./photo-2.webp";

const News = () => {
  return (
    <div className="page" id="news">
      <div className="hero">
        <div className="hero-header1">News</div>
        <div className="text-21-400-resizable">
          Stay up to date with all the latest information.
        </div>
      </div>

      <NewsItem
        photo={photo1}
        link={'https://www.goldschmitt.com/four-years-of-exceptional-growth'}
        date="August 13, 2024"
        title="Four Years of Exceptional Growth!"
        description="Goldschmitt and Associates LLC has secured the #736 spot on Inc. 5000’s 2024 list of fastest-growing private companies, achieving 632% growth from 2023. The IT services company ranked #31 nationally in their sector and #2 in the Mid-Atlantic region. This marks their fourth Inc. 5000 recognition, following their remarkable 10,873% growth in 2023 that earned them the 34th spot. CEO Marc Goldschmitt credits their success to their team’s dedication and customer-focused approach."
      />

      <NewsItem
        photo={photo2}
        link={'https://www.goldschmitt.com/we-made-the-list-again'}
        date="August 15, 2023"
        title="We Made the List….Again!"
        description="Goldschmitt and Associates LLC achieved an extraordinary milestone in 2023, ranking #34 on Inc. 5000’s list of fastest-growing private companies with a remarkable 10,873% growth rate. The company topped regional rankings as #1 contractor in the DC/Metro area and Virginia, while placing #2 nationally in IT services. Under CEO Marc Goldschmitt’s leadership, the company added over 450 jobs in three years, demonstrating substantial growth in federal contracting while maintaining seamless operations during pandemic challenges."
      />
    </div>
  );
};

export default News;

const NewsItem = ({ date, title, description, photo, link }) => (
  <div className="news-item">
    <div className="badge-small-white">{date}</div>
    <div className="subheader-24-800">{title}</div>
    <div className="news-picture-container">
      <div>
        <div
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
    <div className="text-16-400">{description}</div>
    <button className="button-small-rounded-1" onClick={() => window.open(link)}>View</button>
  </div>
);
