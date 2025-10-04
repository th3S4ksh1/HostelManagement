const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import student routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/hostelDB')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Test route
app.get('/', (req, res) => {
  res.send("Hello from Backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
