'use strict';

var a = 1;

function isNumberInRange(){
    
    if(a > 0 && a < 10){
        console.log(true);
    }else{
        console.log(false);
    }
}
isNumberInRange();



function isEven(a){
    if( a % 2 === 0 ){
        console.log(true);
    }else{
        console.log(false);
    }
}
isEven(2);



var value = +prompt('value?', '');
switch(value){
    
    case 0: 
    console.log(0);
    break;

    case 1:
    console.log(1);
    break;

    case 2:
    case 3:
    console.log(2, 3);
    break;
}


function min(a, b){

    if(a>b){
        return (b);
    }else{
        return (a);
    }
}
var test = min(5, 4);
console.log(test);
