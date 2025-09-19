const ball = document.getElementById("ball");
const background_color = ["#3b4664", "#370617", "#344e41"];

// ----- mathematical variables -----
let firstValue;
let operateValue = 0;
let thirdValue = 0;

const toggleTheme = () => {
  const classLength = ball?.classList?.length;
  if (classLength === 1) {
    ball.classList.add("toggle-middle");
    document.body.style.backgroundColor = background_color[1];
    return;
  }
  if (ball.classList.contains("toggle-middle")) {
    ball.classList.remove("toggle-middle");
    ball.classList.add("toggle-right");
    document.body.style.backgroundColor = background_color[2];
    document.body.style.color = "white";
    return;
  }
  ball.classList.remove("toggle-right");
  ball.classList.remove("toggle-middle");
  document.body.style.backgroundColor = background_color[0];
  document.body.style.color = "white";
  return;
};

const addNumberToDisplay = (numberToAdd) => {
  let currentDisplay = document.getElementById("display").innerHTML;
  if (numberToAdd === "=") {
    alert("dont add");
    return;
  }
  const newDisplay = String(currentDisplay) + String(numberToAdd);
  document.getElementById("display").innerHTML = newDisplay;
};

const reset = () => {
  document.getElementById("display").innerHTML = "";
};

const del = () => {
  const currentDisplay = document.getElementById("display");
  const displayArray = String(currentDisplay.innerHTML).split("");
  if (displayArray.length === 0) return;
  if (displayArray.length === 1) {
    currentDisplay.innerHTML = "";
    return;
  }
  const finalArray = displayArray.pop();
  const newArray = displayArray.filter((arr) => arr !== finalArray);
  const newValue = newArray.join("");
  currentDisplay.innerHTML = newValue;
};

const operate = (operationSelected) => {
  const currentDisplay = document.getElementById("display").innerHTML;
  firstValue = Number(currentDisplay);
  operateValue = operationSelected;
  addNumberToDisplay(operationSelected);
};

const eval = () => {
  let currentDisplay = document.getElementById("display").innerHTML;
  thirdValue = String(currentDisplay).split(operateValue)[1];
  let result = 0;
  switch (operateValue) {
    case "*":
      result = Number(firstValue) * Number(thirdValue);
      break;
    case "+":
      result = Number(firstValue) + Number(thirdValue);
      break;
    case "/":
      result = Number(firstValue) / Number(thirdValue);
      break;
    case "-":
      result = Number(firstValue) - Number(thirdValue);
      break;
    default:
      break;
  }
  document.getElementById("display").innerHTML = result;
};
