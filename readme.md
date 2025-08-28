1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


getElementById: this is return only one targeted "id"
                it has no index or on like array values
                it is unique

getElementsByClassName: this is return all elements with the specific class
                        it use index to access elements [0], [1] like this

querySelector: this return only first element that matches
               generally it perform for the css querySelector
               Returns a single element

querySelectorAll: this Selects all elements that match a (CSS selector)
                we can use here forEach or index


2. How do you **create and insert a new element into the DOM**?

a) find a parent  where i want to insert new element:
    const parent = document.getElementById("parentIDNAme");

b) Create a element:
    let newElement = document.createElement("div);

c) Add content inner newElement:
    newElement.innerText = "I am a new div";
    <<or you can add inner html also>>
    newElement.innerHtml = <p>this is anyhtml</p>;

d) insert newElement into  dom:
    parent.appendChild(newElement); //add the end of parent 
    parent.append(newElement);   // end
    

3.  What is **Event Bubbling** and how does it work?

Event Bubbling is  type of event propagation in Js.
When any event (like a click) happens on a child element, it first runs on that element > then moves up to its parent → then its parents parent > and so on, until it reaches the root (document).

How its Work:
html file:

<div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click </button>
</div>

js:

document.getElementById("child").addEventListener("click", function() {
  console.log("Child button clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent  clicked");
});

document.body.addEventListener("click", function() {
  console.log("Body is clicked");
});


Stop Bubbling::

event.stopPropagation();


4.  What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation is a technique where instead of attaching event listeners to multiple childlren, a single event listener is attached to their parent element. This parent listener detects events coming from its children using event bubbling.

good Performance: Fewer event listeners in the DOM

Dynamic Elements: Newly added children still trigger the parent listener

Cleaner Code: Avoid attaching multiple listeners



5. What is the difference between **preventDefault() and stopPropagation()** methods?


a) event.preventDefault():
    Stop  default browser behavior of an event like(it cant stop form button defult behavior),
     do NOT stop events bubbling process

b) event.stopPropagation():
     it can be stop event bubbling
     it does not stop browser defult behavior on an event
    







