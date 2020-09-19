import React from "react";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const linkStyle = {
    color: "white",
  };

  return (
    <div>
      <nav
        className="navbar navbar-dark d-md-none"
        style={{
          backgroundColor: "black",
          fontSize: "1.3rem",
          position: "fixed",
          bottom: "-2px",
          right: "0px",
          left: "0px",
        }}
      >
        <ul className="nav m-auto py-2" style={{ color: "white" }}>
          <Link to="/truefalse">
            <li className="nav-item active" style={linkStyle}>
              T✅ F❌
            </li>
          </Link>
          <Link to="/">
            <li className="nav-item active mx-3" style={linkStyle}>
              Home🏠
            </li>
          </Link>
          <Link to="/quiz">
            <li className="nav-item active" style={linkStyle}>
              Quiz🎈
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;
