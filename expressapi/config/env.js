const PORT = process.env.PORT || 3005;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/contacts';
const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export default {
    PORT,
    MONGO_URI,
    JWT_SECRET
};