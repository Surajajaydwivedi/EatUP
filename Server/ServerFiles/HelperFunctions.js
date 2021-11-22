function insert(data) {
  console.log(data)
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
    name: data.name,
    phno: data.phno,
    address: data.address,
    city: data.city,
    state: data.state,
    pincode: data.pincode,
    logo: data.logo,
    image: data.image,
  };
  var dataitem = {
    key: data.key,
    itmes: data.items,
  };
  var data4 = {
    key: data.key,
    totalOrders: 0,
    Orders : [],
    inactiveOrders: [],
  }

  return [data2, data1, data3, dataitem, data4];
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
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
function ddmmyyTOmmddyy(date) {
  var datearray = date.split("/");
  var newdate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
  return newdate;
}
function last7days(input) {
  function rotate(k) {
    let nums = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
    k = k % nums.length;
    nums.unshift(...nums.splice(nums.length - k, k));
    return nums;
  }
  let week = rotate(new Date().getDay());
  let arr = [0, 0, 0, 0, 0, 0, 0];
  let today = ddmmyyTOmmddyy(todaysdate());
  for (let i = 0; i < input.length; i++) {
    let currdate = ddmmyyTOmmddyy(input[i].date);
    let diff = (new Date(today) - new Date(currdate)) / (1000 * 60 * 60 * 24);
    if (diff <= 7) {
      arr[diff] += 1;
    }
  }
  return [arr,week];
}
module.exports = {
  insert,
  currtime,
  todaysdate,
  formatAMPM,
  ddmmyyTOmmddyy,
  last7days,
};
