import "./About.css";
import oliver from "../../assets/portrait3.png";

const About = () => {
  return (
    <section className="about">
      <h2 className="section-heading">About me.</h2>
      <div className="about-container">
        <div className="about-me-container">
          <p className="about-me">
            Based in Stockholm, I leverage the MERN stack to create dynamic web
            solutions. With a background in sports and carpentry, I bring a
            unique perspective to my work. Inspired by my discovery of Techover
            Bootcamp, I'm passionate about honing my skills and delivering
            exceptional results.
          </p>
          <p className="about-me">
            Combining precision and enthusiasm, I approach each project with
            dedication, ensuring every detail is meticulously crafted for
            excellence.
          </p>
        </div>
        <div className="portrait-container">
          <div className="portrait-border">
            <img id="portrait" src={oliver} alt="Oliver Lexenberg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
