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