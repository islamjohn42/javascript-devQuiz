// ??

//! Example a
/* let a = null;
let b = "red";
let color;
if(a !== null) {
  color = a
} else {
  color = b
}
console.log(color); */

//! Example b
const nullVal = null;
const undefVal = undefined;
const emptyStr = ""; // falsy value
const num = 0; // falsy val

const valA = nullVal ?? "value";
const valB = undefVal ?? "value"
const valC = emptyStr ?? "value"
const valD = num ?? "value"
console.log(valA, valB, valC, valD);

const valE = (null || undefined) ?? "valE"
console.log(valE);
