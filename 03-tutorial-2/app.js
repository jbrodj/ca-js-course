// ** Reference vs Value
// Recall primitive (string, number, symbol, boolean, undefined, null) vs object (array, function, object)

// Assigning a value to a primitive data type, changes are made directly to that value - without affecting the original value. 

// Assigning non-primitive data to a variable, it is done by ~reference~ - changes will affect all of the references!

let number = 1;
let number2 = number;
number2 = 7
console.log(`the first value is ${number}, and the second value is ${number2}`)

// Here, reassigning number2 to another value just changes the value of number2, number is totally unaffected.
  // We're changing its value!


let person = {name: 'bob'};
let person2 = person;

person2.name = 'suz'

console.log(`the first value is ${person.name}, and the second value is ${person2.name}`)

// Changing the reference changes the original too. 