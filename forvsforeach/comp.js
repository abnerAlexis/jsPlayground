document.write('<h1>for Vs forEach</h1>');
let cars = ['Wolkswagen', 'Audi', 'Toyota', 'Honda', 'BMW', 'KIA', 'Hyundai', 'Ford', 'Tesla'];

document.write('<p>FOR LOOP - CARS</p>');
for (let i = 0; i < cars.length; i++) {
    document.write('<p>' + cars[i] + '<br></p>');
}

document.write('<p>FOREACH LOOP - CARS</p>');
cars.forEach(function(item) {
    document.write('<p>' + item + '<br></p>');
});