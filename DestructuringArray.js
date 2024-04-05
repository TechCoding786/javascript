//no need to do that

// let a = arr[0];
// let b = arr[1];
//****************** */

// let arr =[3,5];
// let[a,b]=arr;
// console.log(a,b);
//************** */

// let arr=[3,5,4,6];
// let[a,b]=arr;
//  console.log(a,b);
//***************** */

// let arr=[3,4,5,6,5,12,34];
// let [a,b,c,...rest]=arr;
// console.log(a,b,c,rest);
//********************* */

// let arr =[3,5,6,7,8,12,34];
// let[a, , ,...rest]=arr;
// console.log(a,rest);
//****************** */

// let arr =[1,3,4,6,88,97,22];
// let[a, ,b,...rest]=arr;
// console.log(a,b,rest);

//********************* */
// let {a,b}={a:5,b:7}
// console.log(a,b);

let arr=[2,3,4,5,2,6,7];
// let [a= aDefault,b]=arr;
// console.log(a,b);

// let[a,b, ...{c,d}] = arr;
// console.log(a,b,{ });//***********dout


let obj1={a:5,b:7,c:6,d:8};
let {a,b,...rest}=obj1;
console.log(a,b,rest);
