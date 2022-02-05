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

/* 10 ".style." can set or chage style of the node. */
title.style.top = "30px"
title.style.color = "red"
/* 11 In javaScript "-" is not used. */
/* background-color => backgroundColor */
title.style.backgroundColor = "white"

/* 12 to add elements in the page, first we need to create them in js. */
let newLi = document.createElement ("li")
let newA = document.createElement ("a")

let menu = document.getElementsByClassName("nav")[0].getElementsByTagName("ul")[0]
/* 13 "node.appendChild(element)" is used to add a new element to the node. */
menu.appendChild(newLi)
newLi.appendChild(newA)
newA.innerHTML = "Blog"
/* 14 "node.insertBefore(element, place)" is used to select where to set the element. */
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0])

/* 15 to remove elements we need to select the parent node. */
let parent = document.getElementById("main");
let child = parent.getElementsByTagName("h1")[0];
/* 16 "node.removeChild(element)" is used to remove the element from the node. */
parent.removeChild(child)

/**/
let even = document.getElementById("one")
even.onclick = function () {
    alert("you clicked me")
}
