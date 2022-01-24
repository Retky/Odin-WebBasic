/* 01 "js" stands for JavaScript. */
/* 02 "alert" pop out an alert box in the browser. */
/* 03 "" or '' let js know it's a string. */

// alert('Hello World!')

/* 04 "console.log(what to print)" print information to the console. */
console.log('Hello')
/* 05 "var" stands for variable, avoid using this anymore!. */
var myVariable;
/* 06 "let" modern form to declare a variable. */
/* 07 if the variable is declare without any content it means is undefine. */
let editableVariable;
  console.log('07 is: '+typeof(editableVariable))
/* 08 we can define the variable after been created by adding content. */
editableVariable = 5;
  console.log('08 is: '+typeof(editableVariable)+', value: '+editableVariable)
/* 09 "const" stands for constand, declares read only variables. */
const readOnlyVariable = 'Hello';
  console.log('09 is: '+typeof(readOnlyVariable)+', value: '+readOnlyVariable)
/* 10 Mathematical operators: =, +, -, *, /. */
let operator = 5;
/* 11 "=" assingment. */
console.log('11 assingment '+operator)
/* 12 "+" sum. */
console.log('12 sum '+(operator+5))
/* 13 "-" rest. */
console.log('13 rest '+(operator-2))
/* 14 "*" multiply. */
console.log('14 multiply '+(operator*3))
/* 15 "/" divide. */
console.log('15 divide '+(operator/2))
