var express = require("express");
var app = express();
var mongoose = require("mongoose");
var apiController = require("./controllers/apiController");

var port = 3000;

/* var { DATABASE_USERNAME, DATABASE_PASSWORD } = process.env; */

app.use("/assets", express.static(__dirname + "/public"));

// mongo instead of localhost for docker-compose
// `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@cluster-000.3uokz.mongodb.net/users?retryWrites=true&w=majority`,
mongoose.connect(
  "mongodb://localhost:27017/users",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log(err);
  },
);

apiController(app);

app.listen(port);
