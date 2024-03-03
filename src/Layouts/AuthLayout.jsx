import React from "react";
import logo from "../Assets/images/freshcart-logo.svg";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            <img src={logo} alt="" />
          </NavLink>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link  position-relative" to="/signin">
                  Signin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  position-relative" to="/signup">
                  Signup
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <Link to={'https://www.facebook.com/Mohamed.Kamel98.official/'}><i className="fab fa-facebook me-2"></i></Link>
                <i className="fab fa-twitter me-2"></i>
                <i className="fab fa-instagram me-2"></i>
                <i className="fab fa-youtube me-2"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
