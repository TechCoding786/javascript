/*
const prompt = require('prompt-sync')();

var fname =prompt('Enter firstname : ');
var lname=prompt('enter lastname :');
console.log('fullName is',fname,lname);

*/

/*
// ***Variable in js****
let name =" sohail";
let age = 24;
let price = 557.99;
let a = null;
var y  ;
isFollow =true;
const PI = 3.14;
let x = BigInt("12345");
let z =Symbol('hello');
console.log(z);

console.log(PI);
console.log(y);
//console.log(name);
//console.log(age);
//console.log(price);
console.log(typeof PI);
console.log(typeof name);
console.log(typeof a);
console.log(typeof isFollow);
console.log(typeof y);
console.log(x);
console.log(typeof x);
*/
/*
let student = {
 fullName:"Atif sohail",
 age : 24,
 cgpa : 8.2,
 isPass :true,

};

console.log(student);
console.log(typeof student);
console.log(student["fullName"]);
//console.log(student.age);

student["age"] = student["age"]+1;

console.log(student.age);
console.log(student["age"]);

*/




//********STRING******

// let fullName ="Herley Davidson";
// console.log(fullName);

// console.log(fullName.length);
// console.log(fullName[0]);
// console.log(fullName[1]);
// console.log(typeof fullName);
// console.log(typeof fullName.length);
// console.log(fullName[fullName.length-1]);
// console.log(fullName[fullName.length-2]);




// concatenation

// let firstName = "Atif";
// let lastName ="Sohail";

//let fullName1 = firstName+lastName;
//console.log(fullName1);

// let fullName1 = firstName.concat(lastName);
// console.log(fullName1);

// Template Literals

// let specialString =`this is a template literal`;
// console.log(specialString);

// let obj={
//     item:"Pencil",
//     price:10,
// };
// let output =`the cost of${obj.item}is ${obj.price} Rupees`;
// console.log(output);

// let str ="Apna\nCollege";//12
// console.log(str.length);

//***toUpperCase*****

// let str1 ="ApnaCollege";
//console.log(str1.toUpperCase());

// let newStr=str1.toUpperCase();

// console.log(str1);
// console.log(newStr);

//***toLowerCase*****

// let str2 ="ApnaCollege";
// console.log(str1.toUpperCase());

// let newStr1=str2.toLowerCase();

// console.log(str2);
// console.log(newStr1);

//****trim()METHOD***

// let msg ="  Hello  ";
// console.log(msg.trim());
// console.log(msg);

//********SliceMethod *

// let string = " Pyaara";
// console.log(string.slice(1,4));//yaa

//****Replace Method*** *
/*
let sms =" i love coding and love you  ";
console.log(sms.replace("love","do"));
console.log(sms.replaceAll("love","do"));
console.log(sms.charAt(4));

//****Practise Question 
const prompt = require('prompt-sync')();

let fullName2 = prompt("Enter your full name without spaces");
let userName ='@'+fullName2+fullName2.length;
console.log(userName);

*/

//************Array in JS*****

//let marks  = [67,45,34,65,34,50,22,45,34,34,34,33];
//console.log(marks);
//console.log(marks.length);//property

let heroes =["ironman","hulk","spiderMan","Antiman"];

// console.log(heroes);
// console.log(typeof heroes);
// console.log(heroes[2]);
// console.log(heroes[100]);
//marks[1]=155;
//console.log(marks);

// for(let i =0;i<heroes.length;i++){//for  loop
//     console.log(heroes[i]);
// }

//for of

// for(let hero of heroes){
//     console.log(hero);
   // console.log(hero.toUpperCase());
// }


/*Practise Question  QQQQ.For given array with marks of students->
[85,97,44,37,76,60] Find average marks of entire class

*/
/*
let marks =[57,47,58,79,67,48];
let sum =0;
for(let val of marks){
    //sum+=val;
    //sum=sum+val;
}

let avg = sum / marks.length;
console.log(`avg marks of student=${avg}`);
*/

// practise Question  GIVE 10% DISCOUNT ON EACH PRODUCT
/*
let items =[250,645,300,900,50];

let i=0;
for(let val of items){

    console.log(`value at index ${i} = ${val}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer=${items[i]}`);
    i++;

}
*/
  //  other method
/*
for(let i = 0;i < items.length;i++){

    let offer=items[i]/10;

    items[i]-=offer;
}

console.log(items);

*/

// ARRAY METHOD
// *******PUSH METHOD****
let fooditems =["burger","momo","pizza","mouktail"];

// fooditems.unshift("sandwich","manchurian");

// console.log(fooditems);

//****POP METHOD*****

// let deletedItms=fooditems.shift();
// console.log(fooditems);

// console.log("deleted",deletedItms);
//console.log(`deleted items ${deletedItms}`);

//  ****TOSTRING METHOD*****
// console.log(fooditems);
// console.log(fooditems.toString());

// *****CONCAT  METHOD******


//let marvelHeroes =["thor","spiderman","ironman"];
//let dcHeroes = ["batman","superMan"];
//let indianHeroes =["shaktiman","Krish"];

//let hero=marvelHeroes.concat(dcHeroes,indianHeroes);

//console.log(hero);

//let indianHeroes =["shaktiman","Krish"];
//indianHeroes.push("sunnybahai");
//console.log(indianHeroes);


//****SHIFT METHOD *****

// let marvelHeroes =["thor","spiderman","ironman","thor"];

 //let val= marvelHeroes.shift()

 //console.log("delete",val);

 //**** SLICE METHOD

 //let marvelHeroes =["thor","spiderman","ironman","bomberman","bigbii"];

 //console.log(marvelHeroes);

//  console.log(marvelHeroes.slice(1,4));

 //**SPLICE METHOD******

//  let arr =[2,34,34,2,2,11,333,232,22];

//  console.log(arr.splice(2,0,50));
//  console.log(arr.splice(2,1,101));
//  console.log(arr);
 // console.log(arr.splice(4,0,5555));
 //console.log(arr);

//**********PRACTISE QUESTION******
/*
let company =["Bloomberg","Microsoft","uber","google","ibm","netflix"];
let deletedCompanyName =company.shift();
console.log("deleted Company Name="+deletedCompanyName);
company.splice("uber",2,"Ola");
console.log(company);
company.push("Amazon");
console.log(company);
*/


















