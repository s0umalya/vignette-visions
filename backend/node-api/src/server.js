import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});