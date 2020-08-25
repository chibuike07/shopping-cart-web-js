const categories = [];

(categories["canvas"] = {
  img: [
    {
      name: "canvas",
      amount: "$" + 2000,
      image:
        "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417010/52675_NVOR_zutngd.jpg"
    },
    {
      name: "sanchos",
      amount: "$" + 5000,
      image:
        "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417052/Mens_Boat_Shoes._CB442712240__c9bu6u.jpg"
    }
  ]
}),
  (categories["sanchos"] = {
    img: [
      {
        name: "sanchos",
        amount: "$" + 5000,
        image:
          "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417052/Mens_Boat_Shoes._CB442712240__c9bu6u.jpg"
      }
    ]
  }),
  (categories["hills shoes"] = {
    img: [
      {
        name: "hills-shoes",
        amount: "$" + 3000,
        image:
          "https://res.cloudinary.com/hobbyluv07/image/upload/v1568416986/81V4ktn_z_L._Ac_SX255__hxdsxt.jpg"
      }
    ]
  }),
  (categories["flat cruros"] = {
    //name: 'flat-cruros',
    img: [
      {
        name: "flat-cruros",
        amount: "$" + 2000,
        image:
          "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417052/Mens_Boat_Shoes._CB442712240__c9bu6u.jpg"
      }
    ]
  });

const items = () => {
  var searchfor = document.getElementById("inp").value.toLowerCase();
  var things = Object.keys(categories);
  let div = document.getElementById("sales");
  //var imgs = new Image()
  for (i = 0; i < things.length; i++) {
    console.log(things[i]);
    if (things[i] == searchfor) {
      const image = document.createElement("img");
      image.setAttribute("src", "");
      let foundProperty = Object.values(categories[searchfor].img); //.map((ImageCatalogs) => {
      console.log(foundProperty);

      let values = foundProperty.map(catalog => {
        console.log(catalog);
        let PropertyName = catalog.name;
        let PropertyAmount = catalog.amount;
        let PropertyImage = catalog.image;
        image.src = PropertyImage;
        imgs = image.src;
        console.log(imgs);

        let allValues = PropertyName + " \n " + PropertyAmount + " \n " + imgs;
        console.log(allValues);
        ulElement = document.createElement("ul");        
        ulElement.style.listStyle = 'none'
        liElement = document.createElement("li");
        aElement = document.createElement("a");
        aElement.style.textDecoration = 'none';
        aElement.style.color = 'black';
        aElement.setAttribute("href", "items_cart.html?" + allValues);
        aElement.setAttribute("id", "aElement");
        aElement.innerText = searchfor; //+ ' ' + PropertyName;
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement)
        div.appendChild(ulElement);
      });
    }
  }
};
// let like =  $('#gallery  .pic').toArray()
// console.log(like);

let collections = [
  {
    name: "canvas",
    id: 1,
    img:
      "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417063/71J9HIa1aFL._AC_255__sfjqwg.jpg"
  },
  {
    name: "wofer",
    id: 2,
    img:
      "https://res.cloudinary.com/hobbyluv07/image/upload/v1568417052/Mens_Boat_Shoes._CB442712240__c9bu6u.jpg"
  },
  {
    name: "ladies",
    id: 3,
    img:
      "https://res.cloudinary.com/hobbyluv07/image/upload/v1568416986/81V4ktn_z_L._Ac_SX255__hxdsxt.jpg"
  }
];
function files() {
  var array = [];
  //var y = document.getElementById('gallery').getElementsByClassName('pic')
  let y = $("#gallery  .pic").toArray(); //pushing img into an array
  console.log(y);
  let result = y.slice(-3); //slice the last 3 of the imgArray
  array.push(result); //pushing result to the emptyArray
  for (var things of array) {
    //loop through the array
    for (last of things) {
      let t = $("#recentImg").append(last);
      console.log(things);
      // return t
      // console.log(t)
    }
  }
  console.log(array, "hhhhhhh");
//   return array;
}
files();
// let span = document.getElementById('2')
// let coll = document.getElementById('coll');
// let itemCol = collections.forEach(function (a) {
//     span.textContent = '\n ' + a.name + '\n';
//     console.log(a)
//     let collImg = new Image()
//     collImg.setAttribute('src', '')
//     collImg.src = a.img;
//     //console.log(collImg.src)
//     coll.src = collImg.src
// })

let likes = document.querySelectorAll("#gallery .pic"); //pushing img into an array
$("#gallery div img").after(" <img src = 'like4-img.png' width='60'/> ");
const liker = [...likes];
// console.log(likes)
liker.map(imgList => {
  const appendCount = document.createElement("p");
  appendCount.setAttribute("id", "pElem");
  // let span = document.createElement('span')
  let count = 0;
  // console.log(appendCount)
  // imgList.parentNode.append('like')
  imgList.addEventListener("click", function(e) {
    console.log(imgList);
    if (imgList == e.target) {
      count++;
      appendCount.textContent = count;
      // console.log(count)
      imgList.parentNode.appendChild(appendCount);
    }
  });
  appendCount.style.position = "relative";
  // appendCount.style.postion = 'absolute';
  appendCount.style.top = "-37px";
  appendCount.style.left = "220px";
  // console.log(appendCount)
});
// console.log(pelem)

