import "./Hero.css";
import Timeline from "../Timeline/TimeLine";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <h2 className="hero_name">Hi, I'm Oliver</h2>
        <h2 className="hero_profession">Fullstack Developer.</h2>
      </div>
      <div className="divided-section">
        <div className="paragraph-btn-container">
          <p className="intro_paragraph">
            Residing in Stockholm, I specialize in harnessing the power of the
            MERN stack to develop exceptional web solutions. With a keen eye for
            detail and a passion for crafting perfection, I approach each
            project with enthusiasm and dedication.
          </p>
          <button id="Resume-btn">Resume</button>
        </div>
        <hr className="divider" />
        <div className="timeline-container">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Hero;

