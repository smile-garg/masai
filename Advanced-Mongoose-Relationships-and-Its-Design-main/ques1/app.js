const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
app.use(express.json());

app.use("/", require("./routes/userRoutes"));
app.use("/", require("./routes/profileRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
