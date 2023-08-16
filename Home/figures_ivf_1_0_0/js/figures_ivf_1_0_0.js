const numberElements = document.querySelectorAll(".figures_ivf_1_0_0__number");

const targetNumbers = [25, 70, 200, 20];

function runNumber(element, target, text) {
  if (text === undefined) {
    text = '';
  }
  let currentNumber = 0;
  const interval = setInterval(() => {
    element.textContent = `${currentNumber.toString().padStart(2, "0")}${text}`;
    currentNumber += 5;
    if (currentNumber > target) {
      clearInterval(interval);
    }
  }, 100);
}

numberElements.forEach((element, index) => {
  if (index === 1) {
    runNumber(element, targetNumbers[index], '%');
  }
  else {
    runNumber(element, targetNumbers[index]);
  }
});
