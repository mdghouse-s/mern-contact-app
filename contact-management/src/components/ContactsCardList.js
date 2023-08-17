import { Link } from 'react-router-dom';
const ContactsCardList = ({ contacts, deleteContact }) => {
   return <div className="container">
            <div className="row">
                {contacts.map((contact, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                                <p className="card-text">{contact.phone}</p>
                                <p className="card-text">{contact.category}</p>

                            </div>
                            <div className="w-75 d-flex justify-content-end">
                                <Link  className="p-2" to={`/contacts/${contact._id}`}><i className="bi bi-binoculars-fill text-success"></i></Link>
                                <Link className="p-2" to={`/contacts/edit/${contact._id}`}><i className="bi bi-pen-fill"></i></Link>
                                <Link className="p-2" onClick={() => deleteContact(contact._id)}><i className="bi bi-archive-fill text-danger"></i></Link>
                            </div>

                        </div>
                    </div>
                ))}


            </div>

        </div>
}

export default ContactsCardList;