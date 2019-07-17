"use strict";
//Find screen height and set design
// var screenHeight = window.innerHeight;
var allStores = [];
var openingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]; //array of opening hours

//Object Constructor Method
function Store(location, minCust, maxCust, avgHrSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgHrSale = avgHrSale;
  this.hourlySales = this.createArrayOfSalesPerHour();
  allStores.push(this);
}

//Store functions added

Store.prototype.randNoCust = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Store.prototype.createArrayOfSalesPerHour = function() {
  var array = [];
  for (var i = 0 ;i < openingHours.length; i++) {
    array.push(Math.round(this.randNoCust() * this.avgHrSale));
  }
  return array;  //save results on object -hourlySales[]
};

function renderChild(parent, elementType, data) {
  var element =  document.createElement(elementType);
  element.textContent = data ? data : "";
  parent.appendChild(element);
}

var stores = [
  ["1st and Pike", 23, 65, 6.3],
  ["SeaTac Airport", 3, 24, 1.2],
  ["Seattle Center", 11, 38, 3.7],
  ["Capitol Hill", 20, 38, 2.3],
  ["Alki", 2, 16, 4.6]
];

//Creates the store objects
for (var i = 0; i < stores.length; i++) {
  new Store(
    stores[i][0],
    stores[i][1],
    stores[i][2],
    stores[i][3]
  );
}


//creates table and first row
var table = document.getElementById("salesTable");
var row = document.createElement("tr");
table.appendChild(row);
//creates table header line
renderChild(row, "th");
for (var i = 0; i < openingHours.length; i++) {
  renderChild(row, "th", openingHours[i]);
}

//Attempting to print Individual store sales
renderChild(table, "tr");
renderChild(row, "td", allStores[0].location);

for(var j = 0; j < allStores[0].hourlySales.length; j++) {
  renderChild(row, "td", allStores[0].hourlySales[j]);
}


// Loop through allStores to create the table


//Use array to create stores?
//for loop runs through stores 
//->CreateArrayOfSalesPerHour function
//->creates table row
//->OR saves as array to be accessed later


// var parentEl = document.getElementById("estimates");
// var tableEl = document.createElement("table");
// parentEl.appendChild(tableEl);
// for (var row = 0; row < stores.length; row++) {
//   var newRow = document.createElement("tr");
//   for (var col = 0; col < stores[row].length; col++) {
//     var cellType = (row === 0) ? "th" : "td";
//     var newCell = document.createElement(cellType);
//     newCell.textContent = stores[row][col];
//     newRow.appendChild(newCell);
//   }
//   tableEl.appendChild(newRow);
// }



// renderChild(tableEl,'tr');
// renderChild(rowEl,'th', openingHours[]);
// renderChild(rowEl,'th', openingHours[]);
