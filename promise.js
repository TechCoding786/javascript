/*
let promise = new Promise(function(resolve,reject){
    alert("hello");
    resolve(56);
});

console.log("hello atif");

setTimeout(function(){
    console.log("hello 2 in 2 sec");
},2000);

console.log("hello 3");
console.log(promise);
*/
//fetch google.com homepage ==>console.log("google.com homepage done");
//fetch data from the data api
//fetch pictures from the server
//print downloading
//Rest of the script

/*
let p = new Promise((a,b)=>{
    console.log("promise is pending");
    setTimeout(()=>{
        console.log("I am promise and i am fullfilled");
        a(true);
    },5000);
});
console.log(p);
*/
//****************************************** */
/*
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("i am promise and i am reject");
        reject(new Eror("I am an Error"));
    },5000);
});

console.log(promise);
*/
//************************************* */

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("i am promise and iam fullfilled");
        resolve(true);
    },5000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    //    console.log("i am promise and i am rejected");
       reject(new Error("i am error"));
    },5000);
});

// console.log(promise1,promise2);

//To get the value

promise1.then((value)=>{
   console.log(value);
});

//To get the Error

// promise2.catch((error)=>{
//     console.log("some error occur in promise2");
// });


promise2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
});


//****************************************** */
/*

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolve after two minutes");
        resolve(56);
    },2000);
});

p1.then((value)=>{
     console.log(value);
     let p2 = new Promise((resolve,reject)=>{
        resolve("Promise 2")
     })
     return p2;
}).then((value)=>{
    console.log("we are done")

})

*/
//************************************************* */
/*
let myPromise = new Promise((resolve,reject)=>{
    let randomNumber = Math.random();
    setTimeout(()=>{
  
      if(randomNumber>0.5){
        resolve(randomNumber);
      }
      else{
        reject(new Error("random number is lessthsn equal to 0.5"));
      }
  
    },2000)
  })
  myPromise.then((value)=>{
    console.log("promise resolve with result:",result);
  })
  .catch((error)=>{
    console.error("promise reject with Error",error);
  })
  */
//****************************************************** */
/*
let myPromise = new Promise((resolve,reject)=>{
  let x =0;
   setTimeout(()=>{
 
     if(x==0){
       resolve("true");
     }
     else{
       reject("false");
     }
 
   },2000)
 })
 myPromise.then((value)=>{
   console.log(value);
 })
 .catch((error)=>{
   console.error("promise reject with Error",error);
 })
 */

//************************************************ */
/*
   let p = new Promise((resolve,reject)=>{   //DOUT
    setTimeout(()=>{
           console.log("resolve in 2 minutes");
           resolve(45);
    },2000)
  })
  
  p.then((value)=>{
    console.log(value);
      let p2 = new Promise((resolve,reject)=>{
          resolve("promise2");
      })
      return p2;
  }).then((value)=>{
      console.log("we are done")
  })
  */

//****************PROMISE CHAINING********************** */
/*
  let p = new Promise((resolve,reject)=>{   //DOUT
    setTimeout(()=>{
           console.log("resolve in 2 minutes");
           resolve(45);
    },2000)
  })
  
  p.then((value)=>{
    console.log(value);
      let p2 = new Promise((resolve,reject)=>{
         setTimeout(()=>{resolve("promise2")},2000) 
      })
      return p2;
  }).then((value)=>{
      console.log("we are done")
      return 2;
  }).then((value)=>{
    console.log("Now we are pkka done");
  })

  */
//********************************************** */
/*
  let p = new Promise((resolve,reject)=>{   //DOUT
    setTimeout(()=>{
           console.log("resolve in 2 minutes");
           resolve(45);
    },2000)
  })
  
  p.then((value)=>{
    console.log(value);
      return new Promise((resolve,reject)=>{
         setTimeout(()=>{resolve("promise2")},2000) 
      })
    
  }).then((value)=>{
      console.log("we are done")
      return 2;
  }).then((value)=>{
    console.log("Now we are pkka done");
  })

  */
//************************************************** */

/*
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(scri)
    script.onload = () => {
      resolve("script has been loaded sir")
    }
    script.onerror = () => { reject(0) }
  })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")

p1.then((value) => {
  console.log(value);
  return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
}).catch((error) => {
  console.log("we are sorry but we are having problems to loading script")
})
*/

//***************************************************** */
/*
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(scri)
    script.onload = () => {
      resolve("script has been loaded sir")
    }
    script.onerror = () => { reject(0) }
  })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")

p1.then((value) => {
  console.log(value);
  return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
  console.log("second script is ready")
}).catch((error) => {
  console.log("we are sorry but we are having problems to loading script")
})
*/
//*************** MULTIPLE HANDLERS****************** */
/*
let p1 = new Promise((resolve,reject)=>{

  console.log("i am not resolve")
  setTimeout(()=>{
    resolve(1)
  },2000)
})
p1.then(()=>{
  console.log("Hurray")
})

p1.then((value)=>{
   console.log("Congratulations this process now resolved",value);
})
*/


//********************************************************* */

// let p1 = new Promise((resolve,reject)=>{

//   console.log("i am not resolve")
//   setTimeout(()=>{
//     resolve(1)
//   },2000)
// })

// p1.then(()=>{
//   console.log("Hurray")
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(4)
//     },2000)
//   }).then((value)=>{
//      console.log("congratulation promise result")
//   })
// })


// p1.then((value)=>{
//    console.log("Congratulations this process now resolved",value);
// })


