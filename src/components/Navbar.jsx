import { useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "./dog-fetching.svg";
function Navbar(props) {
  
  function handleClick() {
     
    console.log(this.innerHTML);
  }

  return (
    <div className="sticky-top">
      <div className="colorbar"></div>
      <nav className="navbar navbar-expand-lg" id="nav">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <div className="active-bar"></div>
            <img className="icondog" src={icon} />
            NEWS FETCH
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
              <li className="nav-item ms-3">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={handleClick}
                >
                  General
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/business"
                  onClick={handleClick}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/entertainment"
                  onClick={handleClick}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/health"
                  onClick={handleClick}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/science"
                  onClick={handleClick}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/sports"
                  onClick={handleClick}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/technology"
                  onClick={handleClick}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
