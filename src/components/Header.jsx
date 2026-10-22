
import { Link } from "react-router-dom";
import cscLogo from "./assets/csclogo.jpeg";

function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/">
        <img
          src={cscLogo}
          alt="CSC Logo"
          className="csc-logo"
        />

        <div>
          <h2>KMR Village Services</h2>
          <p>Machanpalli Digital Help Centre</p>
        </div>
      </Link>

      <nav>
        <Link to="/">Home</Link>
    <Link to="/about">About</Link>
        <Link to="/students">Students</Link>
        <a href="/#services">Services</a>
        <a href="/#updates">Updates</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
