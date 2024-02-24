import "./About.css"
import oliver from "../../assets/portrait2.png.jpg"

const About = () => {
    return ( 
        <section className="about">
            <h2 className="section-heading">01 About me</h2>
            <div className="about-container">
                <p>Based in Stockholm, I leverage the MERN stack to create dynamic web solutions. With a background in sports and carpentry, I bring a unique perspective to my work. Inspired by my discovery of Techover Bootcamp, I'm passionate about honing my skills and delivering exceptional results. Combining precision and enthusiasm, I approach each project with dedication, ensuring every detail is meticulously crafted for excellence.</p>
                <img id="portrait" src={oliver} alt="Oliver Lexenberg" />
            </div>
        </section>
    );
}
 
export default About;