import "./Hero.css";
import SocialLinks from "../SocialLinks/SocialLinks";
import LottieAnimation from "../LottieAnimation/LottieAnimation";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="intro-container">
        <div className="intro-heading-container">
          <h2 className="hero_name">Hey, I'm Oliver</h2>
          <h2 className="hero_profession">Fullstack Developer.</h2>
          <div className="hero-animation-container">
            <LottieAnimation className="hero-animation" />
          </div>
        </div>
      </div>

      <SocialLinks />
      <div className="intro-section">
        <p className="intro_paragraph">
          Hey, I'm Oliver Lexenberg, an aspiring full-stack developer eager to
          delve into the world of web development and create engaging online
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
