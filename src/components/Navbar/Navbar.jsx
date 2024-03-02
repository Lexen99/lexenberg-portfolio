import { useState, useEffect, useRef } from "react";
import { Menu, Close } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const [isToggled, setIsToggled] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar-header').offsetHeight;
    const offset = 30;
    if(section) {
      const offsetTop = section.offsetTop - navbarHeight - offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
      closeNavbar();
    }
  }

  return (
    <header className="navbar-header">
      <div className="item-width">
        <h3 id="logo">Lexenberg</h3>
        <nav ref={navRef}>
          <a onClick={(e) => scrollToSection('home', e)}  href="#">
            Home
          </a>
          <a onClick={(e) => scrollToSection('about', e)} href="#">About</a>
          <a onClick={(e) => scrollToSection('projects', e)} href="#">Projects</a>
          <a onClick={(e) => scrollToSection('contact', e)} href="#">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={closeNavbar}>
            <Close />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
