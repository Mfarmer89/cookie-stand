"use strict";
//Find screen height and set design
// var screenHeight = window.innerHeight;

var allStores = [];
//array of opening hours
var openingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
//creates table and first row
var table = document.getElementById("salesTable");
//Object Constructor Method
function Store(location, minCust, maxCust, avgHrSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgHrSale = avgHrSale;
  this.hourlySales = [];
  this.createArrayOfSalesPerHour = function() {
    for (var i = 0 ;i < openingHours.length; i++) {
      this.hourlySales.push(Math.round(this.randNoCust() * this.avgHrSale));
    }
  };
  this.createArrayOfSalesPerHour();
  allStores.push(this);
}
//Store functions added
//This function generates a random number of customers per hour based on the min & max in each object
Store.prototype.randNoCust = function() {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Store.prototype.renderStore = function() {
  var row = renderChild(table, "tr");
  renderChild(row, "td", this.location);
  for(var i = 0; i < this.hourlySales.length; i++) {
    renderChild(row, "td", this.hourlySales[i]);
  }
  renderChild(row, "td", sumArray(this.hourlySales));
}

//This function finds the sum of all elements in an array
function sumArray(sumArr) {
  var total = 0;
  for(var i = 0; i < sumArr.length; i++) {
    total += sumArr[i];
  }
  return total;
}

//This function creates an element (with data if applicable) and appends it to the parent element
function renderChild(parent, elementType, data) {
  var element =  document.createElement(elementType);
  element.textContent = data ? data : "";
  parent.appendChild(element);
  return element;
}

//creates the table header
function renderHeader() {
  var row = document.createElement("tr");
  table.appendChild(row);
  renderChild(row, "th", "Location");
  for (var i = 0; i < openingHours.length; i++) {
    renderChild(row, "th", openingHours[i]);
  }
  renderChild(row, "th", "Totals");
}

//creates the table footer
function renderFooter() {
  let tTotal = 0;
  var row = renderChild(table, "tr");
  renderChild(row, "td", "Totals");
  for(var i = 0; i < openingHours.length; i++) {
    let total = 0;
    for(var j = 0; j < allStores.length; j++) {
      total += allStores[j].hourlySales[i]; 
    }
    tTotal += total;
    renderChild(row, "td", total);
  }
  renderChild(row, "td", tTotal);
}
//creates the table
function renderTable() {
  document.getElementById("salesTable").innerHTML = "";
  renderHeader();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].renderStore();
  }
  renderFooter();
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

renderTable();

//New Store Form
let submitFormButton = document.getElementById("newStore");
submitFormButton.addEventListener("submit", function(event) {
  event.preventDefault();
  //store all form values for use
  let inLocation = event.target.location.value;
  let inCustMin = event.target.mincust.value;
  let inCustMax = event.target.maxcust.value;
  let inAvgCSale = event.target.avgcookiesale.value;
  //create new store object & render to table
  new Store(inLocation, inCustMin, inCustMax, inAvgCSale);
  // this.renderStore();
  table = document.getElementById("salesTable");
  renderTable();
  // allStores[allStores.length-1].renderStore();
  // createSalesRow(allStores[allStores.length-1]);
  event.target.reset();
});
