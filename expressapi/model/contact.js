import mongoose from '../config/contacts.js';
// phone should be of 10 digits
// category should be one of the following: "home", "work", "other"

const contactSchema = new mongoose.Schema({
    id: Number,
    userId: { type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'Email is invalid'],
        required: [true, 'User email required'],

    },
    phone: {
        type: Number,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    category: {
        type: String,
        enum: ["home", "work", "other"]
    }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;