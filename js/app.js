"use strict";
//Find screen height and set design
// var screenHeight = window.innerHeight;


var allStores = [];
//array of opening hours
var openingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
//creates table and first row
var table = document.getElementById("salesTable");
var row = document.createElement("tr");
//Object Constructor Method
function Store(location, minCust, maxCust, avgHrSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgHrSale = avgHrSale;
  this.hourlySales = [];
  allStores.push(this);
}
//Store functions added
//This function generates a random number of customers per hour based on the min & max in each object
Store.prototype.randNoCust = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Creates array of sales/hr per store and saves in store array
Store.prototype.createArrayOfSalesPerHour = function() { 
  this.hourlySales = [];
  for (var i = 0 ;i < openingHours.length; i++) {
    this.hourlySales.push(Math.round(this.randNoCust() * this.avgHrSale)); 
  }
}

//Create sales array
Store.prototype.createSalesRow = function() {
  let salesArray = [];
  salesArray[0] = this.location;
  for (var i = 0; i < this.hourlySales.length; i++) {
    salesArray[i+1] = this.hourlySales[i];
  }
 //find sum of all numbers in hourlySales array
  salesArray[salesArray.length] = sum;

};





};
//This function creates an element (with data if applicable) and appends it to the parent element
function renderChild(parent, elementType, data) {
  var element =  document.createElement(elementType);
  element.textContent = data ? data : "";
  parent.appendChild(element);
  return element;
}
//creates the table header line
function renderHeader() {
  table.appendChild(row);
  renderChild(row, "th");
  for (var i = 0; i < openingHours.length; i++) {
    renderChild(row, "th", openingHours[i]);
  }
}

function renderBody() {

}

function renderFooter() {

}

//Array of store arrays
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




//creates the table store rows
function renderBody () {
  for (var i = 0; i < allStores.length; i++) {
    row = renderChild(table, "tr");
    renderChild(row, "td", allStores[i].location);
    for(var j = 0; j < allStores[i].hourlySales.length; j++) {
      renderChild(row, "td", allStores[i].hourlySales[j]);
    }    
  }
}

renderHeader();
renderBody();



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



//create NEW STORE form
// let nsForm= document.getElementById("newStore"); // Finds <form> element in html & saves
// let fieldSet = renderChild(nsForm, "fieldset"); //Creates <fieldset> in <form>
// let labelEl = renderChild(fieldSet, "label", "Location: "); //Creates <label>
// labelEl.setAttribute("for", "location"); //Sets "for" attribute on label
// let inputEl = renderChild(fieldSet, "input"); //Creates <input>
// inputEl.setAttribute("id", "location"); //Sets "id" attribute on input


// function formInput(parent, elementType, data, attribute, value, n) {
//   renderChild(parent, elementType, data);
//   for (var i = 0; i < n; i++ )
//   Element.setAttribute(attribute, value);
// }



let submitFormButton = document.getElementById("newFormButton");
submitFormButton.addEventListener("submit", function(event) {
  event.preventDefault();
  //store all form values for use
  let inLocation = event.target.location.value;
  let inCustMin = event.target.mincust.value;
  let inCustMax = event.target.maxcust.value;
  let inAvgCSale = event.target.avgcookiesale.value;
  //create new store object
  new Store(inLocation, inCustMin, inCustMax, inAvgCSale);
  //create row of sales data for new store
  createSalesRow(allStores[allStores.length-1]);
  //Append to table

  event.target.reset();
});
