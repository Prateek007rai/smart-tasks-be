require("dotenv").config();
const connectDB = require("./config/dbConnect");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandling");
const PORT = 8000;

const app = express();
const routes = require('./routes');

const allowedOrigins = [
  "http://localhost:3000",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(express.json());

app.use("/api/v1", routes);
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});