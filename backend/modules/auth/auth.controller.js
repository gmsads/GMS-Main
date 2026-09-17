import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from '../admin/user.model.js';

const JWT_SECRET = process.env.JWT_SECRET || 'gms_secret_key_2026_super_safe';

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: '30d',
  });
};

export const seedDefaultAdmin = async () => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      await User.create({
        name: 'GMS Admin',
        email: 'admin@gmsads.in',
        password: 'Admin@123456',
        role: 'admin',
      });
      console.log('Default Admin user created: admin@gmsads.in / Admin@123456');
    }
  } catch (err) {
    console.error('Error seeding default admin:', err.message);
  }
};

export const loginUser = async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: 'Database Connection Error: Current IP address is not whitelisted in MongoDB Atlas. Please add 0.0.0.0/0 in Atlas Network Access.',
    });
  }

  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
