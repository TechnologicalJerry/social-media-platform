# Social Media Platform

A full-stack social media platform built with multiple frontend and backend technologies, supporting various database systems. This project demonstrates a microservices architecture with interchangeable technology stacks.

## 🚀 Tech Stack

### Frontend
- **Angular** - Modern Angular framework with SSR support
- **React (Next.js)** - React-based frontend with Next.js for server-side rendering
- **Vue** - Progressive JavaScript framework

### Backend
- **Express.js** - Fast, unopinionated web framework for Node.js
- **Next.js** - Full-stack React framework with API routes
- **Spring Boot (Java)** - Enterprise-grade Java framework
- **Python** - Python-based backend (FastAPI/Django/Flask)

### Databases
- **MongoDB** - NoSQL document database
- **MySQL** - Relational database management system
- **PostgreSQL** - Advanced open-source relational database

## 📁 Project Structure

```
social-media-platform/
├── angular-client/          # Angular frontend application
│   ├── src/
│   │   ├── app/            # Angular components and modules
│   │   ├── main.ts         # Application entry point
│   │   └── styles.scss     # Global styles
│   └── package.json
├── react-client/           # React/Next.js frontend (to be created)
├── vue-client/             # Vue frontend (to be created)
├── express-server/         # Express.js + TypeScript backend with MongoDB
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Auth & error middleware
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   └── utils/         # Utility functions
│   └── package.json
├── backend-nextjs/         # Next.js API backend (to be created)
├── backend-spring/         # Spring Boot backend (to be created)
├── backend-python/         # Python backend (to be created)
├── database/
│   ├── mongodb/            # MongoDB schemas and migrations
│   ├── mysql/              # MySQL schemas and migrations
│   └── postgresql/         # PostgreSQL schemas and migrations
├── shared/                 # Shared types, utilities, and schemas
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v20 or higher)
- **npm** or **yarn**
- **Java** (JDK 21 or higher) - for Spring Boot
- **Python** (3.12 or higher) - for Python backend
- **MongoDB** (v6 or higher)
- **MySQL** (v8 or higher)
- **PostgreSQL** (v14 or higher)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/technologicaljerry/social-media-platform.git
cd social-media-platform
```

#### 2. Frontend Setup

##### Angular Client
```bash
cd angular-client
npm install
npm start
# Application will be available at http://localhost:4200
```

##### React/Next.js Client
```bash
cd react-client
npm install
npm run dev
# Application will be available at http://localhost:3000
```

##### Vue Client
```bash
cd vue-client
npm install
npm run dev
# Application will be available at http://localhost:5173
```

#### 3. Backend Setup

##### Express.js Backend
```bash
cd express-server
npm install
# Create .env file from .env.example
npm run dev
# API will be available at http://localhost:4000
```

##### Next.js Backend (API Routes)
```bash
cd backend-nextjs
npm install
npm run dev
# API will be available at http://localhost:3001
```

##### Spring Boot Backend
```bash
cd backend-spring
./mvnw spring-boot:run
# API will be available at http://localhost:8080
```

##### Python Backend
```bash
cd backend-python
pip install -r requirements.txt
python app.py
# API will be available at http://localhost:5000
```

#### 4. Database Setup

##### MongoDB
```bash
mongod
# MongoDB will be available at mongodb://localhost:27017
```

##### MySQL
```bash
mysql -u root -p
# Create database and run migrations from database/mysql/
```

##### PostgreSQL
```bash
psql -U postgres
# Create database and run migrations from database/postgresql/
```

## 🔧 Configuration

### Environment Variables

Create `.env` files in each backend directory:

**Express.js**
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

**Next.js**
```env
MONGODB_URI=mongodb://localhost:27017/social-media-platform
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=socialmedia
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=yourpassword
POSTGRES_DB=socialmedia
JWT_SECRET=your-secret-key
```

**Spring Boot**
```properties
# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/social_media_platform
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.data.mongodb.uri=mongodb://localhost:27017/social-media-platform
```

**Python**
```env
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/social_media_platform
MONGODB_URI=mongodb://localhost:27017/social-media-platform
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=socialmedia
```

## 🏗️ Architecture

This project follows a **modular architecture** where:
- Multiple frontend implementations can connect to any backend
- Backends are interchangeable and can use different databases
- Shared schemas and types ensure consistency across implementations
- API contracts are standardized for seamless switching

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/:id/follow` - Follow user
- `DELETE /api/users/:id/follow` - Unfollow user

## 🧪 Testing

### Frontend Testing
```bash
# Angular
cd angular-client
npm test

# React/Next.js
cd react-client
npm test

# Vue
cd vue-client
npm test
```

### Backend Testing
```bash
# Express.js
cd express-server
npm test

# Next.js
cd backend-nextjs
npm test

# Spring Boot
cd backend-spring
./mvnw test

# Python
cd backend-python
pytest
```

## 📦 Deployment

### Frontend Deployment
- Angular: Build with `ng build` and deploy to hosting service
- Next.js: Deploy to Vercel or similar platform
- Vue: Build with `npm run build` and deploy to static hosting

### Backend Deployment
- Express.js: Deploy to Node.js hosting (Heroku, Railway, etc.)
- Next.js: Deploy to Vercel
- Spring Boot: Deploy as JAR to cloud platforms (AWS, Azure, GCP)
- Python: Deploy to cloud platforms or containerized services

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- All the open-source communities that made these technologies possible
