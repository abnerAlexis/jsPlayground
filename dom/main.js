//Change the text in h1 tag
let mainTitle = document.querySelector('h1');
console.log(mainTitle.innerText);
mainTitle.innerText = 'THIS IS EPIC';
console.log(mainTitle.innerText);

let btn = document.querySelector('button');
btn.innerText = 'CLICK ME!';

let firstDiv = document.querySelector('section > div');
firstDiv.innerText = 'MANIPULATED!'