import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from '../config/env.js';



const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    name: { type: String },
    phone: { type: Number },
    city : { type: String }
});

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id, email: this.email }, env.JWT_SECRET, { expiresIn: "1d" });
}

const User = mongoose.model("User", userSchema, "authusers");

export default User;