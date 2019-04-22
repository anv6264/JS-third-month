'use strict';

// task 1 
// 1)
var arr = [2, -5, 1, -2, 0, -3, 2, -14];
var filterArr = arr.filter(function(i){
    if (i >=0){
        return true;
    }else{
        return false;
    }
});
console.log(filterArr);


// 2), 3)

var newArr = filterArr.map(function(i){
    return Math.sqrt(i);
});
console.log(newArr);
 

// task 2 

var arr1 = [4, 3, 5, 5, 0, 4, 8, 6];

var result = arr1.reduce(function(sum, i){
    return sum + i;
}, 0);

console.log(result);


// task 3 

function summArguments() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
