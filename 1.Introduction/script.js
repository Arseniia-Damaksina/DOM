// 1.Display the document title in the console
const title = document.querySelector('title');
console.log(`Title: ${title.textContent}`);

// 2.Change the document title to Modifying the DOM
title.innerText = "Modifying the DOM";
console.log(`Modified title: ${title.textContent}`);

// 3.Change the background color of the body to hot pink (#FF69B4). 
// If that worked, try with a random color as an extra challenge. 
let body = document.querySelector('body');
//body.style.background = '#FF69B4';
let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);
body.style.background = `rgb(${x}, ${y}, ${z})`;

// 4.Using the children method and a for ... of  loop, display every children elements of the second 
// child element of your document (display all children elements of the <body>)
const elements = body.children;
for (let el of elements) {
    console.log(`Child of the body: ${el}`);
}

const nodes = body.childNodes;
for (let child of nodes) {
    console.log(`Child node of the body: ${child}`);
}
