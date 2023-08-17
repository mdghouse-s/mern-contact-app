
import contactService from '../service/contactService.js';

// route   GET api/contacts
 const getAllContacts = async (req, res) => {
    const contacts = await contactService.getContacts(req.user._id);
    res.json(contacts);
};

// route  Get contact for a category

const getContactsByCategory =  async (req, res) => {
    const contacts = await contactService.getContactByCategory(req.params.category, req.user._id);
    if (contacts.length === 0) {
        res.status(404).json({ error: 'Contacts not found for the specified category' });
    } else {
        res.json(contacts);
    }
}


// route GET contacts by matching name
const getContactsByName =  async (req, res) => {
    const contacts = await contactService.getContactByName(req.params.name, req.user._id);
    res.json(contacts);
}

// route  GET api/contacts/:id
const getContactById =  async (req, res) => {
    
    const contact = await contactService.getContactById(req.params.id, req.user._id);
    if(!contact) {
        res.status(404).json({ message: "Contact not found" });
    }  
    res.json(contact);
}

// route  POST api/contacts
const createNewContact = async (req, res) => {
    const contact = req.body;
    contact.userId = req.user._id;
    try {
        const contact = await contactService.createContact(req.body);
        res.status(201).json(contact);
    } catch (err) {
        if (err.name === 'ValidationError') {
            if(err.errors.email){
                res.status(400).json({ message: "Validation error", details: err.errors.email.message });
            }else if(err.errors.phone){
                res.status(400).json({ message: "Validation error", details: err.errors.phone.message });
            }else{
                res.status(400).json({ message: "Validation error", details: err.errors });
            }
        }else{
            throw err;
        }
    
    }
}

// route  PUT api/contacts/:id
const updateContact =  async (req, res) => {
    const contact = await contactService.updateContact(req.params.id, req.body);
    res.json(contact);
}

// route  DELETE api/contacts/:id
const deleteContact =  async (req, res) => {
    const contact = await contactService.deleteContact(req.params.id);
    res.json(contact);
}


export default {
    getAllContacts,
    getContactsByCategory,
    getContactsByName,
    getContactById,
    createNewContact,
    updateContact,
    deleteContact
};