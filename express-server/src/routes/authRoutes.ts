import express from 'express';
import {
  body,
  ValidationChain,
} from 'express-validator';
import {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
} from '../controllers/authController';
import { protect } from '../middleware/auth';

const router = express.Router();

// Validation rules
const registerValidation: ValidationChain[] = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('firstName')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('First name cannot exceed 50 characters'),
  body('lastName')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Last name cannot exceed 50 characters'),
];

const loginValidation: ValidationChain[] = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

const forgotPasswordValidation: ValidationChain[] = [
  body('email').isEmail().withMessage('Please provide a valid email'),
];

const resetPasswordValidation: ValidationChain[] = [
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];

// Routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotPasswordValidation, forgotPassword);
router.put('/resetpassword/:resettoken', resetPasswordValidation, resetPassword);

export default router;

