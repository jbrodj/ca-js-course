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
  namerino = 'steve'
  console.log(namerino)

  function nestedFunction() {
    namerino = 'poopypants'
    console.log(`why is my name ${namerino}? in this inner function`)
  }

  nestedFunction()
}

// if (true) {
  console.log(`yup, name is ${namerino}`)
  namerino = 'silly name'
// }

superSecretFunction()
console.log(`Hi there, I'm ${namerino}`) // The variable in the function modifies our global variable! 