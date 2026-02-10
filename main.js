document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generate-btn");
  const numbersContainer = document.getElementById("numbers");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const body = document.body;

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference
    body.classList.add("dark-mode");
  }


  generateBtn.addEventListener("click", () => {
    generateLottoNumbers();
  });

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.removeItem("theme"); // Or set to "light-mode" if you want explicit light mode storage
    }
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