import "./SocialLinks.css";


const SocialLinks = () => {
  return (
    <div className="social_links">
      <a
        className="link linkedin"
        href="https://www.linkedin.com/in/oliver-lexenberg-411788264/"
      >
        <img src="" alt="" className="link-logo" />
        LinkedIn
      </a>
      <a className="link github" href="https://github.com/Lexen99">
        <img src="" alt="" className="link-logo" />
        GitHub
      </a>
      <a className="link mail" href="mailto:lexenbergoliver@gmail.com">
        <img src="" alt="" className="link-logo"/>
        Mail
      </a>
      <a className="link resume" href="">
        <img src="" alt="" className="link-logo"/>
        Resume
      </a>
    </div>
  );
};

export default SocialLinks;
