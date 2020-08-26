const categories = [];

(categories["canvas"] = {
  img: [
    {
      name: "canvas",
      amount: "$" + 2000,
      image:
        "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417010/52675_NVOR_zutngd.jpg",
    },
    {
      name: "sanchos",
      amount: "$" + 5000,
      image:
        "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417052/Mens_Boat_Shoes._CB442712240__c9bu6u.jpg",
    },
  ],
}),
  (categories["sanchos"] = {
    img: [
      {
        name: "sanchos",
        amount: "$" + 5000,
        image:
          "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417052/Mens_Boat_Shoes._CB442712240__c9bu6u.jpg",
      },
    ],
  }),
  (categories["hills shoes"] = {
    img: [
      {
        name: "hills-shoes",
        amount: "$" + 3000,
        image:
          "https://res.cloudinary.com/hobbyluv07/image/upload/v1568416986/81V4ktn_z_L._Ac_SX255__hxdsxt.jpg",
      },
    ],
  }),
  (categories["flat cruros"] = {
    img: [
      {
        name: "flat-cruros",
        amount: "$" + 2000,
        image:
          "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417052/Mens_Boat_Shoes._CB442712240__c9bu6u.jpg",
      },
    ],
  });

const items = () => {
  var searchfor = document.getElementById("inp").value.toLowerCase();
  var things = Object.keys(categories);
  let salesDiv = document.getElementById("sales");

  for (i = 0; i < things.length; i++) {
    if (things[i] == searchfor) {
      const image = document.createElement("img");
      image.setAttribute("src", "");
      let foundProperty = Object.values(categories[searchfor].img);

      foundProperty.map((catalog) => {
        let PropertyName = catalog.name;
        let PropertyAmount = catalog.amount;
        let PropertyImage = catalog.image;
        image.src = PropertyImage;
        imgs = image.src;
        let allValues = PropertyName + " \n " + PropertyAmount + " \n " + imgs;
        ulElement = document.createElement("ul");
        ulElement.style.listStyle = "none";
        liElement = document.createElement("li");
        aElement = document.createElement("a");
        aElement.style.textDecoration = "none";
        aElement.style.color = "black";
        aElement.setAttribute("href", "items_cart.html?" + allValues);
        aElement.setAttribute("id", "aElement");
        aElement.innerText = searchfor;
        aElement.style.color = "#fff";
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
        salesDiv.appendChild(ulElement);
      });
    }
  }
  document.getElementById("inp").value = "";
};

let collections = [
  {
    name: "canvas",
    id: 1,
    img:
      "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417063/71J9HIa1aFL._AC_255__sfjqwg.jpg",
  },
  {
    name: "wofer",
    id: 2,
    img:
      "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417052/Mens_Boat_Shoes._CB442712240__c9bu6u.jpg",
  },
  {
    name: "ladies",
    id: 3,
    img:
      "https://res.cloudinary.com/hobbyluv07/image/upload/v1568416986/81V4ktn_z_L._Ac_SX255__hxdsxt.jpg",
  },
];
function files() {
  var array = [];
  let lastThreeImage = $("#gallery  .pic").toArray(); //pushing img into an array
  let result = lastThreeImage.slice(-3); //slice the last 3 of the imgArray
  array.push(result); //pushing result to the emptyArray
  for (var things of array) {
    //loop through the array
    for (last of things) {
      let t = $("#recentImg").append(last);
    }
  }
  return things;
}
files();

let likes = document.querySelectorAll("#gallery .pic"); //pushing img into an array
$("#gallery div img").after(" <img src = '../img/like2-img.png' width='60'/> ");
const liker = [...likes];
liker.map((imgList) => {
  const appendCount = document.createElement("p");
  appendCount.setAttribute("id", "pElem");

  let count = 0;
  imgList.addEventListener("click", function (e) {
    console.log(imgList);
    if (imgList == e.target) {
      count++;
      appendCount.textContent = count;
      imgList.parentNode.appendChild(appendCount);
    }
  });
  appendCount.style.position = "relative";
  appendCount.style.top = "-37px";
  appendCount.style.left = "220px";
});
