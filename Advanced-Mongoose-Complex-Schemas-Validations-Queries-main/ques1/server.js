const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use('/', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(8000, () => console.log('Server running on port 8000'));
})
.catch(err => console.error(err));
