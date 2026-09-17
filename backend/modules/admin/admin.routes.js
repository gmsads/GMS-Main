import express from 'express';
import { createUser, getUsers, deleteUser } from './admin.controller.js';
import { protect, isAdmin } from '../auth/auth.middleware.js';

const router = express.Router();

router.use(protect, isAdmin);

router.post('/create-user', createUser);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);

export default router;
