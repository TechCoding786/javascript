// const arr =[5,1,2,3,4];
/*
function double(x){
    return x * 2;
}
function triple(x){
   return x * 3;
}
*/
/*
function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary);

console.log(output);

*/

/*
const output = arr.map(function binary(x){
    return x.toString(2);
});

console.log(output);
*/

// const output = arr.map((x)=>x.toString(2)); //arrow function
// console.log(output);

//**********Filter **********
/*
function isOdd(x){
   return x % 2; 
}

const output = arr.filter(isOdd);

console.log(output);
*/
/*
function isEven(x){
    return x % 2===0;
}

const output = arr.filter(isEven);

console.log(output);
*/


const arr =[3,4,5,6,7,8]; 
/*
function greaterThan(x){
    return x > 4;
}

const output = arr.filter(greaterThan);

console.log(output);
*/
/*
const output = arr.filter((x)=> x>5);

console.log(output);

*/

//***************REduce***********
/*
function findSum(arr){
    let sum =0;
    for(let i =0;i<arr.length;i++){
       sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));
*/
/*
const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);

console.log(output);
*/
/*
function findMax(arr){
  let max =0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
  }
  return max;
}

console.log(findMax(arr));
*/

/*
const output = arr.reduce(function(max,curr){
  if(curr > max){
     max = curr;
     return max;
  }
},0);

console.log(output);

*/

const users = [
    {firstName:"akshay", lastName:"Sani",age:33},
    {firstName:"Nitish", lastName:"Kumar",age:53},
    {firstName:"Lalu", lastName:"yadav",age:53},
    {firstName:"tejaswi", lastName:"yadav",age:43}
];

// const output = users.map((x)=>x.firstName +" "+x.lastName);
// console.log(output);


//acc = {53:2,33:1,43:1}
/*
const output = users.reduce(function(acc,curr){
  
    if(acc[curr.age]){
          acc[curr.age] = ++acc[curr.age];
    }
   else{
     acc[curr.age] = 1;
   }
    return acc;
},{});

console.log(output);
*/
//const acc = {33:1, 53:2,43:1}

let obj = {
    53:1
}
obj[53]
const output = users.filter((x)=>x.age>33).map((x)=>x.firstName);
console.log(output);


