
getName();

console.log(getName);


// var x= 7;

//var getName=() =>{
//     function getName(){
//     console.log("hi javaScript");
// }
// var getName2 =() =>{
// function getname2(){

// }

// const a = {
//     name : "Test",
//     age : 20, 
//     number: 32,
// };

// let b = {};
// b = {...a} ; 
// a.age = 34;
// console.log(b.age);


// let a = 10; 
// setTimeout(() => {
//     console.log('Hello');
// });

// console.log(a);



// How java Script is works
/*
var x = 1;
a();
b();

console.log(x);

function a(){
    var x= 10;
    console.log(x);
}

function b(){
    var x= 100;
    console.log(x);
}
*/

// Shortest program in js
/*
var a = 10;
function b(){
    var x=10;
}
*/

  // UNDEFINE VS NOT  DEFINE
// console.log(a);// Undefine
// var a = 6;
// console.log(a);//6
// console.log(x);// not  define



// var a;

// console.log(a);
// a=10;

// if(a===undefined){
//     console.log("a is undefine");
// }
//   else{
//     console.log("a is not define");
//   }


//******** THE SCOPE CHAIN ********
/*

function a() {
    var b=10;
    c();
    function c(){
    console.log(b);
    }
}

//var b=10;
//console.log(b);
a();

*/

//****** let and const******
/*
//console.log(b);//undefne
console.log(a);// can't access a before initializing
var b =10;
console.log(b);
*/

/*

let a = 10;
console.log(a);
var b =100;

*/

/*
console.log(a);
               //on the console
let a = 10;//this.a op undefine

var b = 100;//this.b  op 100
*/

/*

let a=10;
let a=100;
console.log(a);//SyntaxError: idetifier 'a' has already been declere

*/
/*
let a;

const b ;//SyntaxError: Missing initializer in const declaration
b=130;/SyntaxError: Missing initializer in const declaration

a=10;
console.log(b);//SyntaxError: Missing initializer in const declaration
*/


let a=12000;

const b=1000;

b=100000;//TypeError: Assignment to constant variable.

console.log(a);



/*
console.log(a);//ReferenceError: Cannot access 'a' before initialization
let a=1880;

*/
/*

console.log(x);
let a=187;//ReferenceError: x is not defined

*/

//************Scope,Block 
/*
{
    //Compound statement
    var a = 10;
    console.log(a);
}
//if(true)//SyntaxError: Unexpected end of input

if(true) true;

*/
/*
if(true){
    var a=10;
    console.log(a);
}
*/
/*
{
    var a =10;
    let b =20;
    const c =30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);//ReferenceError: b is not defined
console.log(c);
*/

// ******shadowing*******
/*

var a =100;
{
    var a =10;
    let b =20;
    const c =30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);//10

*/
/*
let b =100;
{
    var a =10;
    b =20;
    const c =30;
    console.log(a);    
    console.log(b); //20
    console.log(c);
}
console.log(b);//100
*/
/*
const c =100;
{
    var a =10;
    let b =20;
    const c =30;
    console.log(a);    
    console.log(b); 
    console.log(c);
}
console.log(c);//100
*/

/*

const c = 100;
function x(){
    const c = 30;
    console.log(c);
}
x();

console.log(c);
*/

//*********illegal shadowing***********
/*
let  a=10;
{
    var a=20;   //ilegal shadowing// syntexError:Identifier 'a' has already been declare.
}
*/
/*
let  a=10;
{
    let a=20;  // llegal shadowing
}
*/
/*
var  a=10;

{
    let a=20;  // legal shadowing
    console.log(a);
}
console.log(a);

*/
/*
const a = 20;
{
    const a =110;
    console.log(a);//110
}
console.log(a);//20
*/
/*
let a = 20;
function x(){
  var a=10;
}
*/
/*
const a = 20;
{
    const a=100;
    {
        const a =200;
        console.log(a);//200
    }
}

*/

/*
const a = 20;
{
    const a=100;
    {
        
        console.log(a);//100
    }
}
*/

/*
const a = 20;
{
    const a=100;
    {
        const a =200;

    }
}
console.log(a);//20
*/