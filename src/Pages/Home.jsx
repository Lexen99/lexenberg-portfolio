import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import "./Home.css";

const Home = () => {
  return (
    <main id="background">
      <div className="portfolio_wrapper">
        <Navbar />
        <Hero />
        <hr className="section-divider" />
      </div>
    </main>
  );
};

export default Home;
