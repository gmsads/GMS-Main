import express from 'express';
import {
  getBlogs,
  getMyBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from './blog.controller.js';
import { protect } from '../auth/auth.middleware.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/my-blogs', protect, getMyBlogs);
router.get('/:idOrSlug', getBlogById);

router.post('/', protect, createBlog);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

export default router;
