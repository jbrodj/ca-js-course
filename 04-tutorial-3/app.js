// ** DOM

  document.body.style.backgroundColor = 'lightSkyBlue'

  document.body.style.color = 'yellow'

  document.getElementById('btn').style.color = 'tomato'

  
  // Window object
  console.log(window)
      // The window is the environment within the browser tab we're currently operating in. 
      // The window object is an array-like object (browser API) that gives us methods and stuff to use on our content.
      // Within the window object, we have the document. JS is always looking in the window object by default, so we don't need to write window.document... to access a node. 
      // While window represents the tab, the document represents the markup document. 
    console.log(document)


  // Accessing Nodes
    // Several methods for accessing elements to do something to them, or save them as JS variables. 
    // Pass a string containing the query text to the method.


  //* == getElementById ==

    const button = document.getElementById('btn')
    const name = btn.nodeName
    const css = btn.style

    console.log(button)
    console.log(name)
    console.log(css)

    const h1 = document.getElementById('title')

    h1.style.background = 'lightSeagreen'

    btn.style.backgroundColor = 'pink'


  //* == getElementByTagName ==

      // This gets us a node-list, which is an array-like object containing the elements matching the query. 

    const headings = document.getElementsByTagName('h2')

    console.log(headings)
    console.log(headings.length)

    // Since the node list works kinda like an array, we can access the elements like items in an array: 
    headings[0].style.color = 'tomato'
    headings[1].style.color = 'seaGreen'
    headings[2].style.color = 'rebeccaPurple'
    // We have access to the indexes, and .length, but array methods don't work on the node-list. 
    // However, we can still use a for loop to iterate on the node-list.

    // We could also transform our node-list to be able to use it as an array. 
        // Save a spread of the node list as a new array. Now we've got an array!
    const betterHeadingList = [...headings]

    console.log(betterHeadingList)
    betterHeadingList.pop()
    console.log(betterHeadingList)


  //* == getElementsByClassName ==

      // Similar to tagname, we're accessing multiple elements, so we're getting a node-list. 
      // So again, we have indexes and length property, but no array methods. 

    const listItems = document.getElementsByClassName('li');

    console.log(listItems);

    listItems[0].style.color = 'tomato';

    const specialItems = document.getElementsByClassName('special');

    specialItems[0].style.color = 'orange';


  // * == querySelector / querySelectorAll ==

      // Powerful because we can pass any css selector we want here as the parameter. 
          // Use . and # for classes and IDs. 
          // querySelectorAll allows you to use forEach!

  const result = document.querySelector('#result');
  console.log(result);

  result.style.backgroundColor = 'navy';
  result.style.padding = '2rem 0';

  const lastItem = document.querySelector('li:last-child');
  console.log(lastItem.textContent);

  const list = document.querySelectorAll('.li');

  // Woah! qSA lets you use forEach!!!
  list.forEach(function(item) {
    console.log(item.textContent)
  })