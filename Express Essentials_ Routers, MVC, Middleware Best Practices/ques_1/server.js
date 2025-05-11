const express = require('express');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use('/tickets', ticketRoutes);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Ticketing system listening at http://localhost:${port}`);
});
