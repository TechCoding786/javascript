//What is call back function in javascript

setTimeout(function (){//setTimeout takes call back function and store in a seperate space and it will attached timer into 5000 mili second. and it will store it
    console.log("timer");
},5000);

function x(y){
  console.log("x");
  y();
}

x(function y(){
  console.log("y");
});


//deep about Event listners
//closure Demo with Event listner
//scope Demo with event listner
//Garbage collecter & removeEventListeners
/*
function attachEventListeners(){
  let count =0;
  document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("Button Clicked",++count);
  });
}
attachEventListeners();
*/