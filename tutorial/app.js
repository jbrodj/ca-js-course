let noz = 'noz'

let zy = 'zy'

let tozzy = 'tozzy'

console.log(noz + zy + ` ${tozzy}`)

let nozzytozzy = noz + zy + `  ${tozzy}`

console.log(typeof null)

// ** Reminder
// Primitive Data Types: String, Number, Boolean, Null, Undefined, Symbol
// Objects: Array, Function, Object
  // {typeof null} will get reported as an object because of a quirk from original JS, but it's not really an object. 

  // ** ===== Arrays =====

  const frienz = ['suz', 'stu', 'ron', 'don', 'shevon'];

  frienz[2] = 'disco stu';

  //** ===== Functions =====

  function doSomething() {
    for (let i = 0; i < frienz.length; i++)
    console.log(frienz[i]);
  }

  doSomething()

  // Function declaration
  function hello() {
    console.log(`Hello there ${frienz[0]}`)
  }

  // Function invocation
  hello()

  function hiThere(person) {
    console.log(`Hi there ${person}`)
    console.log('Hi there ' + person)
  }

  hiThere(frienz[4])

  console.log(hello)
  console.log(hello())

const wallHeight = 80;
  
  function calculate(value) {
    console.log('the value in cm is: ' + value * 2.54 + ' cm.');
    let newValue = value * 2.54;
    return `${newValue} cm.`;
  }

    const width = calculate(100)
    const height = calculate(wallHeight);

    const dimensions = [width, height]

    // Our function above doesn't have return, so we will get undefined here. Adding explicit return lets us see the evaluation. 
    console.log(dimensions)

    // ==========================================================================================================

    // ** Just to show the syntax difference between expressions and declarations. 

    // Function definition/declaration
    function addValues(num1, num2) {
      return num1 + num2;
    }

    const firstValue = addValues(3, 4)
    const secondValue = addValues(12, 34)

    // Function Expression instead!
    const addThings = function optionalFunctionName (num1, num2) {
      return num1 + num2
    }

    const thirdValue = addThings(23, 45)

    // Expression as an arrow buddy
    const multiply = (num1, num2) => num1 * num2
    // In-line does a return by default, can open a block {} and put the logic in there with an explicit return instead. 

    const fourthValue = multiply(12, 42598345)

    const values = [firstValue, secondValue, thirdValue, fourthValue];
    console.log(values)

    // **===== Objects =====

    // Can contain basically any data. Here there are strings, numbers, booleans, arrays, and methods. 

    const person = {
      name: 'Suz',
      lastName: 'Susanson',
      age: 40,
      address: '49 Noodle St',
      isKewl: true,
      frenz: ['Steve', 'Stu', 'Strahd', 'Strudel'],
      greeting: function() {
        console.log(`Hello my name is ${person.name}`)
      }
    }

    // Invoking the method!
    person.greeting()

    console.log(person.frenz)
