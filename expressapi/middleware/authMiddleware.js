import passport from "passport";

// const authMiddleware = passport.authenticate("jwt", { session: false });

const authMiddleware = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: "Unauthorized - Token missing or invalid" });
        }
        req.user = user;
        next();
    })(req, res, next);
}

export default authMiddleware;