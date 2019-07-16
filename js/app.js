"use strict";

// //Find screen height and set design
// var screenHeight = window.innerHeight;
// var sBar = document.getElementsByClassName("sidebar")[0];
// sBar.setAttribute(style.height, screenheight);

var openingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]; //array of opening hours

//store 1
var store1 = {
  location: "1st and Pike",
  // openingTime = {
  //   weekdays:
  //   weekends:
  // };
  // phone: "1(246)435-5555",
  minCustHr: 23,
  maxCustHr: 65,
  avgCookieSale: 6.3,
  randNoCust: randomNoCustomersHr,
  createArrayOfSalesPerHour: createArrayOfSalesPerHour
};

//Random number of customers per hour
function randomNoCustomersHr() {
  var min = Math.ceil(this.minCustHr);
  var max = Math.floor(this.maxCustHr);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}
console.log(store1.randNoCust()); //test

//Array of randomly generated sales per hour
function createArrayOfSalesPerHour () {
  var array = [];
  for (var i = 0 ;i < openingHours.length; i++) {
    array.push(Math.round(this.randNoCust() * this.avgCookieSale));
  }
  return array;
}
//calculate total 
var store1Array = store1.createArrayOfSalesPerHour();
 
//Create list of estimated sales by hour
for (var j = 0; j < openingHours.length; j++) {
  document.querySelector("ul");
  var node = document.createElement("LI");                 
  var textnode = document.createTextNode(`${openingHours[j]}: ${store1Array[j]}`);         
  node.appendChild(textnode);                              
  document.querySelector("ul").appendChild(node);     
}


// //store 2
// var store2 = {
//   location: "SeaTac Airport",
//   minCustHr: 3,
//   maxCustHr: 24,
//   avgCookieSale: 1.2,
//   randNoCust: randomNoCustomersHr,
//   createArrayOfSalesPerHour: createArrayOfSalesPerHour
// };

// //store 3
// var store3 = {
//   location: "Seattle Center",
//   minCustHr: 11,
//   maxCustHr: 38,
//   avgCookieSale: 3.7,
//   randNoCust: randomNoCustomersHr,
//   createArrayOfSalesPerHour: createArrayOfSalesPerHour
// };

// //store 4
// var store4 = {
//   location: "Capitol Hill",
//   minCustHr: 20,
//   maxCustHr: 38,
//   avgCookieSale: 2.3,
//   randNoCust: randomNoCustomersHr,
//   createArrayOfSalesPerHour: createArrayOfSalesPerHour
// };

// //store 5
// var store5 = {
//   location: "Alki",
//   minCustHr: 2,
//   maxCustHr: 16,
//   avgCookieSale: 4.6,
//   randNoCust: randomNoCustomersHr,
//   createArrayOfSalesPerHour: createArrayOfSalesPerHour
// };


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
