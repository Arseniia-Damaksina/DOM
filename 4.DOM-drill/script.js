// 1.Use childNodes to list all the children from the <ul>
let ul = document.querySelector("ul");
let children = ul.childNodes;
console.log(`1.Child nodes: ${children}`);

// 2.Write a for loop to iterate over every child. In this loop:
// 2.1.Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
for (i = 0; i < children.length; i++) {
  if (children[i].nodeType === 1) {
    console.log(`2.1.Child node from loop: ${children[i]}`);
  }
}

// 2.2.Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
let fastFurious = ul.children[5];
ul.prepend(fastFurious);

// 2.3.Since Fast and Furious is the most important franchise ever, add a class .important to the element
fastFurious.classList.add("important");

// 2.4.Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display
// the name of clicked element
// 2.5.Add a special condition to the previous function if the clicked item is Fast and Furious the alert()
// should display The most important franchise ever, the story of DOM(inic) Toretto's family.
// It's not about car, it's about family.
const childrenLi = document.querySelectorAll("li");
const alertFunc = (event) => {
  if (event.target.classList.contains("important")) {
    alert(
      "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it'is about family."
    );
  } else {
    alert(event.target.innerText);
  }
};

for (let item of childrenLi) {
  item.addEventListener("click", alertFunc);
}

// 2.6.(*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
for (i = 0; i < childrenLi.length; i++) {
  for (j = i + 1; j < childrenLi.length; j++) {
    if (childrenLi[i].isEqualNode(childrenLi[j])) {
      childrenLi[j].parentNode.removeChild(childrenLi[j]);
    }
  }
}


// 3.(*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list 
// should get sorted in a random order, however Fast and Furious should remain the first element 
// (most important franchise ever, remember?)
// 4.(*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
const body = document.querySelector('body');
const childrenLis = ul.children;

const randomClone = (e) => {
 if (e.code == "KeyR") {
  for(i=0; i < childrenLis.length; i++) {
     let index = Math.floor(Math.random() * childrenLis.length);
     ul.appendChild(childrenLis[index]);
      }
   for (let element of children) {
      if (element.textContent === "Fast and Furious") {
           ul.prepend(element);
        }
      }
  }

  else if (e.code == "KeyD") {
    const fF = fastFurious.cloneNode(true);
    ul.prepend(fF);
  }
}

body.addEventListener('keyup', randomClone);

// 4.Create a new <div> before the list, using createElement and insertBefore
let newDiv = document.createElement("div");
let parent = ul.parentNode;
parent.insertBefore(newDiv, ul);

// 5.Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: 
// "important franchises" and "normal franchises"
let select = document.createElement("select");
newDiv.appendChild(select);
let option1 = new Option("all");
let option2 = new Option("important franchises");
let option3 = new Option("normal franchises");
select.append(option1, option2, option3);

// 6.Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of 
// the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')
const onSelectChange = () => {
   if (select.selectedIndex === 1) {
        for (i=0; i < childrenLi.length; i++) {
         if (!(childrenLi[i].className === "important")) {
          childrenLi[i].style.visibility = "hidden";
          }
        }
    }
    else if (select.selectedIndex === 2) {
      for (i=0; i < childrenLi.length; i++) {
        childrenLi[i].style.visibility = "visible";
      }
    }
  }
select.addEventListener("change", onSelectChange);