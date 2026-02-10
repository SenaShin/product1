document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generate-btn");
  const numbersContainer = document.getElementById("numbers");

  generateBtn.addEventListener("click", () => {
    generateLottoNumbers();
  });

  function generateLottoNumbers() {
    numbersContainer.innerHTML = "";
    const numbers = [];
    while (numbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    numbers.sort((a, b) => a - b);

    numbers.forEach(number => {
      const numberElement = document.createElement("div");
      numberElement.classList.add("number");
      numberElement.textContent = number;
      numbersContainer.appendChild(numberElement);
    });
  }
});
