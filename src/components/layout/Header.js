import React from 'react';
import PropTypes from 'prop-types';



const Header = props => {

  const { branding } = props;

  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container my-2">
      <a href="/" className="navbar-brand"><i className="fab fa-react fa-lg"></i> {branding}</a>

      <button className="navbar-toggler my-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link"><i className="fas fa-home"></i> HOME</a>
          </li>
        </ul>
        
      </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
