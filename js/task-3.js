const inputElement = document.getElementById("name-input");
inputElement.style.fontFamily = "Montserrat, sans-serif";
inputElement.style.fontWeight = 400;
inputElement.style.fontSize = "16px";
inputElement.style.lineHeight = 1.5;
inputElement.style.letterSpacing = "0.04em";
inputElement.style.color = "#2e2f42";
inputElement.style.border = "1px solid #808080";
inputElement.style.borderRadius = "4px";
inputElement.style.width = "360px";
inputElement.style.height = "40px";

const outputElement = document.getElementById("name-output");
inputElement.addEventListener("input", function() {
       const inputValue = inputElement.value.trim();
        if (inputValue === "") {
        outputElement.textContent = "Anonymous";
    } else {
        outputElement.textContent = inputValue;
    }
});

const categoryTitle = document.querySelector("h1")
categoryTitle.style.fontFamily = "Montserrat, sans-serif";
categoryTitle.style.fontweight = 600;
categoryTitle.style.fontSize = "24px";
categoryTitle.style.lineHeight = 1.33;
categoryTitle.style.letterSpacing = "0.04em";
categoryTitle.style.color = "#2e2f42";
categoryTitle.style.margin = 0;

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "flex-start";
container.style.gap = "16px";
container.style.borderRadius = "8px";
container.style.padding = "24px";
container.style.width = "408px";
container.style.background = "#fff";
container.style.position = "absolute";
container.style.top = "50%";
container.style.left = "50%";
container.style.transform = "translate(-50%, -50%)";

container.appendChild(inputElement);
container.appendChild(categoryTitle);

document.body.appendChild(container);

 

