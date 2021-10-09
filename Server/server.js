const express = require("express");
const PORT = 5000;
const cors = require("cors");
const app = express();
var server = require("http").createServer(app);
var formidable = require("formidable");
var fs = require("fs");
var crypto = require("crypto");

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

app.post("/adminsignup", async function (req, res) {
  var obj = req.body;
  insert(obj);
});

function insert(data) {
  var data1 = {
    key: data.key,
    name: data.name,
    phno: data.phno,
    logo: data.logo,
    image: data.image,
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
    image: data.image,
  };
  var data4 = {
    key: data.key,
    name: data.name,
    city: data.city,
  };
  var dataitem = {
    key: data.key,
    itmes: data.items,
  };

  db.collection("Store Credentials").insertOne(data2);
  db.collection("UserMenu").insertOne(data1);
  db.collection("Admin").insertOne(data3);
  db.collection("Landing").insertOne(data4);
  db.collection("Items").insertOne(dataitem);
}

function currtime() {
  var d = new Date();
  var n = d.getTime();
  return n;
}

app.post("/adminsignin", async function (req, res) {
  var obj = req.body;
  var sess = crypto.randomBytes(16).toString("hex");
  sess = sess;

  var xx = await db
    .collection("Store Credentials")
    .findOne({ email: obj.email, password: obj.password });

  if (xx) {
    res.json({
      bool: true,
      session: sess,
      key: xx.key,
    });
  } else {
    res.json({
      bool: false,
      session: "",
      key: "",
    });
    return;
  }

  var temp = {
    sessionid: sess,
    time: currtime().toString(),
    key: xx.key,
  };

  db.collection("Sessions").insertOne(temp);
});

async function validatesessions(sess) {
  if (!sess) {
    return false;
  }
  var xx = await db.collection("Sessions").findOne({ sessionid: sess });
  return xx;
}

app.post("/adminItemEdit", async function (req, res) {
  var obj = req.body;
  const sessdetails = validatesessions(obj.session);
  if (sessdetails == false) {
    res.json({ bool: false });
    return false;
  }
  console.log(sessdetails,"check");
  if (obj.type == "availability") {
    var xx = await db.collection("Items").findOne({ key: sessdetails.key });
    console.log(xx);
  }
});
