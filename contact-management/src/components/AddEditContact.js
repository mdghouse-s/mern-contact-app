// create a AddContact component for adding a new contact using Bootstrap form with validation and rest endpoint 
// http://localhost:3005/contacts . do not use useHiosory hook for redirecting to ListContacts component after adding a new contact.

import React, { useEffect, useState } from 'react';
import axios from '../interceptors/axiosInterceptor';
import { useNavigate, useParams } from 'react-router-dom';


const AddEditContact = ({ match }) => {

    const contactId = useParams()?.id;

    const isEdit = contactId ? true : false;

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        category: ""
    });

    const [error, setError] = useState({});


    const { name, email, phone, category } = contact;

    const API_URL = `${process.env.REACT_APP_API_URL}/api/contacts`;

    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit) {
            loadContact();
        }

    }, [isEdit]);

    const loadContact = async () => {
        const result = await axios.get(`${API_URL}/${contactId}`);
        setContact(result.data);
    }

    const onInputChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
        console.log(JSON.stringify(contact));
    };

    const onSubmit = async e => {
        e.preventDefault();
        const invalidContact = validateContact(contact);
        console.log(JSON.stringify(invalidContact));

        if (Object.keys(invalidContact).length > 0) {
            setError(invalidContact);
            return;
        }
        if (isEdit) {
            await axios.put(`${API_URL}/${contactId}`, contact);
        } else {
            await axios.post(API_URL, contact);
        }
        navigate("/contacts");


    };

    const validateContact = (contact) => {
        let error = {};
        if (!contact.name) {
            error.name = "Name is required";
        }
        if (!contact.email) {
            error.email = "Email is required";
        }
        if (!contact.phone || !validatePhone(contact.phone)) {
            error.phone = "Phone is required and should be 10 digits";
        }
        if (!contact.category) {
            error.category = "Category is required";
        }
        return error;
    }

    const validatePhone = (phone) => {
        const re = /^\d{10}$/;
        return re.test(phone);
    };

    return (
        <div className="container mt-5">
            <div className="w-50 mx-auto shadow p-5">
                <h5 className="text-center mb-4 text-primary">Contact Details</h5>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control form-control"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                            {error.name && <div className="text-danger">{error.name}</div>}
                        </div>

                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control form-control"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                            {error.email && <div className="text-danger">{error.email}</div>}
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control form-control"
                                placeholder="Phone"
                                name="phone"
                                value={phone}
                                onChange={e => onInputChange(e)}
                            />
                            {error.phone && <div className="text-danger">{error.phone}</div>}

                        </div>

                        {/* category should be a dropdown with values home, work and other */}

                        <div className="mb-3">
                            <select
                                className="form-control form-control"
                                name="category"
                                value={category}
                                onChange={e => onInputChange(e)}
                            >
                                <option value="">Select Category</option>
                                <option value="home">Home</option>
                                <option value="work">Work</option>
                                <option value="other">Other</option>
                            </select>
                            {error.category && <div className="text-danger">{error.category}</div>}
                        </div>



                    </div>

                    <button className="btn btn-primary btn-block"> {isEdit ? "Save Contact" : "Add Contact"} </button>
                </form>
            </div>
        </div>
    );
}

export default AddEditContact;