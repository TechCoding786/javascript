
/*
console.log("Start");
function a(){
    console.log("a");
}
a();
console.log("end")
*/


/*
console.log("Start");
setTimeout(function cb(){
    console.log("callback");
},5000);
console.log("end")

*/

/*
function attachEventListeners(){
    let count =0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
      console.log("Button Clicked",++count);
    });
  }
  attachEventListeners();
*/


console.log("start");

setTimeout(function cbT(){
     console.log("CB SetTimeout")
},5000);

fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(json => console.log(json))

console.log("End");

