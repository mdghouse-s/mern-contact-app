// create a Home component in contact-management\src\components\Home.js:

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const Home = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="container">
      <div className="py-4">

        <h1>Home Page</h1>
        {/* describe Features of Contact App to user*/}
        <p className="lead">Welcome to Contact App</p>
        <p className="lead">This is a simple Contact App</p>
        <p className="lead">Features:</p>
        <p className="lead">1. User can register and login</p>
        <p className="lead">2. User can add, edit and delete contacts</p> 
        <p className="lead">3. User can view contact details in Card and Tabular Format</p>

      </div>
      {/* Add Register and Login links*/}
      <div className="row">

      {isAuthenticated ||  <div className="col-md-2">
          <Link className="btn btn-primary" to="/register">Sign up</Link>
        </div>}

      </div>
    </div>

  );
}

export default Home;