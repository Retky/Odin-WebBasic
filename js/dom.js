/* 01 "DOM" stands for Document Object Model. */
/* 02 All Elements ("<div>, <p>, ...") in the DOM are Objects. */
/* 03 We can change elements inside nodes, the parents of the elements. */
/* 04 "getElementsBy..." calls an element. */
let contDivs = document.getElementsByClassName("container");
let myH2 = contDivs[1].getElementsByTagName("h2");
let myBody = document.getElementsByTagName("body");
/* 05 "innerHTML" returns the HTML content of an element. */
//myBody[0].innerHTML = "<p>I am a paragraph tag</p>"
let title = document.getElementById('pageTitle');
/* 06 Can change the content of nodes. */
//title.textContent = "Hello World!"
let link = document.getElementById('test');

console.log(
/* 07 ".getAttribute" Can get the attribute of a node. */
    link.getAttribute("href")
)
console.log(
    link.getAttribute("class")
)
/* 08 Can change the attribute of a node. */
link.setAttribute("class", "pie")
console.log(
    link.getAttribute("class")
)
/* 09 Can set a new attribute to a node. */
link.setAttribute("alt", "the link")
