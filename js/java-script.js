/* 01 "js" stands for JavaScript. */
/* 02 "alert" pop out an alert box in the browser. */
/* 03 "" or '' let js know it's a string. */

// alert('Hello World!')

/* 04 "console.log(what to print)" print information to the console. */
console.log('Hello')
/* 05 "var" stands for variable, avoid using this anymore!. */
// var myVariable;
/* 06 "let" modern form to declare a variable. */
/* 07 if the variable is declare without any content it means is undefine. */
let editableVariable;
console.log('07 is: ' + typeof (editableVariable))
/* 08 we can define the variable after been created by adding content. */
editableVariable = 5;
console.log('08 is: ' + typeof (editableVariable) + ', value: ' + editableVariable)
/* 09 "const" stands for constand, declares read only variables. */
const readOnlyVariable = 'Hello';
console.log('09 is: ' + typeof (readOnlyVariable) + ', value: ' + readOnlyVariable)
/* 10 Mathematical operators: =, +, -, *, /. */
let operator;
/* 11 "=" Assingment. */
operator = 5;
console.log('11 assingment ' + operator)
/* 12 "+" Sum. */
operator = operator + 10;
console.log('12 sum ' + operator)
/* 13 "-" Rest. */
operator = operator - 5;
console.log('13 rest ' + operator)
/* 14 "*" Multiply. */
operator = operator * 2;
console.log('14 multiply ' + operator)
/* 15 "/" Divide. */
operator = operator / 4;
console.log('15 divide ' + operator)
/* 16 "+=" Short-hand sum. */
operator += 5;
console.log('16 short-hand sum ' + operator)
/* 17 "-=" Short-hand rest. */
operator -= 2;
console.log('17 short-hand rest ' + operator)
/* 18 "*=" Short-hand multiply. */
operator *= 10;
console.log('18 short-hand multiply ' + operator)
/* 19 "/=" Short-hand divide. */
operator /= 20;
console.log('19 short-hand divide ' + operator)
/* 20 "++" sums one. */
operator++;
console.log('20 sumOne ' + operator)
/* 21 "DOM" stands for Document Object Model, this represent the web page. */
/* 22 "document.write(what to print)" prints the content in the DOM. */
document.write('22 This message is written throw js.')
/* 23 booleans have two options to return (true/false). */
let bool = true;
console.log('23 boolean: ' + bool)
console.log(7 > 5)
console.log(8 < 3)
/* 24 "==" means equal to. */
console.log(5 == 5)
/* 25 "!" logical not. */
console.log(5 != 5)
/* 26 "===" Equal value and type. */
console.log("5" === 5)
/* 27 "!==" Not equal valua nd type. */
console.log("5" !== 5)

let youLikeMeat = true;
/* 28 "if (condition)" check for the condition to be true to ejecute. */
if (youLikeMeat) {
    console.log("28 if")
}
let myNum = 8;
if (myNum > 10) {
    console.log(10)
/* 29 "else" ejecutes when the condition is false. */
} else {
    console.log("29 else")
}
let age = 28;
if (age > 30) {
    console.log("age over 30")
/* 30 "else if" check other conditions. */
} else if (age > 20) {
    console.log("30 if else")
} else if (age > 10) {
    console.log("age over 10")
} else {
    console.log("age not over 10")
}
let myAge = 25;
/* 31 "&&" And operator, both conditions need to be true to ejecute. */
if (myAge >= 18 && myAge <= 30) {
    console.log("31 \"and\" operator")
}
/* 32 "||" Or operator, with one condition true ejecutes. */
if (myAge >= 18 || myAge <= 15) {
    console.log("32 \"or\" operator")
}
let newAge = 5;
/* 33 "while" create a loop, ejecutes many times the condition is true. */
while (newAge < 7) {
    console.log("33 while loop")
    newAge++
}
/* 34 This ejecutes when the loop end. */
console.log("34 loop end")
/* 35 "for(variable; condition; increment)" create a loop with the declarations. */
for (i = 1; i < 15; i++) {
    if (i >= 3 && i <= 8) {
        console.log("36 continue")
        // continue
    }
    if (i == 10) {
        /* 36 "break" Stop the loop. */
        console.log("37 break")
        break
    }
    /* !!The ejecution needs to be after the conditions, else will ejecutes and then compare. */
    console.log("35 for loop " + i)
}
/* 37 "function name(values)" This declares is a function. */
function getAvarage(a,b) {
    let avarage = (a + b / 2)
    console.log("37 function " + avarage)
    /* 38 "return" asign the content  */
    return avarage
}
/* functions need to be called. */
getAvarage(5, 3)

/* 39 global variable can be used anywhere in the code. */
let glob = "39 global var";
function loc(a) {
    console.log(glob)
    /* 40 local variable can only be used inside where it is declared. */
    let loc = "40 local var";
    console.log(loc)
}
loc(3)
/* 41 This is a number. */
let a = 5;
/* 42 This is a string. */
let b = "5";
/* 43 the "a+b" will be concatenation. */
console.log(a + b)
/* 44 "Math.propertie(value)" is used for Mathematical functions. */
console.log("44 " + Math.round(7.5))
/* 45 "floor" round to under number. */
console.log("45 " + Math.floor(7.8))
/* 46 "ceil" round to upper number. */
console.log("46 " + Math.ceil(7.1))
/* 47 "max" return the highest number. */
console.log("47 " + Math.max(7, 9, 3, 2))
/* 48 "PI" return the value of PI. */
console.log("48 " + Math.PI)
let c = "apple";
/* 49 "NaN" stands for Not A Number. */
console.log("49 " + a * c)
/* 50 Strings use "" or '', can be use inside a string with "\" berofre them. */
let myString = 'This is a "String", or \'String\' '
console.log("50 " + myString)

let str = "hello, world";
console.log(str)
/* 51 "var.slice(from, to)" is used to keep only the content inside the parameters. */
/* 52 The count of items start from 0. */
let str2 = str.slice(2, 9);
console.log("51 " + str2)
let tags = "meat, ham, salami, pork, beef, chicken";
let tagArray = tags.split(", ")
console.log(tagArray)
