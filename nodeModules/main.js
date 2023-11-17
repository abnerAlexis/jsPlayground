const circle = require('./circle.js');
const square = require('./square.js');
const rectangle = require('./rectangle.js');
//IMPORT
// import { area, circumference } from './circle.js';
// import { squareArea, squareCircumference } from './square.js';
// import { rectangleArea, rectangleCircumference } from './rectangle.js';

//CIRCLE
//`` are used bcs string includes variables.
let r = 3;
console.log(`Circle with ${r} meters radius, has the area of ${circle.area(r)} meter square and ${circle.circumference(3)} meters circumference.`);

//SQUARE
let side = 5;
console.log(`Square with the side of ${side} meters has ${square.squareArea(side)} meters area and ${square.squareCircumference(side)} meters of circumference.`);

//Rectangle
let side1 = 8;
let side2 = 9;
console.log(`A/An ${side1}X${side2} rectangle's area: ${rectangle.rectangleArea(side1, side2)} circumference: ${rectangle.rectangleCircumference(side1, side2)}`);