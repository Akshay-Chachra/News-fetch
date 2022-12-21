import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {

  // const [activePage , setActivePage] = useState("/")
  const activeTabs = () =>(
    window.location.pathname === "/sports" ? document.getElementsByClassName(".navbar").style.backgroundColor = "black" : null
    
  )
  return (
    
    <div className="sticky-top">
      <div className="colorbar"></div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <div className="active-bar"></div>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={activeTabs}>
                <Link className="nav-link" aria-current="page" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item" onClick={activeTabs}>
                <Link className="nav-link" aria-current="page" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item" onClick={activeTabs}>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item" onClick={activeTabs}>
                <Link className="nav-link" aria-current="page" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item" onClick={activeTabs}>
                <Link className="nav-link" aria-current="page" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item" onClick={activeTabs}>
                <Link className="nav-link" aria-current="page" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item" onclick={activeTabs}>
                <Link className="nav-link" aria-current="page" to="/technology">
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
