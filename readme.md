1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   => These are all Document Objective Model(DOM) selection methods in JavaScript.

   - getElementById: This method selects an element by its unique id. It returns a single element object.
   - getElementsByClassName: This method selects all elements with a given class name. It returns a HTML collection which is a live collection that means it updates automatically if the DOM chanhes. From the HTML collection, elements can be accessed like array.
   - querySelector: This method selects the first element that matches a CSS selector. It returns a single element.
   - querySelectorAll: This method selects all elements that match a CSS selector. It returns a NodeList.

2. How do you **create and insert a new element into the DOM**?
   => The process of creating and inserting a new element into the DOM:
- At first, we have to create a child element in the DOM
  const div = document.createElement('div');

- Then we have to select the parent element from the DOM
  const section = document.getElementById('section');

- Then we have to append the child element to the parent element
  section.appendChild(div);
