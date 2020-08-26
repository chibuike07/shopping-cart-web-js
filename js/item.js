//code to retrive the sent data
let extractedSalesItem = decodeURIComponent(window.location.search);
extractedSalesItem = extractedSalesItem.substring(1);
//creating a function for the sent data
const loadedItem = (sales) => {
  let splitFoundValues = sales.split(/\s+/g); //ssperate the datas
  let imageItem = document.getElementById("img"); //getting the src for the sent img
  for (i = 0; i < splitFoundValues.length; i++) {
    //loop through the data
    document.getElementById("name").innerText = splitFoundValues[0] + " \n "; //assig value to specified id
    document.getElementById("amount").innerText = splitFoundValues[1] + " \n "; //assig value to specified id
    imageItem.src = splitFoundValues[2]; //assig value to specified id
    console.log("yes here");
  }
};
loadedItem(extractedSalesItem);
