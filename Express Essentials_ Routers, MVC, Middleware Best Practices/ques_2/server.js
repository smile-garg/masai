const express = require('express');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/tickets', ticketRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
