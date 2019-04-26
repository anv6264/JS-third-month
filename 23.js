'use strict';

// task 1

var date1 = new Date(); 
var date2 = new Date(2019, 3, 27);

var count = (+date2 - +date1)/60000;
console.log(count.toFixed());


// task 2 

function getSecondsToday() {
    var d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  };
getSecondsToday();
console.log(getSecondsToday());


// task 3

var date3 = new Date(2013, 0, 25);
console.log(date3.toLocaleString('en-US', {weekday:'long'}));


// task 4

var BD = +prompt('Введите дату Вашего рождения в формате YYYY-MM-DD');

/*var days_left = Math.ceil((BD.valueOf() - date1.valueOf())/86400000); */

function days_left(x, text){
    if (BD < date1){
        return Math.ceil((BD.valueOf() + 365 - date1.valueOf())/86400000)
        /*return BD + 365 - date1;*/
    }else{
        /*return BD - date1;*/
        return Math.ceil((BD.valueOf() - date1.valueOf())/86400000)
    };
};
days_left();
console.log(days_left);

