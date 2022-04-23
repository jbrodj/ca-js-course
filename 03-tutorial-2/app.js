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

// Changing the reference changes the original too (and all references). 

// A tricky way around this is to use the SPREAD OPERATOR. 

let kitten = {name: 'frannie'};
let kitten2 = {...kitten}

kitten2.name = 'floofypants'

console.log(`the first value is ${kitten.name}, and the second value is ${kitten2.name}`)




// ** Null vs Undefined


// 'no value'
  // Undefined is essentially "javascript cannot find a value for this"
      // ie. variable without value; function with missing arguments; object with missing properties

  // Null is a way of explicitly setting something to have 'no value'

let newTotal = 20 + null;
console.log(newTotal) // This will evaluate... 20 + no value = 20

let newTotal2 = 20 + undefined;
console.log(newTotal2) // This throws back NaN... 20 + some undefined data = NaN



// ** TruthyFalsy

// All values are either truthy or falsy. 

// Falsy values
    // undefined
    // null
    // empty string '', "", ``
    // 0, -0
    // NaN

// Truthy values
    // Basically anything with an actual value.

let thing = undefined;
thing = null;
thing = false
thing = ''
thing = 0

// This variable will be implicitly false if it is undefined, NaN, null, so conditional won't run (and obviously if it's explicitly false). 
// If it has a value ie. a string/literal with characters in it, or non-zero number, object, etc.

thing = ' '

if (thing) {
  console.log(`yippee, it's trutheeeeeey`)
} else {
  console.log(`uh oh, it's falseeeeeeey`)
}

// The code {  if (thing) {...}  } means: Evaluate {thing}, and if it's true, then ...




// ** Ternary :o

  // Operators are classified by how many ~operands~ they have.

  // Unary operator ie. typeof
    console.log(typeof(thing)) // Unary because we only have one operand - the variable we're checking.

  // Binary operator ie. assignment
    let randomThingy = 3 + 1 + 9 + 0 // Binary because we have two operands - the declaration of the variable, and the assignment of whatever it's equal to.

    // Ternary operator - basically just a way to shorten conditionals.
      // condition ? (runs if true) : (runs if false)

const valueBuddy = 2 > 1; 

if (valueBuddy) {
  console.log('value is true');
} else {
  console.log('value is false');
}

valueBuddy ? (console.log('oh yeah')) : (console.log('oh no'))
// Same as above, but one line!




// ** Global vs Local Scope

// Important to avoid "name collisions" and modifying variables by mistake. 

// Ex. Modify by mistake. Using a variable globally. Using a variable inside a function accidentally named the same thing.

let namerino = 'boziferous'

function superSecretFunction() {
  const age = 25;
  // Keyewording a new variable protects them in a code block, if you just initialized a variable without let/const, JS would create a global variable by default, which would be accessible outside the block (as long as the function has been invoked - the variable won't exist until the function has run once).
  // For ex.
  unprotecc = 'uh oh, this is global?!'
}

if (true) {
  console.log(`yup, name is ${namerino}`)
  // console.log(age) // Can't access this here bc of scope - get reference error! 
}

superSecretFunction()
console.log(`Hi there, I'm ${namerino}`) // The variable in the function modifies our global variable! 
console.log(unprotecc)

// Note that var behaves differently than let/const wrt local scope. 




// ** Variable Lookup

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;
  return result
}

console.log(add(3,4))
console.log(globalNumber)

// When we invoke a variable in a block, JS is going to look at the local scope for something with that name, if not found, looks globally for something with that name. 
// Note how there are two different variables called 'globalNumber' with different values. 




// ** Callback Functions & Higher Order Functions

// Functions are first-class objects. Functions can be stored in a variable, can be passed as an argument to another function, can be returned by another function (in a closure). 

    // Higher order function - accepts another function as an argument or returns another function as a result. 

    // Callback function - passed to another function as an argument and executed inside that function. 

function greetMorning(name) {
  const myName = 'Brod'
  console.log(`Good morning ${name}, my name is ${myName}`)
}
function greetAfternoon(name) {
  const myName = 'Brod'
  console.log(`Good afternoon ${name}, my name is ${myName}`)
}

greetMorning('Steve')
greetAfternoon('Steve')

// This is obviously unneccesarily repetitive. Let's do some callbacks!

// Callback 1
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
// Callback 2
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

// Mama function
function greet(name, time) {
  // time(); // we can call our callback where we want to use it!
  const me = 'Brod';
  console.log(`${time(name)}, my name is ${me.toUpperCase()}`);
  // We're running the morning function by calling the time() parameter, and passing it name. 
}

greet('Suz', morning)
greet('Fran', afternoon)
// Note that in a callback, we're not invoking it, just referencing it. The point is, we decide when it runs within the higher order function body. 