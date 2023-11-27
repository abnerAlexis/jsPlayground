let side1;
let side2;

module.exports.rectangleArea = (side1, side2) => {
    return side1 * side2;
};

module.exports.rectangleCircumference = (side1, side2) => {
    return 2 * (side1 + side2);
}