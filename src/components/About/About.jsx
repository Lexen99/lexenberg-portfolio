import "./About.css";
import oliver from "../../assets/portrait4.png";
import { useState } from "react";

const About = () => {
  const [activeButton, setActiveButton] = useState("image");

  const handleClick = (section) => {
    setActiveButton(section);
  };

  return (
    <section id="about">
      <h2 className="section-heading">About me.</h2>
      <div className="about-section">
        <div className="about-buttons">
          <button
            className={activeButton === "image" ? "active" : ""}
            onClick={() => handleClick("image")}
          >
            Me
          </button>
          <button
            className={activeButton === "about-me" ? "active" : ""}
            onClick={() => handleClick("about-me")}
          >
            <span>About</span>
          </button>
          <button
            className={activeButton === "interests" ? "active" : ""}
            onClick={() => handleClick("interests")}
          >
            Interests
          </button>
        </div>
        <div className="content-container">
          <div
            className={`content ${activeButton === "image" ? "active" : ""}`}
            id="image-content"
          >
            <div className="image-container">
              <div className="img-overlay"></div>
              <img id="oliver" src={oliver} alt="oliver" />
            </div>
          </div>
          <div
            className={`content ${activeButton === "about-me" ? "active" : ""}`}
            id="about-me-content"
          >
            <p className="about-section-text-content">
              Based in Stockholm, I leverage the MERN stack to create dynamic
              web solutions. With a background in sports and carpentry, I bring
              a unique perspective to my work. Inspired by my discovery of
              <span className="highlighted-text"> Techover Bootcamp</span>, I'm
              passionate about honing my skills and delivering exceptional
              results.
              <br />
              <br />
              Combining precision and enthusiasm, I approach each project with
              dedication, ensuring every detail is meticulously crafted for
              excellence.
            </p>
            <div className="skillset-container">
              <ul className="skillset-list">
                <li className="skillset-item">MUI</li>
                <li className="skillset-item">CSS</li>
                <li className="skillset-item">HTML</li>
                <li className="skillset-item">Javascript</li>
                <li className="skillset-item">MongoDB</li>
                <li className="skillset-item">Node.js</li>
                <li className="skillset-item">React</li>
                <li className="skillset-item">Git</li>
                <li className="skillset-item">Express</li>
              </ul>
            </div>
          </div>
          <div
            className={`content ${activeButton === "interests" ? "active" : ""}`}
            id="interests"
          >
            <p className="about-section-text-content">
              Ice hockey has been my passion for over two decades, shaping me
              through discipline, teamwork, and resilience.<span className="highlighted-text"> It's the journey of
              growth, both on and off the ice, that continues to inspire and
              drive me forward.</span>
              <br />
              <br />
              Beyond hockey, I find fulfillment in a variety of physical
              activities and sports. Whether it's hitting the gym or exploring
              the outdoors, I thrive on the challenges and opportunities for
              personal growth that each activity presents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
