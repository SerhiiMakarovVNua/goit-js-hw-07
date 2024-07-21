function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
changeColorButton.style.display = "flex";
changeColorButton.style.alignItems = "center";
changeColorButton.style.justifyContent = "center";
changeColorButton.style.flexDirection = "row";
changeColorButton.style.gap = "10px";
changeColorButton.style.border = "none";
changeColorButton.style.borderRadius = "8px";
changeColorButton.style.padding = "8px 16px";
changeColorButton.style.width = "148px";
changeColorButton.style.height = "40px";
changeColorButton.style.background = "#4e75ff";
changeColorButton.style.fontWeight = 500;
changeColorButton.style.fontSize = "16px";
changeColorButton.style.lineHeight = 1.5;
changeColorButton.style.color = "#fff";

const colorSpan = document.querySelector('span.color');

const conteinerWidget = document.querySelector('.widget');
conteinerWidget.style.display = "flex";
conteinerWidget.style.flexDirection = "column";
conteinerWidget.style.alignItems = "center";
conteinerWidget.style.justifyContent = "center";
conteinerWidget.style.gap = "10px";
conteinerWidget.style.borderRadius = "8px";
conteinerWidget.style.padding = "24px";
conteinerWidget.style.width = "345px";
conteinerWidget.style.height = "280px";
conteinerWidget.style.background = "#fff";
conteinerWidget.style.position = "absolute";
conteinerWidget.style.top = "50%";
conteinerWidget.style.left = "50%";
conteinerWidget.style.transform = "translate(-50%, -50%)";

const colorTitle = conteinerWidget.querySelector('p');
colorTitle.style.fontWeight = 400;
colorTitle.style.fontSize = "16px";
colorTitle.style.lineHeight = 1.5

changeColorButton.addEventListener('click', function() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
});

var styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(
    "body { font-family: 'Montserrat', sans-serif; letter spacing: 0.04em; color = #2e2f42; }"
));
document.head.appendChild(styleElement)