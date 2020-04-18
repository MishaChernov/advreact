import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.scss";

const Header = (props) => {

  return(
    <header className="header">
      <nav className="navigation">
        <NavLink to="/" exact activeClassName="navigation__link--active" className="navigation__link">Home</NavLink>
      </nav>
      <nav className="consumer">
        <NavLink to="/login" activeClassName="consumer__link--active" className="consumer__link">Login</NavLink>
        <NavLink to="/register" activeClassName="consumer__link--active" className="consumer__link">Register</NavLink>    
      </nav>
    </header>
  )
}

export default Header;