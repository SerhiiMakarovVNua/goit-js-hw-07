function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputField = document.querySelector('input');
inputField.style.display = "flex";
inputField.style.alignItems = "center";
inputField.style.justifyContent = "center";
inputField.style.flexDirection = "row";
inputField.style.gap = "10px";
inputField.style.border = "1px solid #808080";
inputField.style.borderRadius= "8px";
inputField.style.padding = "8px 16px";
inputField.style.width = "150px";
inputField.style.height = "40px";

const containerControls = document.querySelector('#controls');
containerControls.style.display = "flex";
containerControls.style.alignItems = "flex-start";
containerControls.style.justifyContent = "flex-start";
containerControls.style.flexDirection = "row";
containerControls.style.gap = "16px";
containerControls.style.borderRadius= "8px";
containerControls.style.padding = "32px";
containerControls.style.width = "486px";
containerControls.style.height = "104px";
containerControls.style.background = "#f6f6fe";

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const createButton = document.querySelector('[data-create]');
  createButton.style.display = "flex";
  createButton.style.alignItems = "center";
  createButton.style.justifyContent = "center";
  createButton.style.flexDirection = "row";
  createButton.style.gap = "10px";
  createButton.style.border = "none";
  createButton.style.borderRadius= "8px";
  createButton.style.padding = "8px 16px";
  createButton.style.width = "120px";
  createButton.style.height = "40px";
  createButton.style.background = "#4e75ff";
  createButton.style.fontWeight = 500;
  createButton.style.fontSize = "16px";
  createButton.style.lineHeight = 1.5;
  createButton.style.letterSpacing = "0.04em";
  createButton.style.color = "#fff";

  const destroyButton = document.querySelector('[data-destroy]');
  destroyButton.style.display = "flex";
  destroyButton.style.alignItems = "center";
  destroyButton.style.justifyContent = "center";
  destroyButton.style.flexDirection = "row";
  destroyButton.style.gap = "10px";
  destroyButton.style.border = "none";
  destroyButton.style.borderRadius= "8px";
  destroyButton.style.padding = "8px 16px";
  destroyButton.style.width = "120px";
  destroyButton.style.height = "40px";
  destroyButton.style.background = "#ff4e4e";
  destroyButton.style.fontWeight = 500;
  destroyButton.style.fontSize = "16px";
  destroyButton.style.lineHeight = 1.5;
  destroyButton.style.letterSpacing = "0.04em";
  destroyButton.style.color = "#fff";

  const input = document.querySelector('input[type="number"]');
  
  createButton.addEventListener("click", () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
  
  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });
});

const boxesContainer = document.querySelector('#boxes');
    boxesContainer.style.display = "flex";
    boxesContainer.style.flexDirection = "row";
    boxesContainer.style.flexWrap = "wrap";
    boxesContainer.style.rowGap = "44px";
    boxesContainer.style.columnGap = "44px";
    boxesContainer.style.padding = "0 32px"