import express from 'express';
import {
    getAllUsers,
    getUser,
    createUser,
    updateUserById,
    deleteUserById
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;
