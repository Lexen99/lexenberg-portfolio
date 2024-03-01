import "./Projects.css";
import { useState } from "react";
import spotify from "../../assets/spotify-clone.png";
import countryapp from "../../assets/country-app.png";
import password from "../../assets/password-generator.png";
import motivation from "../../assets/Motivations-generator.png";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (i) => {
    if(i === expandedIndex) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(i)
    }
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
            <div className="overlay">
              <div className="overlay-text">
                <h3 className="project-header">Spotify</h3>
              </div>
            </div>
          </div>
          <div
            className={`project-card ${expandedIndex === 1 ? "expanded" : ""}`}
            onClick={() => handleCardClick(1)}
          >
            <img src={countryapp} alt="" />
            <div className="overlay">
              <div className="overlay-text">
                <h3 className="project-header">Countries REST API</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-rows">
          <div
            className={`project-card ${expandedIndex === 2 ? "expanded" : ""}`}
            onClick={() => handleCardClick(2)}
          >
            <img src={password} alt="" />
            <div className="overlay">
              <div className="overlay-text">
                <h3 className="project-header">Password Generator</h3>
              </div>
            </div>
          </div>
          <div
            className={`project-card ${expandedIndex === 3 ? "expanded" : ""}`}
            onClick={() => handleCardClick(3)}
          >
            <img src={motivation} alt="" />
            <div className="overlay">
              <div className="overlay-text">
                <h3 className="project-header">Motivation Generator</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
