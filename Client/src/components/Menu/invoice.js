var easyinvoice = require("easyinvoice");
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
function createArray(arr) {
  var orderitmes = [];
  for (let i = 0; i < arr.length; i += 1) {
    var tt = {
      quantity: arr[i].quantity,
      description: arr[i].name,
      price: arr[i].price,
      tax: 8,
    };
    orderitmes.push(tt);
  }
  return orderitmes;
}

async function downloadInvoice(input) {
  console.log(input)
  var data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    //"locale": "de-DE", //Defaults to en-US, used for number formatting (see docs)
    currency: "INR", //See documentation 'Locales and Currency' for more info
    taxNotation: "GST", //or gst
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    logo: input[3], //or base64
    background: "https://i.ibb.co/JFN00MX/Invoice-Template.png",
    sender: {
      company: "YumTrip",
      address: "Noida, UP",
      zip: "282002",
      city: "Noida",
      country: "India",
    },
    client: {
      company: input[0],
      address: input[1],
      zip: "4567 CD",
      city: input[2],
      country: "India",
    },
    invoiceNumber: "N/A",
    invoiceDate: formatAMPM(new Date()),
    products: createArray(input[4]),
    bottomNotice:
      "This is a computer generated Invoice and dosn't require any signature.",
  };

  await easyinvoice.createInvoice(data, function (result) {
    easyinvoice.download("invoice.pdf");
  });
  return true;
}

export default downloadInvoice;
