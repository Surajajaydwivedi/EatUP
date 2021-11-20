var nodemailer = require("nodemailer");
var fs = require("fs");
var crypto = require("crypto");

var SecurityCode = "";
fs.readFile("./ServerFiles/MailHtml/Activation.txt", "utf-8", (err, data) => {
  if (err) throw err;
  SecurityCode = data.toString();
});

var OrderMain = "";
fs.readFile(
  "./ServerFiles/MailHtml/OrderConfirmation.txt",
  "utf-8",
  (err, data) => {
    if (err) throw err;
    OrderMain = data.toString();
  }
);

var Dish = "";
fs.readFile("./ServerFiles/MailHtml/DishRender.txt", "utf-8", (err, data) => {
  if (err) throw err;
  Dish = data.toString();
});

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
  return code;
}

function ActivationMail(reciever) {
  var code = crypto.randomBytes(3).toString("hex").toUpperCase();
  SendMail(
    reciever,
    SecurityCode.replace("!@#$%", code, "Activate your YumTrip Account !")
  );
  return code;
}

function OrderConfirmationMail(reciever, details) {
  console.log(details)
  var tempDish = Dish;
  var tempOrderMain = OrderMain;
  for (let i = 0; i < details[1].length; i++) {
    tempDish = tempDish.replace(
      "NAM3-QTY",
      details[1][i].name + " X" + details[1][i].quantity
    );
    tempDish = tempDish.replace("PR1C3", details[1][i].price);
    tempOrderMain = tempOrderMain.replace("D1SHES", tempDish);
    tempDish = Dish;
  }
  for (let i = 0; i < 2; i++) {
    tempOrderMain = tempOrderMain.replace(
      "T0TAL",
      (details[2]).toString()
    );
  }
  tempOrderMain = tempOrderMain.replace("0RD3RN0", details[0].toString());
  tempOrderMain = tempOrderMain.replace("U53RNAM3", details[6].toString());
  tempOrderMain = tempOrderMain.replace("G5T", details[2].toString());
  tempOrderMain = tempOrderMain.replace("D1SHES", "");
  tempOrderMain = tempOrderMain.replace("ADDRE55", details[3].toString());
  tempOrderMain = tempOrderMain.replace("P1N-C1TY", details[4].toString());
  tempOrderMain = tempOrderMain.replace("PHN0", details[5].toString());
  SendMail(
    reciever,
    tempOrderMain,
    "Your Order is Confirmed !"
  );
}

module.exports = {
  ActivationMail,
  OrderConfirmationMail,
};
