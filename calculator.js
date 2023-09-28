document.querySelectorAll(".js-cal-button").forEach((buttonElement) => {
  buttonElement.addEventListener("click", () => {
    let contentVal = buttonElement.innerHTML;
    console.log("contentval " + contentVal);
    contentVal === "x" ? updateCalculation("*") : updateCalculation(contentVal);
  });
});

let calculation = localStorage.getItem("calculation") | "";
display(calculation);
function updateCalculation(num) {
  try {
    if (num === "R") {
      calculation = "";
      display(calculation);
      localStorage.removeItem(calculation);
    } else if (num === "=") {
      calculation = eval(calculation);
      localStorage.setItem("calculation", JSON.stringify(calculation));
      display(calculation);
    } else {
      if (calculation === 0) calculation = num;
      else calculation += num;
      display(calculation);
    }
  } catch (err) {
    console.log(err);
  }
}
function display(calculation) {
  const inputElement = document.querySelector(".answer");
  inputElement.innerHTML = calculation === "" ? "0" : calculation;
}
