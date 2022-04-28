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




  // * Navigate the Dom - Children 

      // Target the list items without using methods - traverse dom tree instead.
          //  We can navigate with: 
              // childNodes, children, firstChild, lastChild.
              // Careful with childNodes - returns all child nodes of the selected element - including whitespace, which is treated like a text node.
              // In some cases, the first or last child happens to be whitespace - so be careful with firstChild and lastChild too. 

    const resultUl = document.querySelector('#result');

    const allChildren = resultUl.childNodes;

    console.log(allChildren) // Notice white space included in the ul children. 

    const children = resultUl.children;

    console.log(children) // Gives us am object containing each of the child elements. 
    console.log(children[1].textContent) // digging into the object to get some data. 

    console.log(resultUl.firstChild) // Notice both of these give us a text node representing whitespace. 
    console.log(resultUl.lastChild)




  // * Navigate the Dom - Parent

      // Self explanatory, we can access the parent node of something.

    const specialBuddy = document.getElementById('h2')

    console.log(specialBuddy)
    console.log(specialBuddy.parentElement) // We can grab the parent node!
    console.log(specialBuddy.parentElement.parentElement) // And chain the properties to keep going up the tree.

    const parentDiv = specialBuddy.parentElement;

    parentDiv.style.backgroundColor = 'tomato';




  // * Navigate the Dom - Sibling

      // We can access sibling nodes using nextSibling and previousSibling.
          // These will both return text nodes from whitespace!

    const first = document.querySelector('.first');

    console.log(first.nextSibling.nextSibling); // We can string these too. 

    const whitespace = first.nextSibling;
    whitespace.textContent = 'Oh no, this whitespace has text in it!!!! AAHHHHH!!! >:o'
    console.log(whitespace.textContent)




  // * Navigate the Dom - Element Sibling

      // We can skip to real elements using nextElementSibling and previousElementSibling

    const next = first.nextElementSibling;

    next.style.letterSpacing = '9px';
    next.style.textAlign = 'center';




  // * nodeValue

        // Another way to get the text content property. 

    const item = document.getElementById('h2');
    const value = item.nodeValue;

    console.log(item.firstChild.nodeValue) // Have to dig to firstChild for some reason.




  //* textContent

      easyValue = item.textContent;
      console.log(easyValue)




  // * getAttribute() / setAttribute()

      // Methods that let you access and set HTML attribute values.
        // getAttribute takes a string querying the attribute you want.
        // seyAttribute takes two strings. One accessing the attribute, and one setting its value.

  // Grab an element
  const firstOne = document.querySelector('.firstBuddy')

  // Store the attribute to use.
  const classValue = firstOne.getAttribute('id')
  console.log(classValue)

  // Grab an element
  const link = document.getElementById('link')
  // Store the value
  const showLink = link.getAttribute('href')
  console.log(showLink)

  // Grab the li with the anchor.
  const linkLi = document.getElementById('linkLi')

  // Let's target the last buddy.
  const lastBuddy = linkLi.nextElementSibling;

  // Set an attribute.
  lastBuddy.setAttribute('class', 'first')
  lastBuddy.textContent = 'hey, now I have an attribute too! :D' // We dynamically changed the text content!

  // Let's grab everything with a class of first.
  const links = document.querySelectorAll('.first')
  console.log(links); // notice there are two nodes with a class of first!




  // * classList() / className()

