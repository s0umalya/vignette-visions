import express from 'express';
import { body } from 'express-validator';

import {
  register,
  login,
  getCurrentUser
} from '../controllers/auth.controller.js';

import {
  authenticate
} from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

const registerValidation = [

  body('firstName')
    .notEmpty(),

  body('lastName')
    .notEmpty(),

  body('email')
    .isEmail(),

  body('password')
    .isLength({ min: 8 })

];

router.get(
  '/me',
  authenticate,
  getCurrentUser
);

router.post(
  '/register',
  registerValidation,
  register
);

export default router;