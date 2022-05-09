// * Event Propagation Exercise

const container = document.querySelector('.container');
const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');
const heading2 = document.querySelector('.heading2');

// Just a little event listener to log a message when we click the h1. 
heading.addEventListener('click', sayHello)

function sayHello() {
  console.log('hi there kewl person!')
}

// Adding h2 elements dynamically to the container when we click the button.
btn.addEventListener('click', function() {
  const element = document.createElement('h2');
  element.classList.add('heading2');
  element.textContent = `Hi, I'm inside the container too`;
  container.appendChild(element)
})

// Notice that if we try to add an event listener to the h2 class, we get an error. The node doesn't exist when the page loads. 
// ! We can't add an event listener to an element that might not exist!

// So let's use some bubbling.
    // Put an event listener on the parent, and use the event object to find the target of the click event. 
    // Then we can access the dynamic element and manipulate it. 

function h2Stuff(e) {
  if (e.target.classList.contains('heading2')) {
    console.log(`we're clicking on a dynamically created heading`)
    // heading2.classList.add('blue') // Notice if we try this, event though the element exists now, we get an error - it can't access the classlist property. 
    e.target.classList.add('blue') // However, this works just fine!
  }
}

container.addEventListener('click', h2Stuff)