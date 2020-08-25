var script_url = "https://script.google.com/macros/s/AKfycbxli7OmoMTlZn3e1SQYLR8e7zLWHlHKpHN6R3hhlJxdRGXz7GA/exec";




// Make an AJAX call to Google Script
function insert_value() {

  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');
  //creamos variables con los valores que el usuario ingresa en el formulario
  //Se corresponden con los id de los input
  var row1 = $("#email").val();
  var row2 = $("#fnam").val();
  var row3 = $("#lnam").val();
  var row4 = $("#pwd").val();
  var row5 = $("#rpwd").val();
  var row6 = $("#phone").val();
  

  var url = script_url + "?callback=ctrlq&email=" + row1 + "&fnam=" + row2 + "&lnam="+ row3 + "&pwd=" + row4 +"&rpwd=" + row5 + "&phone="+ row6  +"&action=insert";
  console.log(url);


  var request = jQuery.ajax({

    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  console.log(request);
}







function update_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";

  var id1 = $("#email").val();
  var name = $("#fnam").val();
  var url = script_url + "?callback=ctrlq&email=" + name + "&fnam=" + id1 + "&action=update";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });


}

function delete_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');
  var id1 = $("#id").val();
  var name = $("#name").val();
  var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=delete";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });

}




// print the returned data
function ctrlq(e)
{
  console.log(e);
  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
  read_value();
}




function read_value() {

  $("#re").css("visibility", "hidden");

  document.getElementById("loader").style.visibility = "visible";
  var url = script_url + "?action=read";

  $.getJSON(url, function(json) {

    // Set the variables from the results array

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");



    var header = table.createTHead();
    //Es el correspondiente a una columna en la tabla
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
   ;
    // Es el Titulo de cada columna
    cell1.innerHTML = "<b>Email addres</b>";
    cell2.innerHTML = "<b>First name</b>";
    cell3.innerHTML = "<b>Last name</b>";
    cell4.innerHTML = "<b>Password</b>";
    cell5.innerHTML = "<b>Repeat password</b>";
    cell6.innerHTML = "<b>Phone number</b>";
    

    // ADD JSON DATA TO THE TABLE AS ROWS
    //LOS NOMBRES DEBEN CORRESPONDER AL NOMBRE DE LAS COLUMNAS
    //DEL SHEET
  for (var i = 0; i < json.records.length; i++)
    {
      tr = table.insertRow(-1);

      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Email_address;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].First_name;

      tabCell = tr.insertCell(-1);
      console.log(json);
      tabCell.innerHTML = json.records[i].Last_name;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Password;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Repeat_password;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Phone_number;

      
    }


    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    document.getElementById("loader").style.visibility = "hidden";
    $("#re").css("visibility", "visible");
  });
}