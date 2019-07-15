usestrict;

//store 1
var store1 {
  location: "1st and Pike",
  minCustHr: 23,
  maxCustHr: 65,
  avgCookieSale: 6.3,
  randNoCust: randomNoCustomersHr
};

//store 2
var store2 {
  location: "SeaTac Airport",
  minCustHr: 3,
  maxCustHr: 24,
  avgCookieSale: 1.2,
  randNoCust: randomNoCustomersHr
};

//store 3
var store3 {
  location: "Seattle Center",
  minCustHr: 11,
  maxCustHr: 38,
  avgCookieSale: 3.7,
  randNoCust: randomNoCustomersHr
};

//store 4
var store4 {
  location: "Capitol Hill",
  minCustHr: 20,
  maxCustHr: 38,
  avgCookieSale: 2.3,
  randNoCust: randomNoCustomersHr
};

//store 5
var store5 {
  location: "Alki",
  minCustHr: 2,
  maxCustHr: 16,
  avgCookieSale: 4.6,
  randNoCust: randomNoCustomersHr
};

function randomNoCustomersHr() {
  min = Math.ceil(this.minCustHr);
  max = Math.floor(this.maxCustHr);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}