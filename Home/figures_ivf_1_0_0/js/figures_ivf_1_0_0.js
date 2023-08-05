const numberElements = document.querySelectorAll(".figures_ivf_1_0_0__number");

const targetNumbers = [30, 40, 50, 60];

function runNumber(element, target) {
  let currentNumber = 0;
  const interval = setInterval(() => {
    element.textContent = currentNumber.toString().padStart(2, "0");
    currentNumber++;
    if (currentNumber > target) {
      clearInterval(interval);
    }
  }, 100);
}

numberElements.forEach((element, index) => {
  runNumber(element, targetNumbers[index]);
});
