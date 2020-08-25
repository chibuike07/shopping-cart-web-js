$("document").ready(function () {
  $("#result").load("items_cart.html");
  $("#image").load("media.html#recentImg");

  $("#media").click(function () {
    $("#container").load("media.html #gallery");
  });

  // $.getScript('media.js', function(){
  //   console.log('hello')
  //})

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
    $("#container").load("members.html#members");
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
if (day.innerText === null) {
  dayReminder = null;
} else {
  dayReminder = day;
}
dayReminder.innerHTML = day;
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
