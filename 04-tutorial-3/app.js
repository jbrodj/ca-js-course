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

    const firstDude = document.querySelector('.first');

    console.log(firstDude.nextSibling.nextSibling); // We can string these too. 

    const whitespace = firstDude.nextSibling;
    whitespace.textContent = 'Oh no, this whitespace has text in it!!!! AAHHHHH!!! >:o'
    console.log(whitespace.textContent)




  // * Navigate the Dom - Element Sibling

      // We can skip to real elements using nextElementSibling and previousElementSibling

    const next = firstDude.nextElementSibling;

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




  // * classList / className

      // Properties that let us access and set class attributes of elements.
        // Be aware that setting className / classList using the assignment operator resets the whole class attribute string, doesn't add additional values. 
        // The classList property has methods for appending/modifying the class list. 
            // Give the method an argument of the class attribute string.
            // classList.add('') / classList.remove('')

    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');

    const classValues = first.className;
    console.log(classValues);

    first.className = 'text';
    second.className = 'text'; // Notice this gets overwritten by the next line. 
    second.className = 'colors';
    third.classList = 'text';
    third.classList.add('colors'); // Notice here we're adding this string to the class attribute.

    first.classList = 'text colors' // Setting more than one class in a string with classList, just string as normal in markup.
    first.classList.remove('colors') // Removing the string from the class attribute. 

    third.classList.add('kewl', 'neato', 'awesome') // Using the methods, multiple params are comma-separated.
    console.log(third.classList)

    let checker = third.classList.contains('colors') // Can also check whether or not a string is present in the class list.
    console.log(checker)




  // * Creating and appending elements!

      // Helpful methods for creating and appending content. 

        // * createElement('elementName')
        // * createTextNode('Text content')
        // * element.appendChild(childElement)

    // Grab our parent element.
    const resDiv = document.querySelector('#resultDiv');

    // Create empty element.
    const childDiv = document.createElement('div');

    // Create text node. 
    const bodyText = document.createTextNode('Woah, text in div!');

    // Append text 
    childDiv.appendChild(bodyText);

    console.log(childDiv.textContent);

    // Append div to page.
    resDiv.appendChild(childDiv);
    console.log(resDiv);

    // Let's add a heading.
    const subHeading = document.createElement('h3');
    const headingText = document.createTextNode('Wooooah dynamic heading over here!');
    subHeading.appendChild(headingText);
    resDiv.appendChild(subHeading);




    // * insertBefore('element', 'location)

        // Two arguments, the name of the element we're creating, and the place we want to add it before. 

    // Let's make a new element to sneak in ahead of another.
    const moreHeadings = document.createElement('h3');
    const moreHeadingText = document.createTextNode('Sneaky heading!');
    moreHeadings.appendChild(moreHeadingText);

    // Grab parent element (or body), pass the element, and the element you want it to sneak in before.
    resDiv.insertBefore(moreHeadings, childDiv);



    // * replaceChild('new', 'old')

        // Two arguments - the new element and the second is the old element. 

      // Grab an element. 
      const disappearingDiv = document.querySelector('.replace')
      const disappearingText = document.querySelector('.gone')
      console.log(disappearingDiv)

      // New heading
      const smolHeading = document.createElement('h4');
      const smolText = document.createTextNode('Smolboi')
      smolHeading.classList.add('blue')
      smolHeading.appendChild(smolText)

      // disappearingText element is replaced with smolHeading element.
      disappearingDiv.replaceChild(smolHeading, disappearingText)




    // * prepend() / innerText

    const headerooni = document.createElement('h2');

    // Give the heading text by giving a value to the innerText property.
    headerooni.innerText = `Woah I'm a prepended dynamic heading set with innerText!`;
    
    // Prepending is like append, but sends it to the beginning. 
    document.body.prepend(headerooni)




    // * remove / removeChild / running selector on nodes instead of document

    const removeADiv = document.querySelector('.remove');

    // All you need to do is run the method on the node!
    // removeADiv.remove();

    // To remove a child, we run the method on the parent, but we also need a valid way of selecting the specific child we want to remove. 

    //*Note that we're using the node object removeADiv instead of document as our starting point here!

    const removeAChild = removeADiv.querySelector('h2');
    // console.log(removeAChild)

    removeADiv.removeChild(removeAChild);




    // * innerHTML / textContent properties
        
        // We can set the content of a node pretty easily by assigning values to these properties. 
        // innerHTML a bunch of steps because we don't need to create each node separately. We can create the top level node, and give it html to create those child nodes automatically.

    const textList = document.getElementById('numOne');
    const textDiv = document.getElementById('numTwo');
    const textItem = document.getElementsByClassName('textItem');

    // Looking at the textContent property of a node with some text content.
    console.log(textDiv.textContent);

    // Looking at the innerHTML property of a node with some html content.
    console.log(textList.innerHTML);

    // Just a variable for some templating.
    const randomVariable = 'This is a templated text thingy from a variable'

    // Create a new element and give it content. 
    const newTextUl = document.createElement('ul');
    newTextUl.innerHTML = `<h3>We created this with innerHTML</h3><li class="textItem">Listerooni</li>
        <li>List-to-the-port</li><li>${randomVariable}</li>`

    textDiv.appendChild(newTextUl)





    // * Change CSS with the Style Property