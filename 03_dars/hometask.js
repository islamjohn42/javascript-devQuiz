let num1 = 5;
let num2 = 10;
let operator = "a";
let result = 
  operator == ("+") 
  ?
  num1 + num2
  : operator == "-"
  ? num1 - num2
  : operator == "*" 
  ? num1 * num2
  : operator == "/"
  ? num1 / num2 
  : operator == "%"
  ? num1 % num2
  : "Try again"
  console.log(result);
  //! or you can use switch case with function
