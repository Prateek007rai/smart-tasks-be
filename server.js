require("dotenv").config();
const connectDB = require("./config/dbConnect");
const express = require("express");
const cors = require("cors");
const PORT = 8000;

const app = express();
const routes = require('./routes');


app.use(cors());
app.use(express.json());

app.use("/", routes);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});