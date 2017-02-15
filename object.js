//Object literal
var truck = {
  // props
  make: 'dodge',
  wheels: 4
}

//Bracket notation
console.log(`I have a ${truck['make']}, that has ${truck['wheels']} wheels`);
//Dot notation
console.log(`I have a ${truck.make}, that has ${truck.wheels} wheels`);


//Object literal
var employee = {
  //props
  firstname: 'Joe',
  lastname: 'Blow',
  //method
  fullname: function (){
    return `${this.firstname} ${this.lastname}`;
  }
};

console.log(`Our IT director is called ${employee.firstname}`);
console.log(`His full name is: ${employee.fullname()}`);

//Object constructor function
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getFullDescription = function() {
    return `${this.make} ${this.model} ${this.year}`;
  };
}
///create instances with the new keyword
let myCar = new Vehicle("BMW", "X3", "2011");
let wifesCar = new Vehicle("Nissan", "Qashqai", "2014");

console.log(myCar.year, wifesCar.make);
console.log(wifesCar.getFullDescription());
console.log(myCar.getFullDescription());

//alternative without using the new keyword
// function createVehicle(make, model, year) {
//   return {
//     make: make,
//     model: model,
//     year: year,
//     getFullDescription: function() {
//       return `${make} ${model} ${year}`;
//     }
//   };
// }
//
//ES6 example of above
function createVehicle(make, model, year) {
  return {
    make,
    model,
    year,
    getFullDescription() {
      return `${make} ${model} ${year}`;
    }
  };
}

///create instances of createVehicle
let myCar2 = createVehicle("BMW", "X3", "2011");
let wifesCar2 = createVehicle("Nissan", "Qashqai", "2014");

console.log('my car 2 / ', myCar2.getFullDescription());
console.log('wifes car 2 / ', wifesCar2.getFullDescription());
console.log('my cars year / ', myCar2.year);
//end
