import mongoose from 'mongoose';
import Blog from './blog.model.js';

const createSlug = (title) => {
  return (
    title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '') +
    '-' +
    Date.now()
  );
};

const checkDBConnection = (res) => {
  if (mongoose.connection.readyState !== 1) {
    res.status(503).json({
      message: 'MongoDB Atlas Connection Error: Your IP address is not whitelisted. Please add 0.0.0.0/0 in MongoDB Atlas -> Network Access.',
    });
    return false;
  }
  return true;
};

export const getBlogs = async (req, res) => {
  if (!checkDBConnection(res)) return;

  try {
    const { category, search } = req.query;
    let query = { published: true };

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
      ];
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    res.json(blogs || []);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: error.message || 'Error loading blog posts' });
  }
};

export const getMyBlogs = async (req, res) => {
  if (!checkDBConnection(res)) return;

  try {
    let query = {};
    if (req.user.role !== 'admin') {
      query.author = req.user._id;
    }
    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    res.json(blogs || []);
  } catch (error) {
    console.error('Error fetching my-blogs:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  if (!checkDBConnection(res)) return;

  try {
    const { idOrSlug } = req.params;
    let blog;

    if (idOrSlug.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(idOrSlug);
    } else {
      blog = await Blog.findOne({ slug: idOrSlug });
    }

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.json(blog);
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  if (!checkDBConnection(res)) return;

  const { title, content, excerpt, coverImage, category, published } = req.body;

  try {
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const slug = createSlug(title);

    const blog = await Blog.create({
      title,
      slug,
      content,
      excerpt: excerpt || title.substring(0, 150) + '...',
      coverImage: coverImage || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80',
      category: category || 'Branding & Marketing',
      author: req.user._id,
      authorName: req.user.name,
      published: published !== undefined ? published : true,
    });

    res.status(201).json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  if (!checkDBConnection(res)) return;

  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    if (blog.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to edit this blog post' });
    }

    const { title, content, excerpt, coverImage, category, published } = req.body;

    if (title) blog.title = title;
    if (content) blog.content = content;
    if (excerpt) blog.excerpt = excerpt;
    if (coverImage) blog.coverImage = coverImage;
    if (category) blog.category = category;
    if (published !== undefined) blog.published = published;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  if (!checkDBConnection(res)) return;

  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    if (blog.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this blog post' });
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: error.message });
  }
};
