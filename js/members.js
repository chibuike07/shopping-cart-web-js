const members = [];
(members["hobbyluv"] = {
  surname: "chime",
  othername: "chibuike princewill",
  email: "princewillchime43@gmail.com",
  uniquepass: "a",
  img: "https://chibuike07.000webhostapp.com/shopping_blog/bgFoto.jpg",
  phone: "234" + 8169543479,
}),
  (members["jardon"] = {
    surname: "uzor",
    othername: "james kelechi",
    email: "james@gmail.com",
    uniquepass: "b",
    img:
      "https://res.cloudinary.com/hobbyluv07/image/upload/v1568425126/logo_eeviwg.jpg",
    phone: "234" + 7065754331,
  }),
  (members["rockboy"] = {
    surname: "anumake",
    othername: "david onyebuchi",
    email: "david@gmail.com",
    uniquepass: "c",
    img: "https://chibuike07.000webhostapp.com/shopping_blog/logo.jpg",
    phone: "234" + 8102345678,
  });

var foundKey;
function member() {
  var user_name = document.getElementById("username").value.toLowerCase();
  var form2 = document.getElementById("form2");
  let loopedPro;
  loopedPro = Object.keys(members);
  div = document.getElementById("members");
  for (var i = 0; i < loopedPro.length; i++) {
    foundKey = loopedPro[i];
    if (foundKey === user_name) {
      form2.style.display = "flex";
      document.getElementById("form1").style.display = "none";

      //else{console.log()};
    }
  }
}
function values() {
  var form2 = document.getElementById("form2");
  var user_name = document.getElementById("username").value.toLowerCase();
  var surname = document.getElementById("fn").value.toLowerCase();
  var other_names = document.getElementById("o").value.toLowerCase();
  var emails = document.getElementById("e").value.toLowerCase();
  var unique_pass = document.getElementById("up").value.toLowerCase();
  let foundFnam;
  let foundOther;
  let foundEmail;
  let foundUniq;
  let foundImg;
  foundFnam = Object.values(members[user_name].surname).join("");
  foundOther = Object.values(members[user_name].othername).join("");
  foundEmail = Object.values(members[user_name].email).join("");
  foundUniq = Object.values(members[user_name].uniquepass).join("");
  foundImg = Object.values(members[user_name].img).join("");
  imgSource = document.createElement("img");
  imgSource.setAttribute("src", "");
  imgSource.src = foundImg;
  if (
    foundFnam == surname &&
    foundOther == other_names &&
    foundEmail == emails &&
    foundUniq == unique_pass
  ) {
    form2.style.display = "none";
    let text = document.getElementById("text");
    let allValues = user_name + " \n " + foundEmail + " \n " + imgSource.src;
    ulElement = document.createElement("ul");
    liElement = document.createElement("li");
    aElement = document.createElement("a");
    aElement.setAttribute("href", "webShop.html?" + allValues);
    aElement.setAttribute("id", "aElement");
    aElement.innerText = "Welcome to shopping_cart_blog" + allValues;
    liElement.appendChild(aElement);
    ulElement.style.listStyle = "none";
    ulElement.appendChild(liElement);
    text.appendChild(ulElement);
    alert(
      "you have been successfully verified and can click the link below to get to the dash board"
    );
    text.style.textAlign = "center";
    aElement.style.color = "#fff";
    aElement.style.textDecoration = "none";
    document.querySelector("form").reset();
  } else {
    return alert("please fill the forms correctly");
  }
}

//member()

//console.log(eptArr)
