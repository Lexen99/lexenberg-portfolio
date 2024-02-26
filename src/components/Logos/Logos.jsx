import "./Logos.css"
import mui from "../../assets/MUI-logo.png"
import css from "../../assets/css-logo.webp"
import html from "../../assets/html-logo.png"
import JavaScript from "../../assets/JavaScript-logo.png"
import mongoDB from "../../assets/mongodb-logo.png"
import nodejs from "../../assets/node.js.png"
import react from "../../assets/react.svg"
import git from "../../assets/Git_icon.svg.png"


const Logos = () => {
  return (
  <div className="Technologies-container">
    <h2 style={{color: "white"}} className="section-heading">Technologies</h2>
    <div className="Tech-container">
        <div className="tech-Cards"><img src={mui} alt="" /></div>
        <div className="tech-Cards"><img src={css} alt="" /></div>
        <div className="tech-Cards"><img src={html} alt="" /></div>
        <div className="tech-Cards"><img src={JavaScript} alt="" /></div>
        <div className="tech-Cards"><img src={mongoDB} alt="" /></div>
        <div className="tech-Cards"><img src={nodejs} alt="" /></div>
        <div className="tech-Cards"><img src={react} alt="" /></div>
        <div className="tech-Cards"><img src={git} alt="" /></div>
    </div>
  </div>
  )
};

export default Logos;
