import "./Projects.css";
import { useState } from "react";
import spotify from "../../assets/spotify-clone.png";
import countryapp from "../../assets/country-app.png";
import password from "../../assets/password-generator.png";
import motivation from "../../assets/Motivations-generator.png";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (i) => {
    if (i === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(i);
    }
  };

  return (
    <section id="projects">
      <h2 className="section-heading">Projects.</h2>
      <div className="projects-container">
        <div className="projects-rows">
          <div
            className={`project-card ${expandedIndex === 0 ? "expanded" : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <img src={spotify} alt="" />
            <div className="overlay">
              <div className="overlay-text">
                <h2 className="project-header">Spotify</h2>
                <p className="description">
                  Responsive Spotify clone application consisting of multiple
                  components, leveraging Spotify's Web API and SDK. Enjoy album
                  and playlist viewing, along with play, pause, rewind, and
                  volume adjustment functionalities. Developed using React,
                  JavaScript, and API integration
                </p>
                <div className="buttons-navigation">
                  <button>
                    <a href="https://github.com/Lexen99/spotify">Github</a>
                  </button>
                  <button>
                    <a href="">View App</a>
                  </button>
                </div>
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
                <p className="description">
                  React-based country app with API integration. Search, filter
                  by region, and toggle between dark and light modes for
                  streamlined exploration.
                </p>
                <div className="buttons-navigation">
                  <button>
                    <a href="https://github.com/Lexen99/country-app">Github</a>
                  </button>
                  <button>
                    <a href="https://flag-api-oliver.netlify.app/">View App</a>
                  </button>
                </div>
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
                <p className="description">
                  JavaScript-powered password generator with HTML and CSS.
                </p>
                <div className="buttons-navigation">
                  <button>
                    <a href="https://github.com/Lexen99/spotify">Github</a>
                  </button>
                  <button>
                    <a href="">View App</a>
                  </button>
                </div>
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
                <p className="description">
                  Motivation generator utilizing JavaScript, HTML, and CSS, with
                  API integration.
                </p>
                <div className="buttons-navigation">
                  <button>
                    <a href="https://github.com/Lexen99/spotify">Github</a>
                  </button>
                  <button>
                    <a href="">View App</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
