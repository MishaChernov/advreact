import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from './../../redux/reducers/auth';

import "./header.scss";

const Header = (props) => {
  const { userEmail, signOut } = props;

  console.log(userEmail);
  

  return(
    <header className="header">
      <nav className="navigation">
        <NavLink to="/" exact activeClassName="navigation__link--active" className="navigation__link">Home</NavLink>
      </nav>

      <nav className="consumer">
        <NavLink to="/login" activeClassName="consumer__link--active" className="consumer__link">Login</NavLink>
        <NavLink to="/register" activeClassName="consumer__link--active" className="consumer__link">Register</NavLink>    
      </nav>
      <button onClick={signOut}>Sign Out</button>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    userEmail: state.auth.user
  }
}

export default connect(mapStateToProps, {signOut})(Header);