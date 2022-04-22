// ** Functions, return, if, arrays, for loop!

const gas = [20, 40, 100];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0
  for(let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  if (total > 100) {
    console.log(`uh oh, don't run outta money hunnie`)
    return total
  };

  console.log(`You're good bb!`)
  return total
}

const gasTotal = calculateTotal(gas)
const foodTotal = calculateTotal(food)
const randomTotal = calculateTotal([1, 3, 44, 23, 5, 1, 3])

// Log an object to give us all the info. Remember to RETURN values from the function, otherwise this will be undefined. 
console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal
  });