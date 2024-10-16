import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({ user, handleSignout }) => {
  return (
    <>
      <div className="nav">
        {user ? (
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/watchlists/create">Create A Watchlist</Link></li>
              <li><Link to="/watchlists">My Watchlists</Link></li>
              <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
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