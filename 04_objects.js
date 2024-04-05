//const tinderUser = new Object();//singleton
const tinderUser ={};
tinderUser.id = "123abc";
tinderUser.name ="Sammy";
tinderUser.isloggedIn= false;
//console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
           firstname:"Atif",
           lastname:"Sohail"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj4 = {5:"a",6:"b"};

//const obj3 = {obj1, obj2};
const obj3 =Object.assign({},obj1,obj2,obj4);
//const obj3 = {...obj1, ...obj2};
//console.log(obj3);
console.log(typ);


//when user coming  from databases

const users =[
    {
       id:1,
       email:"Shail@gmail.com" 
    },
    {
        id:1,
        email:"jack@gmail.com" 
     },
     {
        id:1,
        email:"atif@gmail.com" 
     },
]
//console.log(users[1].email);
//console.log(users[2].email);

//console.log(tinderUser);

// [1,2,3,4,5,6]
// 0,1,2,3,4,5

//console.log(Object.keys(tinderUser));// this  Resturn keys
//console.log(Object.values(tinderUser));// this return object
console.log(Object.entries(tinderUser));console.log(tinderUser.hasOwnProperty('isloggedIn'));


