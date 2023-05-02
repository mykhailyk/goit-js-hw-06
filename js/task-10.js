function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
let boxes = [];

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxes.forEach((box) => box.remove());
  boxes = [];
}

createBtn.addEventListener("click", () => {
  createBoxes(Number(input.value));
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
