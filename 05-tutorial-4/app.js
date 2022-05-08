// * Events Continued





  // * Function Reference - callback for event listner
      
      // Main thing to remember is: We're using the function reference as an argument, we're not invoking it! We want the event listener to choose when/if the function runs.

    // Let's grab a heading and a button.
    const subHead = document.querySelector('h2');
    const btn = document.getElementById('btn');

    // btn.addEventListener('click', function() {console.log('woooot')}) // Test our listener inline

    // Callback function
    function changeColors() {
      // Check if the h2 has class of 'blue' - if so, remove it, if not, add the class to its classList.
      subHead.classList.contains('blue')? subHead.classList.remove('blue') : subHead.classList.add('blue');
    }

    // Adding the event listener for click, referencing the changeColors callback. 
    btn.addEventListener('click', changeColors);





  // * Mouse Events

      // click - fires after full action occurs. Have to let the button unclick.
      // mousedown - button is pressed.
      // mouseup - button is released.
      // mouseenter - cursor is moved onto an element.
      // mouseleave - cursor moves off of an element.

    // Using the nodes from the section above...

    btn.addEventListener('click', function() {console.log('click')})
    btn.addEventListener('mousedown', function() {console.log('down')})
    btn.addEventListener('mouseup', function() {console.log('up')})

    // The mousedown always fires first, which makes sense, because the other two haven't occured yet. 
    // Then the mouseup fires, followed by the click.

    subHead.addEventListener('mouseenter', function() {subHead.classList.add('pale')})
    subHead.addEventListener('mouseleave', function() {subHead.classList.remove('pale')})





  // * Key Events

      // keypress - when the keystroke is activated, ie. if you hold the key down, every time a new character is created.
      // keydown / keyup - self explanatory. 

    const nameInput = document.getElementById('name');

    nameInput.addEventListener('keypress', function() {
      console.log('you press!!!')
    })
    nameInput.addEventListener('keydown', function() {
      console.log('you press down!!!')
    })
    nameInput.addEventListener('keyup', function() {
      console.log('you press up!!!')
      // console.dir(nameInput) /// Looking at the node object helps us find the property we want to log (ie. the value property).
      console.log(nameInput.value)
    })

    // These will run in the order of keydown -> keypress -> keyup.
    // Note that keys that do not produce a character will register as a keydown/keyup, but not as a keypress. 
        // Ie. backspace, capslock, tab, etc. 
        // Interestingly, tab logs a keydown, but not a keyup because by the time the key is released, the focus is no longer in the text input. 





  // * Event Object

      // We can use an argument to represent the event (typically e, or event), passed to the callback function given to an event listener.
      // This object has properties with useful info about the triggered event. 
          // event.target / event.currentTarget gives us the node object that the event is on.
          // event.type gives us the type of event that occurred (ie. click, etc)
      // Also has some useful methods. 
          // event.preventDefault for ex. Super duper useful with forms.

    const headerooni = document.querySelector('#eventSubhead');
    const buttorooni = document.querySelector('#eventButton');
    const link = document.querySelector('#link');

    // Consider a generic event listener. To target the element we're listening to, we have to re-target it with hardcode in the callback. 
    headerooni.addEventListener('click', function() {
      headerooni.classList.add('blue')
    })

    // Instead, let's use the event object to target using the event object's currentTarget property.. 
    buttorooni.addEventListener('click', function(event) {
      console.log(event.currentTarget)
      console.log(event.type)
      event.currentTarget.classList = 'beige';
    })

    // Example using a reference instead of inline callback.
      // Clicking a link with href of # is going to reload us to the top of the page. 
      // preventDefault will stop that behaviour and we can click our link in peace.
    function kewlNewCallback(e) {
      e.preventDefault();
      console.log('phew, no more reload')
    }

    link.addEventListener('click', kewlNewCallback);





  // * The this keyword, briefly...

      // We can target the object using the this keyword... But it's complicated. Here's an example where this will work.
      //! The this keyword WILL NOT work if we used an arrow function for our inline callback.
      // Also important to note that the event object has a lot more useful data. It's often going to be more useful than using the this keyword - unless all we need is the node object of the element we're listening to. 

    buttorooni.addEventListener('mouseup', function() {
      console.log(this.classList)
    })





  // * currentTarget vs target

      // currentTarget - always refers to the element to which the event handler has been attached to. 
      // target - identifies the element on which the event occurred. 

      // We have three buttons. One and three are just buttons with text. The second button has span elements nested inside the button. 

    // Let's grab all our new buttons - note that this gets us an array-like node object containing multiple node objects representing out elements. 
    const allNewButtons = document.querySelectorAll('.nestyButtons')

    // Let's loop over our allNewButtons nodelist to grab each button node object in it.
    // Then add event listeners to each one so we can see the behaviour of each one independently. 
    allNewButtons.forEach(function(button) {

      button.addEventListener('click', function(event) {

        console.log(event.currentTarget) //! Note that currentTarget gets us the button node object.
        console.log(event.target) //! Note that target gets us the span node if we click where the span happens to be.

        // So applying these style changes on click... 
            //* For currentTarget - they will apply to the button element because that's where the event listener lives.
            //* For target - If we click where the span is, ONLY the span element will get the style change, not the button.
        event.currentTarget.style.color = 'seagreen'
        event.target.style.fontSize = '40px'
      })
    })





  // * Bubbling, propogation, capturing

      