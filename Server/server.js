const express = require("express");
const PORT = 5000;
const cors = require("cors");
const app = express();
var server = require("http").createServer(app);
var formidable = require("formidable");
var fs = require("fs");
var crypto = require("crypto");
const exp = require("./ServerFiles/SignupInsert");

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

function crypt(p1) {
  var crypto = require("crypto");
  return p1 == "rest"
    ? crypto.randomBytes(2).toString("hex") +
        "-" +
        crypto.randomBytes(2).toString("hex") +
        "-" +
        crypto.randomBytes(2).toString("hex")
    : crypto.randomBytes(3).toString("hex");
}

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
  returnedData = exp.insert(obj);
  db.collection("Store Credentials").insertOne(returnedData[0]);
  db.collection("UserMenu").insertOne(returnedData[1]);
  db.collection("Admin").insertOne(returnedData[2]);
  db.collection("Landing").insertOne(returnedData[3]);
  db.collection("Items").insertOne(returnedData[4]);
});

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

app.post("/GetItemsForUser", async function (req, res) {
  var obj = req.body;
  var xx = await db.collection("Items").findOne({ key: obj.key });

  if (xx) {
    res.json({
      bool: true,
      name: "Pizza Hut",
      image: "images/123.png",
      logo: "images/123-logo.png",
      items: xx.itmes,
    });
  } else {
    res.json({ bool: false });
  }
});

async function validatesessions(sess) {
  if (!sess) {
    return false;
  }
  var xx = await db.collection("Sessions").findOne({ sessionid: sess });
  return xx;
}

app.post("/GetItemsForMenuManager", async function (req, res) {
  var obj = req.body;
  const sessdetails = await validatesessions(obj.session);
  if (sessdetails == false) {
    res.json({
      bool: false,
    });
    return;
  }
  var xx = await db.collection("Items").findOne({ key: sessdetails.key });
  if (xx) {
    res.json({
      bool: true,
      name: "Pizza Hut",
      image: "images/123.png",
      logo: "images/123-logo.png",
      items: xx.itmes,
    });
  } else {
    res.json({ bool: false });
  }
});

app.post("/adminItemEdit", async function (req, res) {
  var obj = req.body;
  const sessdetails = await validatesessions(obj.session);
  if (sessdetails == false) {
    res.json({ bool: false });
    return false;
  }

  if (obj.type == "availability") {
    var xx = await db.collection("Items").findOne({ key: sessdetails.key });
    itemlist = xx.itmes;

    for (let i = 0; i < itemlist.length; i++) {
      if (itemlist[i].Itemkey == obj.itemkey) {
        itemlist[i].available = obj.change;
        break;
      }
    }
    db.collection("Items").updateOne(
      { key: sessdetails.key },
      {
        $set: { itmes: itemlist },
      }
    );
    res.json({ bool: true });
  }
});
