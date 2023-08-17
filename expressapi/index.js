import express from 'express';
import { v4 as uuid4 } from 'uuid';
import cors from 'cors';

import contactsRoutes from './routes/contacts.js';
import authRoutes from './routes/auth.js';
import errorHandler from './middleware/errorHandler.js';
import env from './config/env.js';
import passport from 'passport';
import './config/passport-config.js';  



const app = express();


app.use(passport.initialize());

app.use(express.json());
app.use(cors());

app.use('/api/contacts', contactsRoutes);
app.use('/api', authRoutes);
app.use(errorHandler);



app.get('/', (req, res) => {
    res.send(`API running`);
}
);

app.get('/uuid', (req, res) => {
    res.json({UUID:uuid4()});
});


app.listen(env.PORT, () => {
    console.log(`Server started on port ${env.PORT}`);
}
);