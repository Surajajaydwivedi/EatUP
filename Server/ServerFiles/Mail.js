var nodemailer = require("nodemailer");
var fs = require("fs");
var crypto = require("crypto");

/* ================================================================================================ */

var SecurityCode = "";
fs.readFile("./ServerFiles/MailHtml/Activation.txt", "utf-8", (err, data) => {
  if (err) throw err;
  SecurityCode = data.toString();
});

/* Order Confirm */

var OrderConfirmMain = "";
fs.readFile(
  "./ServerFiles/MailHtml/OrderConfirmation[User]/OrderConfirmation.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    OrderConfirmMain = data.toString();
  }
);

var OrderConfirmDish = "";
fs.readFile(
  "./ServerFiles/MailHtml/OrderConfirmation[User]/DishRender.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    OrderConfirmDish = data.toString();
  }
);

/* Order Recieved */

var OrderRecievedMain = "";
fs.readFile(
  "./ServerFiles/MailHtml/OrderRecieved[Owner]/OrderRecievedMain.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    OrderRecievedMain = data.toString();
  }
);

var OrderRecieveDish = "";
fs.readFile(
  "./ServerFiles/MailHtml/OrderRecieved[Owner]/Dishes.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    OrderRecieveDish = data.toString();
  }
);

/* Order Cancelled */

var OrderCancelledMain = "";
fs.readFile(
  "./ServerFiles/MailHtml/OrderCancelled[User]/OrderCancelledMain.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    OrderCancelledMain = data.toString();
  }
);

var OrderCancelledDish = "";
fs.readFile(
  "./ServerFiles/MailHtml/OrderCancelled[User]/Dishes.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    OrderCancelledDish = data.toString();
  }
);

/* ================================================================================================= */

function SendMail(reciever, html, subject) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "updates.yumtrip@gmail.com",
      pass: "@F774b04b",
    },
  });

  var mailOptions = {
    from: "updates.yumtrip@gmail.com",
    to: reciever,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function ActivationMail(reciever, code) {
  var tempSecurityCode = SecurityCode.replace("!@#$%", code);
  SendMail(reciever, tempSecurityCode, "Activate your YumTrip Account !");
}

function OrderConfirmationMail(reciever, details) {
  var tempDish = OrderConfirmDish;
  var tempOrderMain = OrderConfirmMain;
  for (let i = 0; i < details[1].length; i++) {
    tempDish = tempDish.replace(
      "NAM3-QTY",
      details[1][i].name + " X" + details[1][i].quantity
    );
    tempDish = tempDish.replace("PR1C3", details[1][i].price);
    tempOrderMain = tempOrderMain.replace("D1SHES", tempDish);
    tempDish = OrderConfirmDish;
  }
  for (let i = 0; i < 2; i++) {
    tempOrderMain = tempOrderMain.replace("T0TAL", details[2].toString());
  }
  tempOrderMain = tempOrderMain.replace("0RD3RN0", details[0].toString());
  tempOrderMain = tempOrderMain.replace("U53RNAM3", details[6].toString());
  tempOrderMain = tempOrderMain.replace("G5T", details[2].toString());
  tempOrderMain = tempOrderMain.replace("D1SHES", "");
  tempOrderMain = tempOrderMain.replace("ADDRE55", details[3].toString());
  tempOrderMain = tempOrderMain.replace("P1N-C1TY", details[4].toString());
  tempOrderMain = tempOrderMain.replace("PHN0", details[5].toString());
  SendMail(reciever, tempOrderMain, "Your Order is Confirmed !");
}

function OrderRecieveMail(reciever, details) {
  var tempDish = OrderRecieveDish;
  var tempOrderMain = OrderRecievedMain;
  for (let i = 0; i < details[0].length; i++) {
    tempDish = tempDish.replace(
      "NAM3-QTY",
      details[0][i].name + " X" + details[0][i].quantity
    );
    tempDish = tempDish.replace("PR1C3", details[0][i].price);
    tempOrderMain = tempOrderMain.replace("D1SHES", tempDish);
    tempDish = OrderRecieveDish;
  }
  tempOrderMain = tempOrderMain.replace("T0TAL", details[1].toString());
  tempOrderMain = tempOrderMain.replace("D1SHES", "");
  SendMail(reciever, tempOrderMain, "Your Have a New Order !");
}

function OrderCancelledMail(reciever, details) {
  var tempDish = OrderCancelledDish;
  var tempOrderMain = OrderCancelledMain;
  for (let i = 0; i < details[0].length; i++) {
    tempDish = tempDish.replace(
      "NAM3-QTY",
      details[0][i].name + " X" + details[0][i].quantity
    );
    tempDish = tempDish.replace("PR1C3", details[0][i].price);
    tempOrderMain = tempOrderMain.replace("D1SHES", tempDish);
    tempDish = OrderCancelledDish;
  }
  tempOrderMain = tempOrderMain.replace("T0TAL", details[1].toString());
  tempOrderMain = tempOrderMain.replace("D1SHES", "");
  tempOrderMain = tempOrderMain.replace("######", details[2].toString());
  SendMail(reciever, tempOrderMain, "Sorry, Your Order has been Cancelled.");
}

module.exports = {
  ActivationMail,
  OrderConfirmationMail,
  OrderRecieveMail,
  OrderCancelledMail,
};
