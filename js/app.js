"use strict";

// //Find screen height and set design
// var screenHeight = window.innerHeight;

var openingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]; //array of opening hours

//Object Constructor Method
function Store(location, minCust, maxCust, avgHrSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgHrSale = avgHrSale;
};

//Store functions added 

Store.prototype.randNoCust = function() {
  var min = Math.ceil(this.minCustHr);
  var max = Math.floor(this.maxCustHr);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Store.prototype.createArrayOfSalesPerHour = function() {
  var array = [];
  for (var i = 0 ;i < openingHours.length; i++) {
    array.push(Math.round(this.randNoCust() * this.avgCookieSale));
  }
  return array;
};

//Creating individual store objects
var store1 = new Store("1st and Pike", 23, 65, 6.3);
var store2 = new Store("SeaTac Airport", 3, 24, 1.2);
var store3 = new Store("Seattle Center", 11, 38, 3.7);
var store4 = new Store("Capitol Hill", 20, 38, 2.3);
var store5 = new Store("Alki", 2, 16, 4.6);

//Array of fake table data
var array = [
  ["", "6:00", "7:00", "8:00"],
  ["store1", 53, 21, 18],
  ["store2", 83, 4, 0],
  ["store3", 60, 121, 48]
];

var parentEl = document.getElementById("estimates");
var tableEl = document.createElement("table");
parentEl.appendChild(tableEl);
for (var row = 0; row < array.length; row++) {
  var newRow = document.createElement("tr");
  for (var col = 0; col < array[row].length; col++) {
    var cellType = (row === 0) ? "th" : "td";
    var newCell = document.createElement(cellType);
    newCell.textContent = array[row][col];
    newRow.appendChild(newCell);
  }
  tableEl.appendChild(newRow);
}


// var store1Array = store1.createArrayOfSalesPerHour();
 
// //Create list of estimated sales by hour
// for (var j = 0; j < openingHours.length; j++) {
//   document.querySelector("ul");
//   var node = document.createElement("LI");                 
//   var textnode = document.createTextNode(`${openingHours[j]}: ${store1Array[j]}`);         
//   node.appendChild(textnode);                              
//   document.querySelector("ul").appendChild(node);     
// }



// // TO DISPLAY ON PAGE

// var displayEstimate = function(){
//   getElementById("location");

//   document.querySelector("ul");
//   liEl.textContent = ``
// }
// getElementById("location")

// // EXAMPLE CODE
// function renderList() {
//   // var ul = document.getElementsByTagName("ul")[0];
//   // var ul = document.querySelectorAll("ul#saved")[0];
//   var ul = document.querySelector("ul#saved");

//   for (var i = 0; i < unicorns.length; i++) {
//     var liEl = document.createElement("li");
//     liEl.textContent = `Name: ${unicorns[i].name}, Health: ${unicorns[i].hp}, Sick: ${unicorns[i].isSick}`;

//     ul.appendChild(liEl);
//   }
// }
