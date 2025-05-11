const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');
const readerRoutes = require('./routes/readerRoutes');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

const app = express();
app.use(bodyParser.json());
app.use(loggerMiddleware); // Global middleware for logging requests

app.use('/admin', adminRoutes);
app.use('/reader', readerRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
