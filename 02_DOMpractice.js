// let newBtn=document.createElement("button");
// newBtn.innerText="clickMe!";

// console.log(newBtn);

// let body = document.querySelector("body");
// body.prepend(newBtn);


// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";


let para =document.createElement("p");
para.innerText="this paragraph created using js ";
//console.log(para);

let body =document.querySelector("body").prepend(para);

//console.log(para.classList.add("Class"));
console.log(para.setAttribute("class","content"))
