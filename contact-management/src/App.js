import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactList from './components/ContactList';
import Navbar from './components/Navbar';
import AddEditContact from './components/AddEditContact';
import ViewContact from './components/ViewContact';
import Register from './components/Register';
import Login from './components/Login';
import { useAuth } from './providers/AuthProvider';

import PrivateRoute from './components/PrivateRoute';


function App() {

  const { isAuthenticated } = useAuth();
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts/add"
          element={<PrivateRoute element={<AddEditContact />} isAuthenticated={isAuthenticated} />} />
        <Route path="/contacts/:id"
          element={<PrivateRoute element={<ViewContact />} isAuthenticated={isAuthenticated} />} />
        <Route path="/contacts"
          element={<PrivateRoute element={<ContactList />} isAuthenticated={isAuthenticated} />} />
        <Route path="/contacts/edit/:id"
          element={<PrivateRoute element={<AddEditContact />} isAuthenticated={isAuthenticated} />} />

      </Routes>


    </>
  );
}

export default App;
