// alert("hello mister");
// console.dir(window);
// console.dir(window.document);
// console.dir(window.document.body);
// console.log(document.body);
// console.log(document.head);
//console.dir(document.body.childNodes[1]);
// console.log(document.body.style.background ="pink");
// console.dir(document.body.childNodes[3].innerText ="abcd");

//*************Selector***************

// let heading = document.getElementById("heading");
// console.log(heading);

 //let button = document.getElementById("myId");
 //console.dir(button);

// let headings = document.getElementsByClassName("my-class");
// console.log(headings);
// console.dir(headings);

// let paragh = document.getElementsByTagName("p");
// console.dir(paragh);

//*************QuerySelector************

// let element = document.querySelector("p");//1st element
// console.dir(element);

// let elementAll = document.querySelectorAll("p");// all element
// console.dir(elementAll);

//  let element = document.querySelector(".my-class");//1st element
//  console.dir(element);

//  let elementAll = document.querySelectorAll(".my-class");//1st element
//  console.dir(elementAll);

//let element = document.querySelector("#myId");
//console.dir(element);

//console.dir(document.querySelector("div").children);

//**********tagName Properties 

// console.log(element);
// console.log(element.tagName);

//************innerText**********
// let div = document.querySelector("div").innerText;
// console.dir(div);

//*******************innerHTML***********
// let div = document.querySelector("div").innerHTML;
// console.dir(div);

//  let div = document.querySelector("div").innerText="VIJA";
//   console.dir(div);



// let h1 = document.querySelector("h1");

// console.dir(h1.innerText);

// h1.innerText = h1.innerText + "from apna college Students";

// let divs = document.querySelectorAll(".box");
// console.log(divs);


// let divs = document.querySelectorAll(".box");
// console.dir(divs[0]);


let divs = document.querySelectorAll(".box");

for(div of divs){
    console.log(div.innerText);
}
divs[0].innerText = "New unique value 1";

divs[1].innerText ="the unique value 2";

divs[2].innerText ="the unique value 3";


