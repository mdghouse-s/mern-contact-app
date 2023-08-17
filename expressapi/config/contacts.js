import mongoose from "mongoose";

import env from './env.js';

mongoose.connect( env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    console.log("Connected successfully");
});

export default mongoose;
