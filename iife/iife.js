//iife with arrow function.
(() => {
  document.write(`Iffy in arrow function<br>`)
})();

//iife with function keyword
(function () {
  document.write(`Iffy in a method with function keyword<br>`);
})();

//iife with a function name - allows recursion
(function myIIFE() {
  num++;
  document.write(`Number: ${num}<br>`);
  return (num !== 5) ? myIIFE(num) : document.write(`Done!<br>`)
})(num = 0);

//Isolated declaration within the function
(() => {
  const statement = 'isolated declaration within the function';
  const greeding = 'Hello from inside IIFE';
  document.write(`${statement}<br>`);
  document.write(`${greeding}<br>`);
})();

const increment = (() => {
  let counter = 0;
  const credits = num => document.write(`I have ${num} credits.<br>`);
  return () => { counter++; credits(counter); }
})();

increment(); //I have 1 credits.
increment(); //I have 2 credits.
increment(); //I have 3 credits.


//Module pattern
const Score = (() => {
  let count = 0;

  return {
    current: () => { return count; },
    increment: () => { count++ },
    reset: () => { count = 0 },
  }
})();

function getIncreasedScore() {
  Score.increment();
  return Score.current();
}

document.write(`${getIncreasedScore()}<br>`);
document.write(`${getIncreasedScore()}<br>`);
document.write(`${getIncreasedScore()}<br>`);
document.write(`${getIncreasedScore()}<br>`);

Score.reset();
document.write(`${Score.current()}<br>`);

//Reveraling Pattern - Variation of the Module Pattern
const Game = (() => {
  let count = 0;
  const current = () => { return `Game score is ${count}.<br>` };
  const increment = () => { count++ };
  const reset = () => { count = 0 };

  return {
    current: current,
    increment: increment,
    reset: reset,
  }
})();

Game.increment();
document.write(Game.current()); //Game score is 1.

Game.increment();
document.write(Game.current()); //Game score is 2.

Game.increment();
document.write(Game.current()); //Game score is 3.

Game.reset();
document.write(`Reseting score.<br>`);
document.write(Game.current()); //Game score is 0.

//Injecting a namespace object
((namespace) => {
  namespace.count = 0;
  namespace.current = function () {return `App count is ${this.count}<br>`;}
  namespace.increment = function () {this.count++;}
  namespace.reset = function () {this.count = 0;} 
})(window.App = window.App || {});
App.increment();
document.write(App.current()); // App count is 1

App.increment();
document.write(App.current()); // App count is 2

App.increment();
document.write(App.current()); // App count is 3

App.increment();
document.write(App.current()); // App count is 4