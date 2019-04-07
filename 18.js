'use strict';

var a = prompt ('enter a');
if (a === '1') {
    alert('Верно!');
}
else{
    alert('Неверно!');
}
console.log(a);



var item = prompt ("enter item")
if (item == false){
    alert("верно");
}else {
    alert("неверно");
}
console.log(item);

var message = (item == false)? true : false;
console.log(message);



a = prompt ('enter a');
if (a > 0 & a < 4){
    alert("верно");
}else {
    alert("неверно");
}
console.log(a);



a = prompt ('enter a');
var b = prompt ('enter b');
if (a > 3 & a < 12 || b >= 7 & b < 15){
    alert("верно");
}
else {
    alert("неверно");
}
console.log(a||b);



var month = prompt ('enter a number of a month from 1 to 12');
if (month <= 2 || month ==12){
    alert('it is Winter');
}else if(month >= 3 & month <= 5){
    alert('it is Spring');
}else if(month >= 6 & month <= 8){
    alert('it is Summer');
}else if(month >= 9 & month <=11){
    alert('it is Autumn');
}else if(month > 12){
    alert('incorrect number');
}


for (var i = 2; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log( i );
  }
}