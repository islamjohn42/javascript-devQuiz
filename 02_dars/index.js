/*
- Javascriot qanday ishlidi
- Event Loop
- Web Apis
- DOM apis
- Callback queue
- Micro task queue 
 */

console.log("start");

setTimeout(() =>{
  console.log("Inside setTimeout");
}, 2000);

fetch("url").then(function callBack(){
  console.log("Inside fetch");
});

console.log("end");