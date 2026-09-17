import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import authRoutes from './modules/auth/auth.routes.js';
import adminRoutes from './modules/admin/admin.routes.js';
import blogRoutes from './modules/blog/blog.routes.js';
import { seedDefaultAdmin } from './modules/auth/auth.controller.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database & Seed Admin
connectDB().then(() => {
  seedDefaultAdmin();
});

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/blogs', blogRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'GMS Backend Server running smoothly' });
});

// Serve frontend static build files
const frontendDist = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendDist));

// Handle 404 for unhandled API requests
app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Catch-all SPA fallback route for direct page loads (/blog-login, /blog-write, /blog-admin, etc.)
app.use((req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('GMS Backend is active. Run "npm run build" to serve frontend production build.');
    }
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  if (!res.headersSent) {
    res.status(500).json({ message: err.message || 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`GMS Backend Server listening on port ${PORT}`);
});
