// function statement//Function Declaration
//a();
//b();
// function a(){
//   console.log("a called");
// }
//a();
//Function expression

//  var b = function() {
//     console.log("b called");
//  }
 //b();

//Anonymous Function

//function (){  //Anonymous uses when fn use as value

//}


//Named function Expression
// var b = function xyz() {
//     console.log(xyz);
//  }
//  a();
//  b();
//  xyz();

 //difference  between Parameters and Argument
//  var b = function (param1, param2) {  //parameters
//     console.log("b called");
//  }
//a();
//b(1,2);//Argument

//First Class Function

/*
 var b = function (param1){
    console.log(param1);
 }

 b(function (){

 });

*/
/*
var b = function(param1){
    console.log(param1);
}

function xyz(){

}

b(xyz);

*/
/*
var b = function(parm1) {
    return function () {

    }
}
console.log(b());
*/

// the ablity use function as value and paased argument in another function and return as a function is knpwn as first class function

var b = function(parm1) {
    return function xyz() {

    }
}
console.log(b());