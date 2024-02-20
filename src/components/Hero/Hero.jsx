import './Hero.css'

const Hero = () => {
    return ( 
        <div className="hero">
            <div className='introduction'>
                <h3 className='intro_hero_name'>Hi, my name is</h3>
                <h1 className='hero_name'>Oliver</h1>
                <h2 className='profession'>Junior Web-Developer</h2>
                <p className='intro_paragraph'>Residing in Stockholm, I specialize in harnessing the power of the MERN stack to develop exceptional web solutions. With a keen eye for detail and a passion for crafting perfection, I approach each project with enthusiasm and dedication. Whether it's building sleek interfaces or optimizing performance, I strive to deliver top-notch results that exceed expectations. I'm committed to ongoing growth and eagerly look forward to expanding my skills and expertise in the dynamic field of web development.</p>
                <a href="" className='project_button_link'>
                    <button className='project_button'>Projekt</button>
                </a>
            </div>
        </div>
    );
}
 
export default Hero;