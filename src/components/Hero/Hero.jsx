import "./Hero.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import LottieAnimation from "../LottieAnimation/LottieAnimation";
import oliverportrait from "../../assets/portrait5.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="intro-heading-container">
        <div className="headers-container">
          <h2 className="hero_name">Hey, I'm Oliver</h2>
          <h2 className="hero_profession">Fullstack Developer.</h2>
        </div>
        <div className="img-animation-container">
          <div className="hero-portrait-container">
            <img src={oliverportrait} id="hero-portrait" alt="" />
          </div>

          <LottieAnimation className="hero-animation" />
        </div>
      </div>

      <div className="intro-section">
        <p className="intro_paragraph">
          An aspiring full-stack developer eager to delve into the world of web
          development and create engaging online experiences.
        </p>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Hero;
