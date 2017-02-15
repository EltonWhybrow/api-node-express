'use strict';

console.log(typeof "cheese");
console.log(typeof true);
console.log(typeof 3686343);
console.log(typeof "463763");

let a = 1;
console.log(a++); // prints 1 then increments!
console.log(a);
console.log(++a); // behave a s expected increments first

//  Equality
console.log(3 == "3"); // true
console.log(3 === "3"); // false

console.log(25 % 5); // no remainder
console.log(23 % 4); // remainder

console.log(2+2);

// afn
// // function(arguments) {
//   // body...
// }
// fn
// function methodName (arguments) {
//   // body...
// }

let color = 'red';

switch(color) {
  case 'yellow':
  console.log('Yellow');
  break;
  case 'green':
  console.log('Green');
  break;
  case 'red':
  console.log('Red');
  break;
  default:
  console.log('Dont know color');
}

// While loop ==========
console.log('Do while loop');
let counter = 5;
while (counter <= 10) {
  console.log(`The value is ${counter++}`);
}

// While loop ===========
console.log('Do While loop');
counter = 5;
do {
  console.log(`The value is ${counter}`);
  counter++;
} while (counter <= 10);

// For loop
console.log('For loop');
for (let x = 8; x <=10; x++) {
  console.log(`The value is ${x}`);
}


// Array Methods ========
//
// forEach =========
let forEachArray = [123, 342, 424, 4, 4244];

forEachArray.forEach(function(value) {
  console.log(value);
});

//ES6 way
forEachArray.forEach(value => console.log(value));

//Grades
console.log('Grades========');
let grades = [98, 87, 82, 74, 89];
let sum = 0;
grades.forEach(grade => sum += grade);

let average = sum / grades.length;
console.log(`Our average is: ${average.toFixed(0)}`);


// MAP =========
let array3 = [1, 2, 3, 4, 5];
let addone = [];

// let addOneMap = array3.map(function(value){
//   return value + 1;
// });

////ES6 way
let addOneMap = array3.map(value => value + 1);

console.log(addOneMap);



let vehicle = [
  { make: 'BMW', model: 'X3', year: '2011', is4WD: true},
  { make: 'BMW', model: 'X1', year: '2009', is4WD: false},
  { make: 'Nissan', model: 'Qashqai', year: '2015', is4WD: true}
];

let models = vehicle.map(vehicle => vehicle.model); //[ 'X3', 'X1', 'Qashqai' ]
console.log(models);


// FILTER ==========
// let filteredVehicles = vehicle.filter(function(vehicle) {
//   return vehicle.make === 'Nissan';
// });
// ES6
let filteredVehicles = vehicle.filter(vehicle => vehicle.make === 'BMW');
console.log(filteredVehicles);


// FIND =========
let findVehicle = vehicle.find(function(vehicle) {
  return vehicle.make === 'BMW'; //find first BMW found
})
console.log(findVehicle);
