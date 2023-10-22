let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i];
// }

// numbers.forEach(item => console.log(item));

//This prints more args. item, index number and array.
// numbers.forEach((item, i, arr) => console.log(i, item, arr));


//foreach() method --- check MDN for array and string methods.

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//calling the function to print days --- external function
// days.forEach(printDays);

// function printDays(i, item) {
//     console.log(item, i)
// }


//internal anonymous function
// days.forEach(function (item) {
//     console.log(item);
// });


//Arrow function
days.forEach( item => console.log(item) );

console.log('\n\n\n');
console.log(days);
console.log(JSON.stringify(days));


let anne = {
    name: 'Anne',
    age: 49,
}

console.log(anne);
console.log(JSON.stringify(anne));
