'use strict';


// task 1

var arr = ['cat', 'dog', 'giraffe'];
function searchArrayWord(array, value){
    console.log(array);
    for(var i = 0; i < array.length; i++ ){
        if (array[i] == value){
            console.log(true);
        }else{
            console.log(false);
        }
    }
};
searchArrayWord(arr, 'dog');


//task 2

var arr = [1, 2, 3, 7, 6, 9];
var total = 0;
for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
var avg = total / arr.length;
console.log(avg);


// task 3

var arr2 = [1, 3, 5, 6, 7, 9];
    for(var i = arr2.length-1; i >= 0;  i-- ){
        console.log(arr2[i]);        
};



// task 4 

var obj = {html:'HTML', css: 'CSS', js: 'ECMA'}
var arr1 = [];
for(var key in obj){
    arr1[key] = obj[key];
    console.log(key);
}


// task 5

var obj2 = {
    name: 'Ivan',
    phone: '+380991234567',
    address: '144 Shevchenko St.,ap.12',
    total: 830,
    weight: 2700,
    order: {  
        cup: {
            price: 100, 
            weight : 200,
        }, 
        spoon: {
            price: 30, 
            weight: 100,
        },
        kettle: {
            price: 550, 
            weight: 2000,
        },
        mug: {
            price : 150, 
            weight : 400,
        },
    },
};
for ( var key in obj2 ){
    console.log(key + ' : ' +obj2[key])
}