import jwt from 'jsonwebtoken';

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

