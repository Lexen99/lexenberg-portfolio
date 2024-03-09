import "./Logos.css"
import mui from "../../assets/MUI-logo.png"
import css from "../../assets/css-logo.webp"
import html from "../../assets/html-logo.png"
import JavaScript from "../../assets/JavaScript-logo.png"
import mongoDB from "../../assets/mongodb-logo3.png"
import nodejs from "../../assets/node.js-2.png"
import react from "../../assets/react.svg"
import git from "../../assets/Git_icon.svg.png"
import express from "../../assets/express-js.png"


const Logos = () => {
  return (
  <div className="Technologies-container">
    <h2 className="section-heading">Technologies.</h2>
    <div className="Tech-container">
        <div className="tech-Cards"><img src={mui} alt="material-ui" /><p>MUI</p></div>
        <div className="tech-Cards"><img src={css} alt="css" /><p>CSS</p></div>
        <div className="tech-Cards"><img src={html} alt="html" /><p>HTML</p></div>
        <div className="tech-Cards"><img src={JavaScript} alt="javascript" /><p>Javascript</p></div>
        <div className="tech-Cards"><img src={mongoDB} alt="mongodb" /><p>MongoDB</p></div>
        <div className="tech-Cards"><img src={nodejs} alt="nodejs" /><p>Node.js</p></div>
        <div className="tech-Cards"><img src={react} alt="react" /><p>React</p></div>
        <div className="tech-Cards"><img src={git} alt="git" /><p>Git</p></div>
        <div className="tech-Cards"><img src={express} alt="express" /><p>Express</p></div>
    </div>
  </div>
  )
};

export default Logos;
