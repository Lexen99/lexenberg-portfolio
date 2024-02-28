import "./Projects.css";
import { useState } from "react";
import spotify from "../../assets/spotify-clone.png";
import countryapp from "../../assets/country-app.png";
import password from "../../assets/password-generator.png";
import motivation from "../../assets/Motivations-generator.png";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (i) => {
    setExpandedIndex(i === expandedIndex ? null : i);
  };

  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-container">
        <div className="projects-rows">
          <div
            className={`project-card ${expandedIndex === 0 ? "expanded" : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <img src={spotify} alt="" />
            <div>
              <h3>h3</h3>
              <p>pargraf</p>
            </div>
          </div>
          <div
            className={`project-card ${expandedIndex === 1 ? "expanded" : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <img src={countryapp} alt="" />
            <div>
              <h3>h3</h3>
              <p>pargraf</p>
            </div>
          </div>
        </div>
        <div className="projects-rows">
          <div
            className={`project-card ${expandedIndex === 2 ? "expanded" : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <img src={password} alt="" />
            <div>
              <h3>h3</h3>
              <p>pargraf</p>
            </div>
          </div>
          <div
            className={`project-card ${expandedIndex === 3 ? "expanded" : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <img src={motivation} alt="" />
            <div>
              <h3>h3</h3>
              <p>pargraf</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
