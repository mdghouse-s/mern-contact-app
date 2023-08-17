// React Component to list the contacts. Each Contact should be displayed in a Card with a Delete and Edit button. Use Button icons from Bootstrap.
// Use axios to get data from server endpoint http://localhost:3005/contacts 

import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axios from '../interceptors/axiosInterceptor';
import { Link } from 'react-router-dom';
import ContactsCardList from './ContactsCardList';
import ContactsTableList from './ContactsTableList';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [displayMode, setDisplayMode] = useState("card");
    const [category, setCategory] = useState("All");

    const API_URL = `${process.env.REACT_APP_API_URL}/api/contacts`;

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        // const result = await axios.get(API_URL, {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`
        //     }
        // });
        const result = await axios.get(API_URL);
        setContacts(result.data.reverse());
    };

    const deleteContact = async id => {
        console.log(id);
        await axios.delete(`${API_URL}/${id}`
            , {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        );
        loadContacts();
    };

    const changeDisplayMode = mode => {
        setDisplayMode(mode);
    };

    const changeCategory = e => {
        setCategory(e.target.value);
    }

    const filteredContacts = category === "All" ?
        contacts : contacts.filter(contact => contact.category === category);

    return (
        <>
            <div className="container mb-5 mt-5">
                {contacts.length !== 0 && <div className="row">
                    <div className="col-md-3 text-primary display-5">Contact List</div>
                    {/* Add Biootstrap icon to change display mode */}
                    <div className="col-md-6 d-flex">
                        <div className="text-primary p-2" onClick={() => changeDisplayMode("card")}>
                            <i className="bi bi-credit-card-2-back"></i>
                        </div>
                        <div className="text-success p-2" onClick={() => changeDisplayMode("table")}>
                            <i className="bi bi-table"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <select className="form-select" onChange={changeCategory}>
                            <option value="All">All</option>
                            <option value="home">Home</option>
                            <option value="work">Work</option>
                            <option value="other">Others</option>
                        </select>
                    </div>

                </div>}
            </div>

            <div>
                {/* display start adding contact now when contacts are empty */}
                {filteredContacts.length === 0 ? (<div className="text-center text-primary text-uppercase font-weight-bold">Start adding contacts now</div>) : (<>
                    {displayMode === "card" ? (
                        <ContactsCardList contacts={filteredContacts} deleteContact={deleteContact} />
                    ) : (
                        <ContactsTableList contacts={filteredContacts} deleteContact={deleteContact} />
                    )}</>)}

            
            
            </div>

            <div className="container">
                <div className="col-md-3"></div>
            <div>
                    <Link className="btn btn-primary" to="/contacts/add">Add Contact</Link>
                </div>
            </div>

        </>


    );
}


export default ContactList;