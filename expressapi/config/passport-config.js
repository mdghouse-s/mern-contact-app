import passport from 'passport';
import passportJwt from 'passport-jwt';
import env from './env.js'
import User from '../model/user.js';


const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: env.JWT_SECRET
};

const strategy = new JwtStrategy(options, async (payload, done) => {

    try {
        const user = await User.findById(payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }

});

passport.use(strategy);

export default passport;

