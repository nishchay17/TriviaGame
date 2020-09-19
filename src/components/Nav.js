import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const linkStyle = {
    color: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark p-3 ml-auto text-center"
        style={{ backgroundColor: "black", fontSize: "1.4rem" }}
      >
        <a className="navbar-brand d-md-none" href="#">
          🔥Trivia Game🔥
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <span className="nav-link d-none d-lg-block" href="/">
                🔥Trivia Game🔥 <span className="sr-only">(current)</span>
              </span>
            </li>
            <Link to="/">
              <li className="nav-item active mt-2" style={linkStyle}>
                Home🏠
              </li>
            </Link>
            <Link to="/truefalse">
              <li className="nav-item active mt-2" style={linkStyle}>
                True✅ / False❌
              </li>
            </Link>
            <Link to="/quiz">
              <li className="nav-item active mt-2" style={linkStyle}>
                Quiz🎈
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
