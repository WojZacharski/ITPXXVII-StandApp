const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({path: path.resolve(__dirname, "../../.env")});
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRoutes);
app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
  } else {
    next();
  }
});

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
