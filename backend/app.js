const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const postsRoute = require("./routes/posts");
require("dotenv/config");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/posts", postsRoute);

mongoose
  .connect(process.env.DB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }).then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

app.listen(4000, () => console.log("server started"));
