import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container my-2">
        <a href="/" className="navbar-brand">
          <i className="fab fa-react fa-lg" /> {branding}
        </a>

        <button
          className="navbar-toggler my-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i class="fas fa-plus-square" /> ADD
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i class="fas fa-info-circle" /> ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
