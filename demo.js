
const user ={
    firstName:"atif",
    lastName:"Sohail",
    fullName: function(){
       return console.log(`${this.firstName+this.lastName}`);
        
    },

    fullName1:()=>{
       return console.log(`${user.firstName+user.lastName}`);
        
    }
    
}
user.fullName1();


/*
const arr =[3,5,4,6,7];

function double(x){
    return x * 2;
}
var output = arr.map(double);
console.log(output);

var output = arr.map((x)=>x * 2);
console.log(output);

*/

/*
function add(num1,num2){
  return num1 + num2;
}
let sum = add(4,5);
console.log(sum);

let add1 = (num1,num2)=>(num1+num2);
console.log(add1(4,5));
*/




/*
let mult = function(num1,num2){
    return num1 * num2;
}
console.log(mult(2,3));

let mult1 =(num1,num2)=>{
    return num1*num2;
}
console.log(mult1(2,4));
*/
/*
let student ={
    firstName:"Atif",
    lastName:"Sohail"
};

let output = ()=>({firstName:"Atif"});

console.log(output());

*/



