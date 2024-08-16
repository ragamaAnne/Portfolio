import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';


const Header = () =>   {

  return (
    <header>
      <nav id='navbar'>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active" id='nav-button'>
              Home
            </NavLink>
          </li>
          <li>
            
              <button id="nav-button">About</button>
           
          </li>
          <li>
            <NavLink to="/Contact" activeClassName="active" id='nav-button'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

