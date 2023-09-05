import React from "react";
import "../styles_s/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
      <div className="d-flex justify-content-center align-items-center">
          <a href="./home" className="navbar-brand">
            <img src="https://img.logoipsum.com/296.svg" className="nav-img" alt="logo" />
          </a>
        </div>
       
      </div>

    </nav>
    
  );
}

export default Navbar;
