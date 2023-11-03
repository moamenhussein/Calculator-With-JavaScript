let input = document.querySelector(".display");
let clear = document.querySelector(".clear");
let deleteOne = document.querySelector(".delete");
let equal = document.querySelector(".equal");
let finishInput = "";

function getInput(val) {
  finishInput += val;
  input.value = finishInput;
}

clear.addEventListener("click", () => {
  finishInput = "";
  input.value = "";
});

equal.addEventListener("click", () => {
  input.value = eval(finishInput);
});

deleteOne.addEventListener("click", () => {
  finishInput = finishInput.slice(0, -1)
  input.value = finishInput
});

