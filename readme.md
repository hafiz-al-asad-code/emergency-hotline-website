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

3. What is Event Bubbling and how does it work?
   => Event Bubbling: It is a mechanism in the DOM where an event is first triggered on the target element then it automatically propagates upto its parent elements in the hierarchy.

- How it works:
  a. First event is triggered on the target element.
  b. Then it propagates to its parent elements upto the root of the DOM.
  c. In the following path, if it finds same type event in the parent elements, those events will also be triggered.

4. What is Event Delegation in JavaScript? Why is it useful?
   =>

- Event Delegation: It is a technique in JavaScript where event listener is assigned to the parent element so that its child elements can handle event through event bubbling, without appling event listener to individual child element.

- Event Delegation is useful because-
  a. If we apply event listener on individual child element then it will be time consuming.
  b. If we use for loop technique but there are so many child elements then program will take much time to execute code.
  c. If we use Event Deligation then we don't need to add event listener to all child elements individually. We can handle event to all child elements just from a single event listener of the parent element and it is time effiecient.

  5. What is the difference between preventDefault() and stopPropagation() methods?
     =>
     - preventDefault(): It stops the default browser action of any element.
     - stopPropagation(): In event bubbling, if it is needed to prevent the event from propagating to the parent elements then stopProgation() method is used. It stops the event from bubbling further up the DOM tree.
