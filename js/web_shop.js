let personalDetails = decodeURIComponent(window.location.search); //get sent data
personalDetails = personalDetails.substring(1);
const Details = (profile) => {
  //function for sent data
  var text = document.getElementById("text");
  var user = document.getElementById("un");
  var email = document.getElementById("em");
  var img = document.getElementById("img");
  var a = document.getElementById("lik");
  a.setAttribute("href", `webShop.html? ${profile}`);
  let splitV = profile.split(/\s+/g); //split the sent data
  text.innerText = splitV[0];
  user.innerText = splitV[0];
  email.innerText = splitV[1];
  img.src = splitV[2];
};
Details(personalDetails);

$("document").ready(function () {
  $("#result").load("items_cart.html");
  $("#image").load("media.html#recentImg");

  $("#media").click(function () {
    $("#container").load("media.html #gallery");
  });

  $(".menu-wrapper").click(function () {
    $(".menu").slideUp();
  });
  $("#sale").click(function () {
    $("#productInfo").load("items_cart.html #contentInfo");
  });
  $(".upgrade").click(function () {
    alert("we are sorry! No upgrade yet");
  });
  $("#mem").click(function () {
    $("#container").load("members_detail.html#members");
  });
});

var day;
switch (new Date().getDay()) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
}

var dayReminder = document.getElementById("day");
if (dayReminder.innerText !== undefined) {
  dayReminder.innerText = day.toUpperCase();
} else {
  dayReminder = null;
}
var array = [];
var passwordLen = "abcdefghijklmnopq";
var passWord = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
function generatePassword() {
  array = [];
  var shuffle = passWord
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

  let len = shuffle.slice(0, passwordLen.length);
  let r = confirm(len);

  if (r == true) {
    array.push(len);
  } else {
    console.log("false");
  }
}
