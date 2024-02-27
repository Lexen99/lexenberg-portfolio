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
    <h2 className="section-heading">Technologies</h2>
    <div className="Tech-container">
        <div className="tech-Cards"><img src={mui} alt="material-ui" /></div>
        <div className="tech-Cards"><img src={css} alt="css" /></div>
        <div className="tech-Cards"><img src={html} alt="html" /></div>
        <div className="tech-Cards"><img src={JavaScript} alt="javascript" /></div>
        <div className="tech-Cards"><img src={mongoDB} alt="mongodb" /></div>
        <div className="tech-Cards"><img src={nodejs} alt="nodejs" /></div>
        <div className="tech-Cards"><img src={react} alt="react" /></div>
        <div className="tech-Cards"><img src={git} alt="git" /></div>
        <div className="tech-Cards"><img src={express} alt="express" /></div>
    </div>
  </div>
  )
};

export default Logos;
