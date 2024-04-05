/*
function HigherOderFunction(maqsood){
    console.log("before callback is called");
    maqsood();
    console.log("After callback is called");
  }
  function callbackFunction() {
    console.log("Inside callback function");
  }
  HigherOderFunction(callbackFunction);

*/

/*
function higerOderFn(){
    return function(){
       console.log("return function is called");
   }
}
let returnFunction = higerOderFn();
  
  returnFunction();

  */

/*
const radius = [2,3,4,5,6,7,];

const area = function(radius){
    return Math.PI * radius * radius;
}
const circumference =function(radius){
    return 2 * Math.PI * radius;
}

const calculate = function(radius,logic){
    const output =[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
//console.log(radius.map(area));
 console.log(calculate(radius,area));

 //console.log(calculate(radius,circumference));

*/

/*
const radius =[5, 6, 1,4, 7 ,3];

// let result = radius.sort((a ,b) => a-b);
// console.log(" --->",result);

const area = (radius)=>{
    return Math.PI*radius*radius;
}
const diameter = (radius)=>{
    return 2*radius;
}

const output = radius.map(diameter);
console.log(output);

*/

/*
const arr =[2,3,4,5,6];

const output = arr.map(function (x){
    return Math.PI * x * x;
});

console.log(output);
*/


// const arr =[2,3,4,5,6];

// const output = arr.map( (r)=>{
//     return Math.PI * r * r;
// });

// console.log(output);



// function power(x,n) {
//     return (n==1) ? x : x * power(x,n-1);  // using recursion
//   }

//   let result = power(2,5);
//   console.log(result)


const arr =[
    {a:1, b:2},
    {b:2, c:3},
    {a:2, c:3},
    {b:2, a:3},
];

const output = arr.filter((x)=>x.a).map((item)=>{return{a:item.a}});

console.log(output);

// var Var = 2;//1
// let Var = 2;//1
// const Var = 2;//0Wrong//1right
if(Var==2){
    console.log("1");
}
else{
    console.log("0");
}
// var Var = 2;//WrongGuess:1//0right
// let Var = 2;//0
// const Var = 2;//0





// var Var = undefined ;//1
// let Var = undefined;//1
// const Var = undefined;//1
if(Var==undefined){
    console.log("1");
}
else{
    console.log("0");
}
// var Var = undefined;//1
// let Var = undefined;//Referencial error
const Var = undefined;//ReferenceError

// var Var = null ;//1
// let Var = null;//1
// const Var = null;//1
if(Var==null){
    console.log("1");
}
else{
    console.log("0");
}
// var Var = null//1

// let Var = null;//Referencial error
// const Var = null;//ReferenceError


