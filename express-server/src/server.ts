import app from './app';
import connectDB from './config/database';

const PORT = process.env.PORT || 4000;

// Connect to database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

