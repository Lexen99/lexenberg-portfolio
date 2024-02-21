import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="navbar">
        <h3 className="navbar-header"><span id="dot"></span>Lexenberg</h3>
        <div>
          <ul className="navbar_links">
            <li className="navbar-link">Home</li>
            <li className="navbar-link">
              <span>01.</span>
              About
            </li>
            <li className="navbar-link">
              <span>02.</span>
              Projects
            </li>
            <li className="navbar-link">
              <span>03.</span>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
