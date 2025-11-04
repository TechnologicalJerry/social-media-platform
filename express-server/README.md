# Express Server - Social Media Platform Backend

Express.js + TypeScript backend server for the Social Media Platform with MongoDB, featuring authentication and user management APIs.

## Features

- ✅ User Registration (Signup)
- ✅ User Login
- ✅ JWT Authentication
- ✅ Forgot Password
- ✅ Reset Password
- ✅ User CRUD Operations
- ✅ Password Hashing with bcrypt
- ✅ Input Validation
- ✅ Email Service Integration

## Tech Stack

- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **nodemailer** - Email service

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (copy from `.env.example`):
```env
PORT=4000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/social-media-platform
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@socialmediaplatform.com
FRONTEND_URL=http://localhost:3000
```

3. Make sure MongoDB is running on your system.

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

The server will start on `http://localhost:4000` (or the PORT specified in your .env file).

## API Endpoints

### Authentication Routes (`/api/auth`)

#### Register User
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "token": "jwt-token-here",
    "user": {
      "id": "user-id",
      "username": "johndoe",
      "email": "john@example.com",
      "firstName": "John",
      "lastName": "Doe"
    }
  }
}
```

#### Login
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
- **GET** `/api/auth/me`
- **Headers:** `Authorization: Bearer <token>`

#### Forgot Password
- **POST** `/api/auth/forgotpassword`
- **Body:**
```json
{
  "email": "john@example.com"
}
```

#### Reset Password
- **PUT** `/api/auth/resetpassword/:resettoken`
- **Body:**
```json
{
  "password": "newpassword123"
}
```

### User Routes (`/api/users`)

All user routes require authentication (include `Authorization: Bearer <token>` header).

#### Get All Users
- **GET** `/api/users?page=1&limit=10`

#### Get User by ID
- **GET** `/api/users/:id`

#### Get Current User Profile
- **GET** `/api/users/me`

#### Update User
- **PUT** `/api/users/:id`
- **Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Software developer",
  "avatar": "https://example.com/avatar.jpg"
}
```

#### Delete User
- **DELETE** `/api/users/:id`

## Project Structure

```
express-server/
├── src/
│   ├── config/
│   │   └── database.ts          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.ts    # Authentication logic
│   │   └── userController.ts    # User CRUD logic
│   ├── middleware/
│   │   ├── auth.ts              # JWT authentication middleware
│   │   └── errorHandler.ts      # Error handling middleware
│   ├── models/
│   │   └── User.ts              # User Mongoose model
│   ├── routes/
│   │   ├── authRoutes.ts        # Authentication routes
│   │   └── userRoutes.ts        # User routes
│   ├── utils/
│   │   ├── generateToken.ts     # JWT token generation
│   │   ├── generateResetToken.ts # Password reset token
│   │   └── sendEmail.ts         # Email service
│   ├── app.ts                   # Express app setup
│   └── server.ts                # Server entry point
├── .env.example                 # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. After logging in or registering, you'll receive a token that should be included in the `Authorization` header for protected routes:

```
Authorization: Bearer <your-token-here>
```

## Password Reset Flow

1. User requests password reset via `/api/auth/forgotpassword`
2. System generates a reset token and sends it via email
3. User clicks the link in email (contains reset token)
4. Frontend calls `/api/auth/resetpassword/:resettoken` with new password
5. Password is reset and user receives new JWT token

## Error Handling

All errors follow a consistent format:
```json
{
  "success": false,
  "message": "Error message here",
  "errors": [] // Optional validation errors
}
```

## Validation

Input validation is handled using `express-validator`. Invalid inputs will return:
```json
{
  "success": false,
  "errors": [
    {
      "msg": "Error message",
      "param": "fieldName",
      "location": "body"
    }
  ]
}
```

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens for secure authentication
- Password reset tokens expire after 10 minutes
- Input validation and sanitization
- CORS enabled for cross-origin requests

## Testing

Run tests (when implemented):
```bash
npm test
```

## License

ISC

