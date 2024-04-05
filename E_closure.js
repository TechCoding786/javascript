/*
function outer(){

   var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}
//outer()();// this two parenthesics calling the inner function at the same line

var close = outer();//just we call the outer fn this return inner function.
close();
*/

/*
function outer(){

     function inner(){
         console.log(a);
     }
     var a=10;
     return inner;
 }

 var close = outer()
 close();
 */

 /*

 function outer(){

    function inner(){
        console.log(a);
    }
    let a=10;
    return inner;
}

var close = outer()
close();

*/
/*
function outer(b){

    function inner(){
        console.log(a,b);
    }
    let a=10;
    return inner;
}

var close = outer("hello shail")
close();
*/

/*
function outest(){
    var c =  32;

  function outer(b){

    function inner(){
        console.log(a,b,c);
    }
    let a=10;
    return inner;
}
return outer;
}
var close = outest()("hello shail");// when this outest is call then return the outer fn and outer function 
                                     //will be here. when we call this it gives us  inner function
close()
*/

/*
function outest(){
    var c =  32;

  function outer(b){

    function inner(){
        console.log(a,b,c);
    }
    let a=10;
    return inner;
}
return outer;
}
let a=100;
var close = outest()("hello shail");
close()
*/

/*
function outest(){
    var c =  32;

  function outer(b){

    function inner(){
        console.log(a,b,c);
    }
    
    return inner;
}
return outer;
}
let a=100;
var close = outest()("hello shail");
close()

*/
/*
function outest(){
    var c =  32;

  function outer(b){

    function inner(){
        console.log(a,b,c);
    }
    
    return inner;
}
return outer;
}
//let a=100;
var close = outest()("hello shail");
close();

*/
/*
function counter(){
    var count =0;  // its like we hidding the data and we have the privacy over this count and it can only be achieve through function
    function incrementCount(){
    count++;
}
}
console.log(count);

*/

/*
function counter(){
    var count =0;  // its like we hidding the data and we have the privacy over this count and it can only be achieve through function
     return function incrementCount(){
      count++;
      console.log(count);
  }
}

var counter1 = counter();
counter1();
*/
/*
function counter(){
    var count =0;  // its like we hidding the data and we have the privacy over this count and it can only be achieve through function
     return function incrementCount(){
      count++;
      console.log(count);
  }
}

var counter1 = counter();// it will create as a new counter
counter1();

var counter2 = counter(); //it create new independent copy itself
counter2();
*/



function Counter(){
    var count =0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();


