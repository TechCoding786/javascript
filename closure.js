/*
function x(){
    var a=10;
    function y(){
    console.log(a);
  }
  y();
}
x();
*/

/*
function x(){
    var a =function y(){
        console.log(a);
    }
    y();
}
x();
*/

/*
function x(){
    var a= 7;

    y();
}
x(function y(){
    console.log(a);
});

*/

/*

function x(){
    var a=7;
 function y(){
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);

*/


/*
function x(){
    var a=7;
    function y(){
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
z();
*/


/*

function x(){
    var a=7;
   return function y(){  // As simple as returning y
    console.log(a);
  }
  
}
var z = x();
console.log(z);
z();
*/

/*
function x(){
    var a=7;
    function y(){
    console.log(a);
  }
  a =100;
  return y;
}
var z = x();
console.log(z);
z();
*/
/*

function z(){
    var b =900;
    function x(){
        var a=7;
        function y(){
        console.log(a,b);
      }
     y();
    } 
    x();
}
z();

*/
