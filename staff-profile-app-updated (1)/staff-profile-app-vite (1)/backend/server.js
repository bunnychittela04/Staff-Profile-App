const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const staffRoutes = require('./routes/staff');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/staff', staffRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  })
  .catch((err) => console.error('MongoDB error:', err));
