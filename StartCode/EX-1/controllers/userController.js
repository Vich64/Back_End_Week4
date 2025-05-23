import {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} from '../models/userModel.js';

export const getAllUsers = (req, res) => {
    res.json(getUsers());
};

export const getUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = getUserById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = addUser({ name, email });
    res.status(201).json(newUser);
};

export const updateUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const updated = updateUser(userId, req.body);
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
};

export const deleteUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const deleted = deleteUser(userId);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
};
