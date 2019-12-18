const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, '');
}

// currentResult = add(1, 5);

addBtn.addEventListener("click", add);

// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;
