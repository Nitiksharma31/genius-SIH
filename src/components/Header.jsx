import React from 'react';
import { NavLink } from "react-router-dom";
import Typical from "react-typical";



const Header = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-gray-800 navbar-light">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand ml-4"
              style={{ fontWeight: "bold", color: "white", fontSize: 20 }}
              to="/"
            >
              <Typical
                className="ml-4 text-white"
                style={{
                  color: "lightseagreen",
                  borderBottom: "2px solid lightsalmon",
                }}
                loop={Infinity}
                wrapper="b"
                steps={["Team Genius 💡", 4000]}
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav ml-auto mb-2 mb-lg-0"
                style={{ fontSize: 20 }}
              >
                <li className="nav-item mr-2">
                  <NavLink
                    exact
                    activeClassName="text-white bg-gray-900"
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "lightseagreen" }}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mr-2">
                  <NavLink
                    activeClassName="text-white bg-gray-900"
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "lightseagreen" }}
                    to="/idea"
                  >
                    Idea
                  </NavLink>
                </li>
                <li className="nav-item mr-2">
                  <NavLink
                    activeClassName="text-white bg-gray-900"
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "lightseagreen" }}
                    to="/teamDetails"
                  >
                    Team Details
                  </NavLink>
                </li>
                <li className="nav-item mr-2">
                  <NavLink
                    activeClassName="text-white bg-gray-900"
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "lightseagreen" }}
                    to="/journey"
                  >
                    Journey
                  </NavLink>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Header
