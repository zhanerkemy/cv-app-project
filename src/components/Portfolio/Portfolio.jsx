import { useState } from "react";

import img1 from "../../assets/portfolio/project1.jpg";
import img2 from "../../assets/portfolio/project2.jpg";
import img3 from "../../assets/portfolio/project3.jpg";
import img4 from "../../assets/portfolio/project4.jpg";

import "./Portfolio.scss";

const portfolioItems = [
  {
    id: 1,
    title: "CV Portfolio Website",
    category: "web",
    description: "Personal portfolio website built with React and SCSS.",
    image: img1,
  },
  {
    id: 2,
    title: "Machine Learning Research",
    category: "data",
    description: "ML models for academic research and data analysis.",
    image: img2,
  },
  {
    id: 3,
    title: "Komek Platform",
    category: "web",
    description: "Social-impact project focused on donor incentives.",
    image: img3,
  },
  {
    id: 4,
    title: "Data Dashboard",
    category: "data",
    description: "Dashboard for analyzing business and performance metrics.",
    image: img4,
  },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Data", value: "data" },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <div className="portfolio">
      <div className="portfolio__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`portfolio__tab ${
              activeTab === tab.value ? "portfolio__tab--active" : ""
            }`}
            onClick={() => setActiveTab(tab.value)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="portfolio__grid">
        {filteredItems.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <img className="portfolio__image" src={item.image} alt={item.title} />

            <div className="portfolio__content">
              <h3 className="portfolio__title">{item.title}</h3>
              <p className="portfolio__category">{item.category}</p>
              <p className="portfolio__description">{item.description}</p>
              <a className="portfolio__link" href="#contacts">
                View resource
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;