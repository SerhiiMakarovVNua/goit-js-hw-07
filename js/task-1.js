const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(function (categoryItem) {
    const categoryTitle = categoryItem.querySelector("h2").textContent;
    categoryItem.querySelector("h2").style.margin = "0";
    categoryItem.querySelector("h2").style.fontFamily = "Montserrat, sans-serif";
    categoryItem.querySelector("h2").style.fontWeight = 600;
    categoryItem.querySelector("h2").style.fontSize = "24px";
    categoryItem.querySelector("h2").style.lineHeight = 1.33;
    categoryItem.querySelector("h2").style.letterSpacing = "0.04em";
    categoryItem.querySelector("h2").style.color = "#2e2f42";
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
        element.style.letterSpacing = "0.04em";
        element.style.color = "#2e2f42";
        element.style.padding = "8px 16px";
    });

    const categoryUl = categoryItem.querySelector("ul");
    categoryUl.style.listStyleType = "none";
    categoryUl.style.margin = "0";
    categoryUl.style.padding = "0";
    categoryUl.style.display = "flex";
    categoryUl.style.alignItems = "flex-start";
    categoryUl.style.justifyContent = "flex-start";
    categoryUl.style.flexDirection = "column";
    categoryUl.style.gap = "8px";
    categoryUl.style.width = "360px";
   
    const categoryLi = categoryItem.querySelectorAll("ul>li");
    categoryLi.forEach(function (elementli) {
        elementli.style.border = "1px solid #808080";
        elementli.style.borderRadius = "4px";
        elementli.style.width = "360px";
        elementli.style.height = "40px";
    });
       
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
});
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
   