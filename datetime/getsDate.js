let today = new Date();
document.write("<p> This is " + today + ".</p>");

let mm = today.getMonth();
document.write("<p>Month: " + addZero(mm) + "</p>");

let dd = today.getDate();
document.write("<p>Date: " + addZero(dd) + "</p>");

let yyyy = today.getFullYear();
document.write("<p>Year: " + yyyy + "</p>");

let day = today.toLocaleString('en-us', {  weekday: 'long' });
document.write("<p>Day: " + day + "</p>");

let hh = today.getHours();
let min = today.getMinutes();
document.write("<p>Time: " + addZero(hh) + ":" + addZero(min) + "</p>");

function addZero(timeUnit) {
    if (timeUnit < 10) {
        timeUnit = '0' + timeUnit;
    }
    return timeUnit;
}