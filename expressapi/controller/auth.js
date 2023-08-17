import User from "../model/user.js";

const registerUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json({ message: `User registered successfully with id ${result._id}` });
    } catch (err) {
        if (err.name === 'ValidationError') {
            if (err.errors.email) {
                res.status(400).json({ message: "Validation error", details: err.errors.email.message });
            } else if (err.errors.phone) {
                res.status(400).json({ message: "Validation error", details: err.errors.phone.message });
            } else {
                res.status(400).json({ message: "Validation error", details: err.errors });
            }
        } else {
            throw err;
        }

    }
}

const loginUser = async (req, res) => {
    // console.log("Login : "+req.body);
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({ message: `Account not found for ${email}` });
            return;
        }
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            res.status(403).json({ message: "Invalid password" });
            return;
        }
        const token = await user.generateToken();

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }

}

export default {
    registerUser,
    loginUser
}