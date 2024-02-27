import { useState, useEffect, useRef } from "react";
import { Menu, Close } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const [isToggled, setIsToggled] = useState(false);

  const toggleElement = () => {
    setIsToggled(!isToggled);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbar-header">
      <div className="item-width">
        <h3 id="logo">Lexenberg</h3>
        <nav ref={navRef}>
          <a onClick={toggleElement} href="">
            Home
          </a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
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
