import "./About.css";
import oliver from "../../assets/portrait4.png";

const About = () => {
  return (
    <section id="about">
      <h2 className="section-heading">About me.</h2>

      <div className="content-container">
        <div id="about-me-content">
          <p className="about-section-text-content">
            Based in Stockholm, I leverage the MERN stack to create dynamic web
            solutions. With a background in sports and carpentry, I bring a
            unique perspective to my work. Inspired by my discovery of
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
        <div id="image-content">
          <div className="image-container">
            <div className="img-overlay"></div>
            <img id="oliver" src={oliver} alt="oliver" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
