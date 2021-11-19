var easyinvoice = require('easyinvoice');
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
function downloadInvoice(input) {
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
      logo: "https://i.ibb.co/xFSVDrj/Yum-Trip-Logo.jpg", //or base64
      //"background": "https://i.ibb.co/xFSVDrj/Yum-Trip-Logo.jpg"
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
      invoiceNumber: "2021.0001",
      invoiceDate: formatAMPM(new Date()),
      products: [
        {
          quantity: "2",
          description: "Test1",
          tax: 18,
          price: 33.87,
        },
        {
          quantity: "4",
          description: "Test2",
          tax: 18,
          price: 10.45,
        },
      ],
      bottomNotice: "This is a computer generated Invoice and dosn't require any signature.",
    };

    easyinvoice.createInvoice(data, function (result) {
      easyinvoice.download("invoice.pdf");
    });
  }

  export default downloadInvoice