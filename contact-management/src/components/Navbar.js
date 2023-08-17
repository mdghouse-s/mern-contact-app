//  create React component for Navbar for Contact App with links for Add Contact, Home and List Contacts

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';



const Navbar = () => {
  const { isAuthenticated, setAuth } = useAuth();
  const navigate = useNavigate();
 
  const handleLogout = () => {
    console.log("LOGOUT WORKING");
    localStorage.removeItem('token');
    setAuth(false);
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">Contact Management</Link>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            {isAuthenticated&& <li className="nav-item"><Link to="/contacts/add" className="nav-link">Add Contact</Link></li>}
            {isAuthenticated && <li className="nav-item"><Link to="/contacts" className="nav-link">List Contacts</Link></li>}
            {isAuthenticated ? <li className="nav-item"><button className="nav-link" onClick={handleLogout}>logout</button>  </li>
              : <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;