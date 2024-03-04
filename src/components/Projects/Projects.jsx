import "./Projects.css";
import { useState } from "react";
import spotify from "../../assets/spotify-clone.png";
import countryapp from "../../assets/country-app-dark.png";
import password from "../../assets/password-generator.png";
import motivation from "../../assets/Motivations-generator.png";

const Projects = () => {
  function handleCardClick(event) {
    const card = event.currentTarget;
    card.classList.toggle("clicked");
  }

  return (
    <section id="projects">
      <h2 className="section-heading">Projects.</h2>
      <div className="projects-container">
        <div className="project-row">
          <div className="project-card" onClick={handleCardClick}>
            <img src={spotify} alt="" />

            <div className="overlay">
              <div className="overlay-text">
                <h2 className="project-header">Spotify Clone</h2>
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
                    <a href="https://oliver-spotify.netlify.app/">View App</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-row">
          <div className="project-name even">
            <hr />
          </div>
          <div className="project-card" onClick={handleCardClick}>
            <img src={countryapp} alt="" />

            <div className="overlay">
              <div className="overlay-text">
                <h2 className="project-header">Countries REST API</h2>
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
        <div className="project-row">
          <div className="project-name odd">
            <hr />
          </div>
          <div className="project-card" onClick={handleCardClick}>
            <img src={password} alt="" />

            <div className="overlay">
              <div className="overlay-text">
                <h2 className="project-header">Password Generator</h2>
                <p className="description">
                  JavaScript-powered password generator with HTML and CSS.
                  Create secure passwords with ease.
                </p>
                <div className="buttons-navigation">
                  <button>
                    <a href="https://github.com/Lexen99/password-generator">
                      Github
                    </a>
                  </button>
                  <button>
                    <a href="https://password-generator-oliver.netlify.app/">
                      View App
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-row">
          <div className="project-name even">
            <hr />
          </div>
          <div className="project-card" onClick={handleCardClick}>
            <img src={motivation} alt="" />

            <div className="overlay">
              <div className="overlay-text">
                <h2 className="project-header">Motivation Generator</h2>
                <p className="description">
                  Motivation generator utilizing JavaScript, HTML, and CSS, with
                  API integration. Inspire yourself with a click.
                </p>
                <div className="buttons-navigation">
                  <button>
                    <a href="https://github.com/Lexen99/motivation-generator">
                      Github
                    </a>
                  </button>
                  <button>
                    <a href="https://motivation-generator-oliver.netlify.app/">
                      View App
                    </a>
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
