import "./Navbar.css";
import { Home, AccountCircle, BusinessCenter, Call } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="navbar">
        <h2 className="navbar-header">Lexenberg</h2>
        <div>
          <ul className="navbar_links">
            <li className="navbar-link">
              <Home />
              Home
            </li>
            <li className="navbar-link">
              <AccountCircle />
              About
            </li>
            <li className="navbar-link">
              <BusinessCenter />
              Projects
            </li>
            <li className="navbar-link">
              <Call />
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;