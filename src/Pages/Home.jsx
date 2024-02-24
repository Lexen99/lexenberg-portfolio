import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/TimeLine";
import About from "../components/About/About";
import "./Home.css";

const Home = () => {
  return (
    <main id="background">
      <div className="portfolio_wrapper">
        <Navbar />
        <Hero />
        <hr className="section-divider" />
        <Timeline/>
        <hr className="section-divider" />
        <About />
      </div>
    </main>
  );
};

export default Home;
