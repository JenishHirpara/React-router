import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color:'white'
    };
    return(
      <nav>
          <ul className="nav-links">
            <Link style={navStyle} to="/">
              <li className="size">Home</li>
            </Link>
            <Link style={navStyle} to="/about">
              <li className="size">About</li>
            </Link>
            <Link style={navStyle} to="/contact">
              <li className="size">Contact</li>
            </Link>
          </ul>
      </nav>
    );
};

export default Nav;
