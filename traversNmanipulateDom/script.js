//Add innerText into an element
// let mainTitle = document.querySelector('h1');
// document.write(`title: ${mainTitle.innerText}<br>`);

// mainTitle.innerText = 'DOM Manipulation';

//Creating an element(button)
// let container = document.querySelector('#d1');
// let button = document.createElement('button');
// button.innerText = 'CLICK ME!';
// container.appendChild(button);

//Removing element(p) from the DOM.
let elementToRemove = document.querySelector('p');
elementToRemove.parentElement.removeChild(elementToRemove);
