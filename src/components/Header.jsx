
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/">
        <img src="/csclogo.jpeg" alt="CSC logo" />
        <div>
          <h2>KMR Village Services</h2>
          <p>Machanpalli Digital Help Centre</p>
        </div>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <a href="/#about">About</a>
        <Link to="/students">Students</Link>
        <a href="/#services">Services</a>
        <a href="/#updates">Updates</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
