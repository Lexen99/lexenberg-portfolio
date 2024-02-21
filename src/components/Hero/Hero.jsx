import "./Hero.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const Hero = () => {
  return (
    <div className="hero">
      <div className="introduction">
        <div>
          <h2 className="hero_name">Hi, I'm Oliver</h2>
          <h2 className="hero_profession">Fullstack Developer.</h2>
        </div>
        <SocialLinks />
        <p className="intro_paragraph">
          Residing in Stockholm, I specialize in harnessing the power of the
          MERN stack to develop exceptional web solutions. With a keen eye for
          detail and a passion for crafting perfection, I approach each project
          with enthusiasm and dedication. Whether it's building sleek interfaces
          or optimizing performance, I strive to deliver top-notch results that
          exceed expectations. I'm committed to ongoing growth and eagerly look
          forward to expanding my skills and expertise in the dynamic field of
          web development.
        </p>
      </div>
    </div>
  );
};

export default Hero;
