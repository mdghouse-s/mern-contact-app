import {Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };

export default PrivateRoute;