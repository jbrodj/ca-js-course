// * Form Submission

    // Submit Event Listener
  
  const form = document.getElementById('form');
  const name = document.getElementById('name');
  const password = document.getElementById('password');

  // Use the 'submit' argument for the event listener to listen for the submission.
      // We'll need to prevent default here obv.
      // We can access the value property of the input elements when the form submits. Yaahoooo. 
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('submitted.');
    console.log(name.value);
    console.log(password.value);
  })





// * Local Storage 

    // The web storage API is provded by the browser
    // Session storage and local storage have the same methods.
      // setItem, getItem, removeItem, clear
    // Session storage keeps data while that specific tab is open. 
    // Local storage holds on to the data even if the tab is closed.

    // We're going to set some values in local storage manually to show how it works.

    // First argument is the key, second is the value for that key. 
    // localStorage.setItem('name', 'Suz');
    // sessionStorage.setItem('name', 'Suz');

    localStorage.setItem('name', 'Suz');
    localStorage.setItem('friend', 'Bob');
    localStorage.setItem('job', 'Trapeze Artist');
    localStorage.setItem('address', '4598734 Reallylong Street');

    // Let's grab something from local storage and save it as a variable.
    const jobTitle = localStorage.getItem('job')
    console.log(jobTitle)
    
    // Let's delete something from local storage. 
    localStorage.removeItem('job');
    const anotherJob = localStorage.getItem('job');
    console.log(anotherJob);
    // Note that logging the original jobTitle variable here would still give us the value of the job, because it's set as a javascript variable; deleting it from storage after that value is assigned doesn't remove the value from the variable. 
    // But here we get null because we're assigning the variable after the value has been removed from local storage. 

    // Let's clear it all!! :o
    localStorage.clear();





// * Local Storage with Multiple Values

    // Above we were just using simple strings and storing them as key/value pairs. 
    // To store more complicated data like arrays, etc, there are some gotchas. 
    // We'll be using JSON.stringify() and JSON.parse()

  const friends = ['Suzanne', 'Roxanne', 'Duran Duran'];

  localStorage.setItem('friends', friends);

  const values = localStorage.getItem('friends');
  console.log(values);
  console.log(values[0]); // Gives us the first letter of the string, not the first index of the array.
  // Trying to store this like this, the value is just a string with all the array values. 
  // So if we tried to access this data, it wouldn't be an array anymore, makes it not useful. 

  // Instead:
    // JSON.stringify() will convert our values to a JSON string
    // And then we can use JSON.parse() to retrieve our values properly. 

  localStorage.setItem('friends', JSON.stringify(friends));

  const newValues = localStorage.getItem('friends');

  console.log(newValues); // Note that now we have an array!! Kind of****
  console.log(newValues[0]) 
  // But we still can't just access the data like we would an ordinary javascript array. 
  // This console.log just gets us the first [

  // The data is a string. Just formatted like an array so we can re-arrayify it when we need to access it. 

  // So let's store the data again. Using a JSON.parse method, and providing the specific localStorage as the argument.
  const actualValues = JSON.parse(localStorage.getItem('friends'))

  console.log(actualValues)
  // Yaaaahoooo, now we have an array! 


  // * Checking for a value in storage, and using it if it exists

  // let's declare an empty variable
  let fruits;

  // Check if there is a value for 'fruits' in local storage.
    // If that evaluates to true, assign the value of that JSON.parsed string to our variable.
    // If not, just assign empty array. 
  if(localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'))
  } else {
    fruits = []
  }

  console.log(fruits)

  // Let's add something to our array.
  fruits.push('apple')
  // Then push that array as a JSONstringification to local storage.
  localStorage.setItem('fruits', JSON.stringify(fruits))

  // Let's check again
  if(localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'))
  } else {
    fruits = []
  }

  console.log(fruits)