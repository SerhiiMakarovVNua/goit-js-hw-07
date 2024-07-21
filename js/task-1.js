const categoriesList = document.querySelector("#categories");
categoriesList.style.listStyleType = "none";
categoriesList.style.margin = "0";
categoriesList.style.padding = "0";
categoriesList.style.display = "flex";
categoriesList.style.alignItems = "flex-start";
categoriesList.style.justifyContent = "flex-start";
categoriesList.style.flexDirection = "column";
categoriesList.style.gap = "24px";
categoriesList.style.borderRadius = "8px";
categoriesList.style.padding = "24px";
categoriesList.style.width = "440px";
categoriesList.style.background = "#fff";

const categoryItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(function (categoryItem) {
    const categoryTitle = categoryItem.querySelector("h2").textContent;
    categoryItem.style.margin = "0";
    categoryItem.style.fontWeight = 600;
    categoryItem.style.fontSize = "24px";
    categoryItem.style.lineHeight = 1.33;
    categoryItem.style.background = "#f6f6fe";
    categoryItem.style.display = "flex";
    categoryItem.style.alignItems = "flex-start";
    categoryItem.style.justifyContent = "flex-start";
    categoryItem.style.flexDirection = "column";
    categoryItem.style.gap = "16px";
    categoryItem.style.borderRadius = "8px";
    categoryItem.style.padding = "16px";
    categoryItem.style.width = "392px";

    const categoryElements = categoryItem.querySelectorAll("li");
    categoryElements.forEach(function (element) {
        element.style.fontWeight = 400;
        element.style.fontSize = "16px";
        element.style.lineHeight = 1.5;
        element.style.padding = "8px 16px";
    });
             
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
});


var styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(
    "body { font-family: 'Montserrat', sans-serif; letter spacing: 0.04em; color = #2e2f42; }" +
    "ul {list-style-type: none; margin: 0; padding: 0; display: flex; align-items flex-start; justify-content: flex-start; flex-direction: column; gap: 8px; width: 360px;}" +
    "ul>li>ul>li {border: 1px solid #808080; border-radius: 4px; width: 360px; height: 40px;}"
));
document.head.appendChild(styleElement)