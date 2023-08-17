import React, { useState, useEffect } from 'react';
import axios from '../interceptors/axiosInterceptor';
import { Link, useParams } from 'react-router-dom';

const ViewContact = () => {
  const contactId = useParams().id;
  const [contact, setContact] = useState(null);

  const API_URL = `${process.env.REACT_APP_API_URL}/api/contacts`;

  useEffect(() => {
    fetchContactDetails();
  }, []);

  const fetchContactDetails = async () => {
    try {
      const response = await axios.get(`${API_URL}/${contactId}`);
      setContact(response.data);
    } catch (error) {
      console.error('Error fetching contact details:', error);
    }
  };

  return (
    <div className="container">
      <h2>Contact Details</h2>
      {contact ? (
        <div className="row">
          <div className="col-md-6">
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Category: {contact.category}</p>
            <p>Address: {contact.address || 'No address available'}</p>
            <Link to={`/contacts/edit/${contact._id}`} className="btn btn-primary">
              Edit Contact
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&size=200`}
              alt="Contact Avatar"
              className="img-fluid"
            />
          </div>
        </div>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
};

export default ViewContact;
