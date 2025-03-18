// Add a keyup listener on the first input field, so that once you type a letter in this field,
// it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
const input1 = document.querySelector("#firstname");
const span1 = document.querySelector("#display-firstname");
const typeFirstname = () => {
  span1.textContent = input1.value;
  console.log(span1.textContent);
};
input1.addEventListener("keyup", typeFirstname);

// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section
// a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
const input2 = document.querySelector("#age");
const truth = document.querySelector("#a-hard-truth");
const ageError = document.createElement("p");
ageError.style.color = "var(--error-color)";
input2.after(ageError);

const showTruth = () => {
  if (input2.value >= 18) {
    truth.style.visibility = "visible";
    ageError.textContent = "";
  } else if (input2.value < 18 && input2.value.length > 0) {
    truth.style.visibility = "hidden";
    ageError.textContent = "You must be 18+ to see the content.";
  } else {
    ageError.textContent = "";
  }
};
input2.addEventListener("keyup", showTruth);
input2.addEventListener("click", showTruth);

// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red)
// if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwd-confirm");
const pwdError = document.createElement("p");
pwdConfirm.after(pwdError);
pwdError.style.color = "var(--error-color)";

const hint = () => {
  pwd.classList.remove("error");
  pwdConfirm.classList.remove("error");
  pwdError.textContent = "";

  if (pwd.value.length < 6) {
    pwd.classList.add("error");
    pwdError.textContent = "Password must be at least 6 characters.";
  } else if (pwd.value !== pwdConfirm.value && pwdConfirm.value.length > 0) {
    pwd.classList.add("error");
    pwdConfirm.classList.add("error");
    pwdError.textContent = "Passwords do not match.";
  }
};
pwd.addEventListener("keyup", hint);
pwdConfirm.addEventListener("keyup", hint);

// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page.
//  For ease of use, we'll say that the dark mode is just turning the background black and the text white.
const body = document.querySelector("body");
const select = document.querySelector("#toggle-darkmode");
select.addEventListener("change", () => {
  if (select.value == "dark") {
    document.documentElement.style.setProperty('--bg-color', 'black');
    document.documentElement.style.setProperty('--text-color', 'white');
  } else {
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'black');
  }
});