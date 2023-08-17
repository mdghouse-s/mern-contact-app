import express from 'express';
import contactController from '../controller/contact.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

// create routes using Controller methods
router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);
router.get('/category/:category', contactController.getContactsByCategory);
router.get('/name/:name', contactController.getContactsByName);
router.post('/', contactController.createNewContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

export default router;