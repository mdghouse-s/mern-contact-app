import Contact from "../model/contact.js";

async function createContact(contactData) {
    console.log("Inside createContact" + JSON.stringify(contactData));
    const newContacts = new Contact(contactData);
   return  await newContacts.save();
}

async function getContacts(userId) {
    return await Contact.find({userId: userId});
}

// Get a contact by id
async function getContactById(id) {
    return await Contact.findById(id);
}

// Get a contact which has a particular category
async function getContactByCategory(category, userId) {
    return await Contact.find({category: category, userId: userId});
}

// Get a contact which has a matching character in the name
async function getContactByName(name) {
    return await Contact.find({name: {$regex: name, $options: 'i'}, userId: userId});
}   

// Update a contact
async function updateContact(id, contactData) {
    return await Contact.findByIdAndUpdate(id, contactData, {new: true});
}

// Delete a contact
async function deleteContact(id) {
    return await Contact.findByIdAndDelete(id);
}

export default {
    createContact,
    getContacts,
    getContactById,
    getContactByCategory,
    getContactByName,
    updateContact,
    deleteContact
}; 