const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./models/index.js");
const routes = require("./routes/index.js");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");

const app = express();
dotenv.config();
app.use("/upload", express.static("upload"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api", routes);

app.listen(8080, () => {
  console.log("server start");
});
