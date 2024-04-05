//******SPREAD SYNTAX******//

/*
spread synteX allows an iterable such as an array or string to be expanded 
on places where zero or more argument are expected. In an  object literal the spreadSyntex 
enumarates the properties of an objects and add the key value pairs to the object being created.
*/

// let arr1 =[2,3,4];
// let obj1={ ...arr1};
// console.log(obj1);

//********** */


// function sum(n1,n2,n3){

//     return n1+n2+n3;

// }
// console.log(sum(...arr1));


//******************** */
// let obj ={
//     name:"AtifSohail",
//     company:"groyyo",
//     address:"kapasera Border"
// };

// console.log({...obj, name:"jack",address:"xyx"});
// console.log({name:"jack",address:"xyx", ...obj});// this will print the obj without changing any value

//****************** */

// let arr1 =[1,2,3,4,5,6];

// let arr2 =[7,8,9,10];

// arr=[...arr1,...arr2];
// console.log(arr);


//******************** */

/*
let arr =[1,3,4,5,7];

let arr2 = arr;   //in this way original array assign to the arr2. if we alter in arr2 also change in original array
 
arr2.push(9);

console.log(arr);
console.log(arr2);

*/
//********************** */
/*

let arr = ['a','b','c','d','e'];

let arr2 = [...arr];  // in this way shallow copies assign to the arr2. if we alter in arr2 dosn't change in original array
arr2.push('f');

console.log(arr);
console.log(arr2);

*/
//*********************** */
// let arr = [1,2,3];
// let arr3 =[arr,4,5];

// console.log(arr3);

//************************** */
/*
let arr = [1,2,3];
let arr3 =[...arr,4,5];

console.log(arr3);
*/

//************************* */

// let arr =[4,5,6,7,8,9];

// console.log(Math.min(arr));//Math object method won’t work and will return NaN

//************************ */

// let arr =[4,5,6,7,8,9];

// console.log(Math.min(...arr));//When …arr is used in the function call, it “expands” an iterable object arr into the list of arguments In order to avoid this NaN output, we make use of a spread operator,


let user1={
    name:"atif sohail",
    age:24,
    location:"Patna"
};

let cloneUser ={...user1};
console.log(cloneUser);






