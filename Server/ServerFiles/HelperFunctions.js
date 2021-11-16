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

  return [data2, data1, data3, data4, dataitem];
}

function currtime() {
  var d = new Date();
  var n = d.getTime();
  return n;
}

function todaysdate() {
  var d = new Date();
  var n = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  return n;
}
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

module.exports = { insert, currtime, todaysdate,formatAMPM };
