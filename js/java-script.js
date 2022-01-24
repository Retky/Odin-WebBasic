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
let operator;
/* 11 "=" Assingment. */
operator = 5;
console.log('11 assingment '+operator)
/* 12 "+" Sum. */
operator = operator+10;
console.log('12 sum '+operator)
/* 13 "-" Rest. */
operator = operator-5;
console.log('13 rest '+operator)
/* 14 "*" Multiply. */
operator = operator*2;
console.log('14 multiply '+operator)
/* 15 "/" Divide. */
operator = operator/4;
console.log('15 divide '+operator)
/* 16 "+=" Short-hand sum. */
operator += 5;
console.log('16 short-hand sum '+operator)
/* 17 "-=" Short-hand rest. */
operator -= 2;
console.log('17 short-hand rest '+operator)
/* 18 "*=" Short-hand multiply. */
operator *= 10;
console.log('18 short-hand multiply '+operator)
/* 19 "/=" Short-hand divide. */
operator /= 20;
console.log('19 short-hand divide '+operator)
/* 20 "++" sums one. */
operator ++;
console.log('20 sumOne '+operator)
/* 21 "DOM" stands for Document Object Model, this represent the web page. */
/* 22 "document.write(what to print)" prints the content in the DOM. */
document.write('22 This message is written throw js.')
/* 23 booleans have two options to return (true/false). */
let bool = true;
console.log('23 boolean: '+bool)
console.log(7>5)
console.log(8<3)
/* 24 "==" means equal to. */
console.log(5==5)
/* 25 "!" logical not. */
console.log(5!=5)
