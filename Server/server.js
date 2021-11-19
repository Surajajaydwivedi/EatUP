const express = require("express");
const PORT = 5000;
const cors = require("cors");
const app = express();
var server = require("http").createServer(app);
var formidable = require("formidable");
var fs = require("fs");
var crypto = require("crypto");
const hp = require("./ServerFiles/HelperFunctions");

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
  returnedData = hp.insert(obj);
  db.collection("Store Credentials").insertOne(returnedData[0]);
  db.collection("UserMenu").insertOne(returnedData[1]);
  db.collection("Admin").insertOne(returnedData[2]);
  db.collection("Landing").insertOne(returnedData[3]);
  db.collection("Items").insertOne(returnedData[4]);
  res.json({
    bool: true,
  });
});

app.post("/adminsignin", async function (req, res) {
  var obj = req.body;
  var sess = crypto.randomBytes(16).toString("hex");
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

  var yy = await db.collection("Sessions").findOne({ key: xx.key });
  if (yy) {
    db.collection("Sessions").updateOne(
      { key: xx.key },
      {
        $set: { sessionid: sess, time: hp.currtime() },
      }
    );
  } else {
    db.collection("Sessions").insertOne({
      sessionid: sess,
      time: hp.currtime(),
      key: xx.key,
    });
  }
});

app.post("/GetItemsForUser", async function (req, res) {
  var obj = req.body;
  var xx = await db.collection("Items").findOne({ key: obj.key });
  var yy = await db.collection("Admin").findOne({ key: obj.key });
  if (xx) {
    res.json({
      bool: true,
      name: yy.name,
      logo: yy.logo,
      address: yy.address,
      city: yy.city,
      items: xx.itmes,
    });
  } else {
    res.json({ bool: false });
  }
});

async function validatesessions(sess) {
  if (!sess || sess.length!==32) {
    return false;
  }
  var xx = await db.collection("Sessions").findOne({ sessionid: sess });
  currentTime = hp.currtime();
  if(currentTime-xx.time> 1800000){
    return false
  }
  return xx;
}

async function updateSessionTime(sess) {
  db.collection("Sessions").updateOne(
    { sessionid: sess },
    {
      $set: { time: hp.currtime() },
    }
  );
}

app.post("/LoginCheck", async function (req, res) {
  var obj = req.body;
  const sessdetails = await validatesessions(obj.session);
  if (sessdetails == false) {
    res.json({
      bool: false,
    });
  } else {
    res.json({
      bool: true,
    });
  }
});

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
  updateSessionTime(obj.session);
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
  } else if (obj.type == "addition") {
    var xx = await db.collection("Items").findOne({ key: sessdetails.key });
    itemlist = xx.itmes;
    itemlist.push({
      Itemkey: crypt("dish"),
      name: obj.name,
      price: obj.price,
      available: obj.available,
    });
    db.collection("Items").updateOne(
      { key: sessdetails.key },
      {
        $set: { itmes: itemlist },
      }
    );
    res.json({ bool: true });
  } else if (obj.type == "edit") {
    var xx = await db.collection("Items").findOne({ key: sessdetails.key });
    itemlist = xx.itmes;
    for (let i = 0; i < itemlist.length; i++) {
      if (itemlist[i].Itemkey == obj.itemkey) {
        itemlist[i].name = obj.name;
        itemlist[i].price = obj.price;
        itemlist[i].available = obj.available;
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
  } else if (obj.type == "delete") {
    var xx = await db.collection("Items").findOne({ key: sessdetails.key });
    itemlist = xx.itmes;
    for (let i = 0; i < itemlist.length; i++) {
      if (itemlist[i].Itemkey == obj.itemkey) {
        itemlist.splice(i, 1);
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
  updateSessionTime(obj.session);
});

app.post("/neworder", async function (req, res) {
  var obj = req.body;
  let Orderlist = await db.collection("Orders").findOne({ key: obj.key });
  if (Orderlist) {
    Updatedlist = Orderlist.Orders;

    Updatedlist.push({
      time: hp.formatAMPM(new Date()),
      date: hp.todaysdate(),
      orderno: Orderlist.totalOrders + 1,
      name: obj.name,
      email: obj.email,
      ph: obj.ph,
      items: obj.items,
      cost: obj.cost,
      tableno: obj.tableno,
      active: true,
      completed: false,
    });

    db.collection("Orders").updateOne(
      { key: obj.key },
      {
        $set: { totalOrders: Orderlist.totalOrders + 1, Orders: Updatedlist },
      }
    );
  } else {
    let Orderlist = [];
    Orderlist.push({
      time: hp.formatAMPM(new Date()),
      date: hp.todaysdate(),
      orderno: 1,
      name: obj.name,
      email: obj.email,
      ph: obj.ph,
      items: obj.items,
      cost: obj.cost,
      tableno: obj.tableno,
      active: true,
      completed: false,
    });

    db.collection("Orders").insertOne({
      key: obj.key,
      totalOrders: 1,
      Orders: Orderlist,
      inactiveOrders: [],
    });
  }
});

app.post("/GetActiveOrders", async function (req, res) {
  var obj = req.body;
  const sessdetails = await validatesessions(obj.session);
  if (sessdetails == false) {
    res.json({
      bool: false,
    });
    return;
  }
  var xx = await db.collection("Orders").findOne({ key: sessdetails.key });
  if (obj.type == "All") {
    res.json({
      items: [].concat(xx.Orders, xx.inactiveOrders),
    });
    return;
  }
  res.json({
    items: xx.Orders,
  });
  updateSessionTime(obj.session);
});

app.post("/UpdateOrders", async function (req, res) {
  var obj = req.body;
  const sessdetails = await validatesessions(obj.session);
  if (sessdetails == false) {
    res.json({
      bool: false,
    });
    return;
  }
  var xx = await db.collection("Orders").findOne({ key: sessdetails.key });
  var orderlist = xx.Orders;
  var inactiveorderlist = xx.inactiveOrders;
  for (let i = 0; i < orderlist.length; i++) {
    if (orderlist[i].orderno === obj.orderno) {
      if (obj.type === "Complete") {
        orderlist[i].completed = true;
      }
      orderlist[i].active = false;
      inactiveorderlist.push(orderlist[i]);
      orderlist.splice(i, 1);
      break;
    }
  }
  db.collection("Orders").updateOne(
    { key: sessdetails.key },
    {
      $set: { Orders: orderlist, inactiveOrders: inactiveorderlist },
    }
  );
  res.json({
    bool: true,
  });
  updateSessionTime(obj.session);
});

app.post("/GetDasboardData", async function (req, res) {
  var obj = req.body;
  const sessdetails = await validatesessions(obj.session);
  if (sessdetails == false) {
    res.json({
      bool: false,
    });
    return;
  }

  var xx = await db.collection("Orders").findOne({ key: sessdetails.key });
  let allOrders = [].concat(xx.Orders, xx.inactiveOrders);
  let returningData = [];
  let Revenue = 0;
  let todaysOrders = 0;
  for (let i = 0; i < allOrders.length; i++) {
    Revenue += allOrders[i].cost;
    if (allOrders[i].date == hp.todaysdate()) {
      todaysOrders += 1;
    }
  }
  returningData.push(Revenue);
  returningData.push(todaysOrders);
  returningData.push(xx.Orders.length);
  var MenuItems = await db
    .collection("Items")
    .findOne({ key: sessdetails.key });
  returningData.push(MenuItems.itmes.length);
  allOrders.sort(function (m, n) {
    return m.orderno - n.orderno;
  });

  if (allOrders.length <= 5) {
    returningData.push(allOrders.reverse());
  } else {
    returningData.push(allOrders.reverse().slice(0, 5));
  }
  returningData.push(hp.last7days([].concat(xx.Orders, xx.inactiveOrders)));
  res.json({
    ret: returningData,
  });
  updateSessionTime(obj.session);
});
