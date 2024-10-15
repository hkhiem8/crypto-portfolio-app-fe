import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, handleSignout }) => {
  return (
    <>
    <div className="nav">
      { user ? (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
            <li><Link to="/watchlists">Watchlists</Link></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      )}
      </div>
    </>
  )
}

export default NavBar;