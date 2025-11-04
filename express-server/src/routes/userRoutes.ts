import express from 'express';
import {
  body,
  ValidationChain,
} from 'express-validator';
import {
  getAllUsers,
  getUserById,
  getCurrentUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';
import { protect } from '../middleware/auth';

const router = express.Router();

// Validation rules
const updateUserValidation: ValidationChain[] = [
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
  body('bio')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Bio cannot exceed 500 characters'),
  body('avatar').optional().isURL().withMessage('Avatar must be a valid URL'),
];

// All routes are protected
router.use(protect);

// Routes
router.get('/', getAllUsers);
router.get('/me', getCurrentUser);
router.get('/:id', getUserById);
router.put('/:id', updateUserValidation, updateUser);
router.delete('/:id', deleteUser);

export default router;

