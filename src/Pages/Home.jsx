import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/Timeline";
import About from "../components/About/About";
import Logos from "../components/Logos/Logos";
import Projects from "../components/Projects/Projects";


const Home = () => {
  return (
    <main id="background">
      <Navbar />
      <div className="portfolio_wrapper">
        <Hero />
        <hr className="section-divider" />
        <Timeline />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Logos />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
      </div>
    </main>
  );
};

export default Home;
