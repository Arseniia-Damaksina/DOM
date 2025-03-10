// 1.Add a title attribute to every element that has the important class,
// stating This is an important item. Tip: adding a title attribute to an element
// is different from changing the title of a document.
let elementsToAddTitle = document.querySelectorAll(".important");
for (let item of elementsToAddTitle) {
  item.setAttribute("title", "This is an important item");
  console.log(`Item with class important: ${item}`);
}

// 2.Select all the img tags and loop through them. If they have no important class,
// turn their display property to none
let images = document.querySelectorAll("img");
for (let img of images) {
  if (!img.classList.contains("important")) {
    img.style.display = "none";
  }
}

// 3.Loop through all the paragraphs and display their content in the console.
// If the paragraph has a class, display its classname as well
let paragraphs = document.querySelectorAll("p");
for (let p of paragraphs) {
  console.log(`Content of the paragraph: ${p.innerHTML}`);
  if (p.classList.length > 0) {
    console.log(`Class names of the paragraph: ${p.classList}`);
  }
}

// 4.Give each of the paragraph a random text color (different for each one) UNLESS
// it has a class then leave it as it is.
for (let p of paragraphs) {
  if (!p.className) {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    p.style.color = `rgb(${x}, ${y}, ${z})`;
  }
}
