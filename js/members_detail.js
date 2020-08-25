let objKeys;
function getMembersUserName() {
  // function for the members
  div = document.getElementById("members");
  objKeys = Object.values(members); //getting the property of the obj
  for (var i = 0; i < objKeys.length; i++) {
    // looping the property of each member
    var liElem = document.createElement("li");
    liElem.setAttribute("id", "liElem");
    var aElem = document.createElement("a"); // link to hold the member fullname
    var loopedKeys = objKeys[i];
    var othernames = loopedKeys.othername; //.concat( ' ' + loopedKeys.othername)// full name
    aElem.innerText = othernames;
    liElem.appendChild(aElem);
    div.appendChild(liElem);

    liElem.addEventListener("click", displayImg);
  }
}
getMembersUserName();

function displayImg() {
  document.getElementById("members").style.display = "none";
  document.getElementById("member_image").style.display = "block";
  document.getElementById("member_phone").style.display = "block";
  var loop = objKeys.map(function (props) {
    //looping through the properties of member[]
    return props;
  });
  loop.forEach((element) => {
    //loop each members properties
    if (element.othername == this.innerText) {
      //condition for display of member info
      let mem_phone = element.phone;
      let mem_img = element.img;
      memba_img = document.createElement("img"); //create img for display of member pix
      memba_img.setAttribute("src", ""); //add src attr
      memba_img.src = mem_img;
      document.getElementById("member_image").src = memba_img.src;
      document.getElementById("member_phone").innerHTML = mem_phone;
      setTimeout(membersList, 10000); //create timeout for display of member info
    }
  });

  function membersList() {
    document.getElementById("members").style.display = "block";
    document.getElementById("member_image").style.display = "none";
    document.getElementById("member_phone").style.display = "none";
  }
}
