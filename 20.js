'use strict';


function Fib(n){
    if (n <= 0){
        return 0;
    }else if (n == 1){
        return 1;
    }else{
        return Fib(n-1) + Fib(n-2);
    } 
}
console.log(Fib(2));



var n = 1000;
var num = 0;
do{
    n = n/2;
    num++;
}while(n > 50);
console.log(num);














