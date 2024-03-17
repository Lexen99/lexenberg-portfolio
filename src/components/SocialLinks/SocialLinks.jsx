import "./SocialLinks.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const SocialLinks = () => {
  return (
    <div className="social_links">
      <ScrollLink
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={900}
      >
        <button className="primary link" href="">
          My Projects
        </button>
      </ScrollLink>
      <button className="secondary link">
        <a href="https://github.com/Lexen99">GitHub</a>
      </button>
    </div>
  );
};

export default SocialLinks;
