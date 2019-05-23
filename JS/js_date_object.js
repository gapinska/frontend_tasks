var myDate= new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2);
var myFutureDate = new Date(2025, 12, 12);
//months 0- 11
console.log(myPastDate);
console.log(myFutureDate);

var exactTime = new Date (2019, 4, 15, 8, 50, 30);
console.log(exactTime);



var birthday = new Date(1988, 9, 5, 11, 15, 25);
//get the month of the date
console.log(birthday.getMonth());

console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getHours());
console.log(birthday.getTime());



