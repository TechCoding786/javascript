/*
function x(){
    var i = 1;
    setTimeout(function (){
        console.log(i);
    },5000);
}
x();

*/
/*
function x(){
    var i =10;
    setTimeout(function(){
        console.log(i);
    },5000);
    console.log("hello Shail");
}
x();
*/

/*

function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
   console.log("Hello shail");
}
x();

*/

/*
function x(){
    for(var i=1;i<=5;i++){
    function close(i){
        
            setTimeout(function (){
                console.log(i);
            },i*1000);
        }
        close(i);
    }
    
   console.log("Hello shail");
}
x();
*/

function x(){
    for(var i=1;i<=5;i++){
    function close(x){
        
            setTimeout(function (){
                console.log(x);
            },i*1000);
        }
        close(i);
    }
    
   console.log("Hello shail");
}
x();


