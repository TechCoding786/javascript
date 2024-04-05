/*
let greet = function(){
    console.log("Hello World");
    return 1;
}

console.log(greet());
*

/*
let greet = ()=>{
    console.log("Hello World");
    return 1;
}

console.log(greet());
*/

/*
let greeti = function(user){
     console.log("Hello"+user);
     return 1;
}
console.log(greeti('Navin'));
*/

/*

let greed = (user)=>{
  console.log("hello"+user);
  return 1;
}

console.log(greed("Atif"));
*/

const arr=[5,4,3,2,1];
/*
function greaterThan(x){
    return x>3;
}

const output = arr.filter(greatherThan);

console.log(out);

*/

/*
const output = arr.filter((x)=>x>3);
console.log(output);

*/

//*********This*********

const user ={
    username:"Atif",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        //console.log(this);
    }
}
 user.welcomeMessage();
// user.username="jack";
// user.welcomeMessage();

//console.log(this);//this return Empty object



/*
function chai(){
    let userName = "Hotesh";
    console.log(this.userName);//undefine
}
chai();
*/
/*
const chai = function (){
    let userName = "Hotesh";
    console.log(this.userName);// undefine
}
chai();
*/
/*
const chai =()=>{
    let userName = "Hotesh";
    console.log(this.userName);//Undefine
    console.log(this);// empty function
}
//chai();
*/

/*
let addTwo = (num1,num2)=>{
    return num1 + num2;   //Explicit return
}
console.log(addTwo(5,6));

*/

/*
let addTwo = (num1,num2)=>num1 + num2;  //implicit

console.log(addTwo(5,6));
*/

/*
let addTwo = (num1,num2) =>(num1 + num2);  //implicit

console.log(addTwo(5,6));
*/


let addTwo = () =>({username:"hitesh"});

console.log(addTwo());
