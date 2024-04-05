//singleton
// object.create

//object literal
const mySym = Symbol("key");
const jsUser = {
  name:"Atif",
  "full name":"Atif Sohail",// multiword property
  [mySym]:"key1",
  age:24,
  location: "jaipur",
  email:"atif@google.com",
  isLoggedIn: false,
  lastLoginDays:["Monday","Saturday"]

}
//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
 //console.log(jsUser.mySym);// Wrong way
 //console.log(typeof jsUser[mySym]);
 //console.log( jsUser[mySym]);
 //console.log(jsUser["email"]);

 //jsUser.email= "atif562@gmail.com";
 //console.log(jsUser);
 //Object.freeze(jsUser);
 //jsUser.name="Sharddha";
 //jsUser.email= "atif562@chtgpt.com";
 //console.log(jsUser);
 //console.log(jsUser);

 jsUser.greeting = function(){
    console.log("Hello Js User");
 }
 jsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
 }

 //console.log(jsUser.greeting());
 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());
 


