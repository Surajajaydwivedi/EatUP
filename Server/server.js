const express = require("express");
const PORT = 5000;
const cors = require("cors");
const app = express();
var server = require("http").createServer(app);

server.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

const mongoose = require("mongoose");
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");
mongoose.connect(
  "mongodb://eatup:eatupeatup@minor-shard-00-00.1y8bd.mongodb.net:27017,minor-shard-00-01.1y8bd.mongodb.net:27017,minor-shard-00-02.1y8bd.mongodb.net:27017/eatupdb?ssl=true&replicaSet=atlas-qu1lg5-shard-0&authSource=admin&retryWrites=true&w=majority"
);

const random = (length = 9) => {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let tempstr = "";
  for (let i = 0; i < length; i++) {
    tempstr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  var str = "";
  for (let i = 0; i < tempstr.length; i++) {
    str += tempstr[i];
    if ((i + 1) % 3 === 0 && i != tempstr.length - 1) {
      str += "-";
    }
  }
  return str;
};

var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

app.post("/check", async function (req, res) {
  var obj = req.body;

  var xx = await db
    .collection("Store Credentials")
    .find({ email: obj.email })
    .count();
  if (xx > 0) {
    res.json({
      ans: false,
    });
  } else {
    res.json({
      ans: true,
    });
  }
});

app.post("/signup", async function (req, res) {
  var obj = req.body;
  insert(obj);
});

function insert(data) {
  var data1 = {
    key: data.key,
    name: data.name,
    phno: data.phno,
    logo: data.logo,
    items: data.items,
  };
  var data2 = {
    key: data.key,
    email: data.email,
    password: data.password,
  };
  var data3 = {
    key: data.key,
    email: data.email,
    password: data.password,
    name: data.name,
    phno: data.phno,
    address: data.address,
    city: data.city,
    logo: data.logo,
    items: data.items,
  };
  var data4 = {
    key: data.key,
    name: data.name,
    city: data.city,
  };

  db.collection("Store Credentials").insertOne(data2);
  db.collection("UserMenu").insertOne(data1);
  db.collection("Admin").insertOne(data3);
  db.collection("Landing").insertOne(data4);
}

/*"mongodb://eatup:eatupeatup@minor-shard-00-00.1y8bd.mongodb.net:27017,minor-shard-00-01.1y8bd.mongodb.net:27017,minor-shard-00-02.1y8bd.mongodb.net:27017/eatupdb?ssl=true&replicaSet=atlas-qu1lg5-shard-0&authSource=admin&retryWrites=true&w=majority"
 */
