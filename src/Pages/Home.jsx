import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <main id="background">
      <div className="portfolio_wrapper">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
