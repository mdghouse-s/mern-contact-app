import express from 'express';
import authController from '../controller/auth.js';

const router = express.Router();

// create routes using auth methods
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

export default router;