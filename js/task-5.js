// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і задає це значення кольору текстовим 
// вмістом для span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor().
// Зверни увагу, що функція getRandomHexColor() повертає колір у hex - форматі,
// в той час, як колір фону на < body > буде у форматі rgb.Це нормально й 
// не потребує якихось правок.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColorBtn() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  span.textContent = newColor;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", changeColorBtn);