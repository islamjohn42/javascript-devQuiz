// qayta takrorlanuvchi code group

function getName(arg1, arg, ...n) {
  //code block
}
getName();

//! Function with parametr
function calc(a, b) {
  console.log(a + b);
}
calc(2, 3);

function calcArg(arg1, ...rest) {
  console.log(arg1 + rest.length);
}
calcArg(32, 1, 2, 3)

// !===========================
// Function declaration
function sayHi(message) {
  console.log("Hello my function type is " + message);
}
sayHi("declaration")

// Function expression
const sayHello = function(message) {
  console.log("Hello my function type is " + message);
}
sayHello("expression")

function getGreeting(message) {
  console.log("Hey my function type also is " + message);
}
const getGreetingFn = getGreeting
getGreetingFn("expression")