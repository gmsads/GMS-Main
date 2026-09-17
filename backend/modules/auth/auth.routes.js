import express from 'express';
import { loginUser, getMe } from './auth.controller.js';
import { protect } from './auth.middleware.js';

const router = express.Router();

router.post('/login', loginUser);
router.get('/me', protect, getMe);

export default router;
