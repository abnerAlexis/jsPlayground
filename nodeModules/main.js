const circle = require('./circle.js');
const square = require('./square.js');
let r = 3;

//Circle
//`` are used bcs string includes variables.
console.log(`Circle with ${r} meters radius, has the area of ${circle.area(r)} meter square and ${circle.circumference(3)} meters circumference.`);

//Square
let side = 5;
console.log(`Square with the side of ${side} meters has ${square.squareArea(side)} meters area and ${square.squareCircumference(side)} meters of circumference.`);
