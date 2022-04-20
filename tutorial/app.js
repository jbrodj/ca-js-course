// Some quick review

let noz = 'noz'

let zy = 'zy'

let tozzy = 'tozzy'

// console.log(noz + zy + ` ${tozzy}`)

// let nozzytozzy = noz + zy + `  ${tozzy}`

// console.log(typeof null)

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

  // doSomething()

  // Function declaration
  function hello() {
    console.log(`Hello there ${frienz[0]}`)
  }

  // Function invocation
  // hello()

  function hiThere(person) {
    // console.log(`Hi there ${person}`)
    console.log('Hi there ' + person)
  }

  // hiThere(frienz[4])

  // console.log(hello)
  // console.log(hello())

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
    // console.log(dimensions)

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
      frenz: ['Steve', 'Stu', 'Stede', 'Strahd', 'Strudel'],
      greeting: function() {
        console.log(`Hello my name is ${person.name}`)
      }
    }

    // Invoking the method!
    person.greeting()

    console.log(person.frenz)



    // ** ===== Conditionals =====

    // If statements 

    // if(true) {
    //   console.log('wat happen')
    // }

    // if(person.frenz.length > 0) {
    //   console.log(person.frenz.length)
    // }

    // The ! operator

    let value = false

    if (!value) {
      console.log('value is a lie!!!!')
    }

    // Fun...ction

    function score(ourTeam, otherTeam) {
      if(ourTeam > otherTeam) {
        console.log('woooooooo')
      } else {
        console.log('booooooourns')
      }
    }

    score(1, 2)

    // Checking equality

    const num1 = 4;
    const num2 = 4;

    const chek = num1 == num2;
    console.log(chek)



    // ** Logical operators

    // ||, &&, !

    if(num1 == num2 && num1 > 0) {
      console.log('ohyeah!');
    }


    // ** Switch Statements

    // Consider example:
    const dice = 1;

    if(dice === 1) {
      console.log('you got a 1');
    }

    else if (dice === 2) {
      console.log('you got a 2');
    }

    else {
      console.log(`you didn't even roll, silly!!!`);
    }
    

    // Using a switch statement instead:

    // We're checking the param given for strict equality with whatever comes after the word case. Ie the number 1, or the string of 'fell off the table'

    switch (dice) {
      case 1: 
        console.log('you got a 1');
        break;
      case 2: 
        console.log('you got a 2');
        break;
      case 'fell off the table':
        console.log('oooooops, roll again')
        break;
      default: 
        console.log(`you didn't even roll, silly`)
    }



    // ** Loops!


  // While loop
    // Runs as long as the condition in parentheses is true. 

  let amt = 10;

  while (amt > 8) {
    console.log('I have ' + amt + ' dollars, yaaahoooo!');
    amt --
  }


  // Do while loop
    // Will always run the DO block once! Then checks the WHILE condition, and either runs or doesn't based on that condition. 

  let money = 0;

  do  {
    console.log('you have ' + money + ' dollars.');
    money++;
  } while (money < 2)


  // For loop

  let i;

  for(i = 0; i < 2; i++) {
    console.log('woah, i is equal to ' + i + ' now!')
  }



  // ** String properties & methods
    // JS creates a wrapper string object for the string, we can do cool stuff. 
      // The value of -1 is evaluated if you check for something that doesn't exist in a string. Ie, if you check for an uppercase 'P' in 'pietrov.

  let kewlPerson = 'pietrov';
  const prelude = 'gee, ';

console.log(kewlPerson.charAt(0))
console.log(kewlPerson.includes('etrov'))
console.log(kewlPerson.concat(' peterson'))
console.log(prelude.concat(kewlPerson.concat(' sure loves strings omg omg!!!')).toUpperCase())
console.log(prelude.concat(kewlPerson.concat(' sure loves pizza!')).toUpperCase().length)

let something = '      what, why, what is happening? So many spaces!      '
console.log(something.length)
console.log(something.trim().length) // .trim() cuts white space from the beginning and end of a string!! Neat!
console.log(something.startsWith('what'))
console.log(something.trim().toUpperCase().startsWith('WHAT'))

console.log(kewlPerson.slice(0,3)) // Slice starts at the first argument, and  runs a number of characters equal to the second argument, returning a new string. 
console.log(something.trim().split(' ')) //Split returns an array populated with the characters of the string, separating at the character given as argument (empty string to make it spilit every character). 
console.log(kewlPerson.split(''))