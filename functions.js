sayHi(); //hoisted
sayHiWithParam('Elton'); //hoisted

function sayHi() {
  console.log('Well, Hello - there');
}


function sayHiWithParam(name) {
  console.log(`Well, Hello - there ${name}`);
}

// sayHi();
// sayHiWithParam('Elton');

function AddThreeNumbers (a, b, c) {
  return a + b + c;
}
let result = AddThreeNumbers(10, 20, 20);
console.log(result);


function sayHello(firstname,lastname) {
  return `Well,hello ${firstname} ${lastname}`;
}
let greeting = sayHello('Colin', 'Jared');
console.log(greeting);


// Function Expressions  - anonymous function
let sayGreeting = function() { // anonymous functions dont get hoisted
  return 'Well this is anoying mous function';
}
console.log(sayGreeting()); //cant be up top

// IIFE Immediatley invoked fiunction Expressions
let sayGreeting2 = (function() {
  return `Hi how are you?`;
}());
console.log(sayGreeting2);


let sayGreeting3 = (function(firstname, lastname) {
  return `Hi how are you? ${firstname} ${lastname}`;
}('Elton', 'Whybrow'));
console.log(sayGreeting3);

// Phat arrow functions
let speakNames = (firstName, secondName) => `The spoken names are ${firstName} ${secondName}`;
 // let speakNames = firstName => `The spoken names are ${firstName}`;

console.log(speakNames('Elton', 'Whybrow'));
