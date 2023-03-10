import { Link } from "react-router-dom";
import icon from "./dog-fetching.svg";
import WorldClock from "./WorldClock";
function Navbar(props) {
  return (
    <div className="sticky-top mx-1">
      <div className="colorbar"></div>
      <nav
        className="navbar navbar-expand-lg shadow"
        id="nav"
        style={{ backgroundColor: props.color }}
      >
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
              <li className="nav-item mx-1">
                <Link className="nav-link" aria-current="page" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" aria-current="page" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" aria-current="page" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" aria-current="page" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" aria-current="page" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" aria-current="page" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <WorldClock/>
        </div>
        
      </nav>
    </div>
  );
}
export default Navbar;
