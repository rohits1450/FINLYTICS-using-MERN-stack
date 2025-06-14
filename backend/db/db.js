const mongoose = require('mongoose');

const db = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB Connected');
  } catch (error) {
    console.error('DB Connection Error:', error.message);
  }
};

module.exports = db;
//if new terminal opens then do cd backend abd do npm start
//cd "frontend\myapp"