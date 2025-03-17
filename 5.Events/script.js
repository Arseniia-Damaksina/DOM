// Everytime the user clicks on one of the action squares
// Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
// Create a new <li> in the log below to state when the action was done
const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const section = document.querySelector(".displayedsquare-wrapper");
const clickOnSquare = (e) => {
  if (e.target.classList.contains("green")) {
    let green = document.createElement("div");
    section.append(green);
    green.classList.add("displayedsquare", "green");
  } else if (e.target.classList.contains("violet")) {
    let violet = document.createElement("div");
    section.append(violet);
    violet.classList.add("displayedsquare", "violet");
  } else if (e.target.classList.contains("orange")) {
    let orange = document.createElement("div");
    section.append(orange);
    orange.classList.add("displayedsquare", "orange");
  }
  const ul = document.querySelector("ul");
  let li = document.createElement("li");
  ul.append(li);
  li.textContent = `[${getElapsedTime()}] Created a new ${
    e.target.classList[1]
  } square`;
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this)
// When the spacebar is hit randomly change the background color of the whole page
// Log when the spacebar is used the same way you used for the generated squares.
const body = document.querySelector("body");
const bgColor = (e) => {
  if (e.code == "Space") {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    body.style.background = "rgb(" + x + "," + y + "," + z + ")";

    const ul = document.querySelector("ul");
    let li = document.createElement("li");
    ul.append(li);
    li.textContent = `[${getElapsedTime()}] The space bar is pressed`;
  }
};
body.addEventListener("keypress", bgColor);

// When the l key is pressed the log gets deleted (erases the generated <li>s).
// Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes),
// so a while loop might be a good choice instead.
const ul = document.querySelector("ul");
const eraseLi = (e) => {
  if (e.code == "KeyL") {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
};
body.addEventListener("keypress", eraseLi);

// When the s key is pressed the squares get deleted (erases the generated squares)
const mainDiv = document.querySelector(".displayedsquare-wrapper");
const eraseSquares = (e) => {
  if (e.code == "KeyS") {
    while (mainDiv.firstChild) {
      mainDiv.removeChild(mainDiv.firstChild);
    }
  }
};
body.addEventListener("keypress", eraseSquares);

//Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
const divs = document.querySelectorAll(".displayedsquare-wrapper");
const clickDivSquare = (e) => {
  if (e.target.classList.contains("green")) {
    alert("Green!");
  } else if (e.target.classList.contains("violet")) {
    alert("Violet!");
  } else if (e.target.classList.contains("orange")) {
    alert("Orange!");
  }
};
for (let el of divs) {
  el.addEventListener("click", clickDivSquare);
}
