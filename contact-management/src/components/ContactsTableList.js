import { Link } from 'react-router-dom';
const ContactsTableList = ({ contacts, deleteContact }) => {
    return (
        <div className="container">
            <h2>Contact List</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.category}</td>
                            <td>
                                {/* provide linksto view delete and add with apacing in between */}
                                         <div className='d-flex justify-content-evenly'>
                                <Link className="mr-2 text-success" to={`/contacts/${contact._id}`}><i className="bi bi-binoculars-fill"></i></Link>
                                <Link className="mr-2" to={`/contacts/edit/${contact._id}`}><i className="bi bi-pen-fill"></i></Link>
                                <Link className="text-danger" onClick={() => deleteContact(contact._id)}><i className="bi bi-archive-fill"></i></Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ContactsTableList;