const form = document.querySelector('.login-form');
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "flex-start";
form.style.gap = "16px";
form.style.borderRadius = "8px";
form.style.padding = "24px";
form.style.width = "408px";
form.style.background = "#fff";
form.style.fontFamily = "Montserrat, sans-serif";
form.style.fontWeight = 400;
form.style.fontSize = "16px";
form.style.lineHeight = 1.5;
form.style.letterSpacing = "0.04em";
form.style.color = "#2e2f42";
form.style.position = "absolute";
form.style.top = "50%";
form.style.left = "50%";
form.style.transform = "translate(-50%, -50%)";
  
form.addEventListener('submit', event => {
    event.preventDefault();

  const email = form.querySelector('input[name="email"]').value.trim();
  const password = form.querySelector('input[name="password"]').value.trim();

   if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  
    const formDataObject = {
    email: email,
    password: password
  };
  
    console.log(formDataObject);
  
    form.reset();
});

const labelItems = form.querySelectorAll("label");
labelItems.forEach(function (elementLabel) {
  const container = document.createElement("div");
  elementLabel.style.display = "flex";
  elementLabel.style.flexDirection = "column";
  elementLabel.style.alignItems = "flex-start";
  elementLabel.style.justifyContent = "flex-start";
  elementLabel.style.gap = "8px";
  const inputItems = (elementLabel.querySelectorAll("input"));
inputItems.forEach(function (element) {
  element.style.border = "1px solid #808080";
  element.style.borderRadius = "4px";
  element.style.width = "360px";
  element.style.height = "40px";
});
});

const logBtn = form.querySelector("button");
logBtn.style.display = "flex";
logBtn.style.alignItems = "center";
logBtn.style.justifyContent = "center";
logBtn.style.flexDirection = "row";
logBtn.style.gap = "10px";
logBtn.style.border = "none";
logBtn.style.borderRadius = "8px";
logBtn.style.padding = "8px 16px";
logBtn.style.width = "86px";
logBtn.style.height = "40px";
logBtn.style.background = "#4e75ff";
logBtn.style.fontWeight = 500;
logBtn.style.fontSize = "16px";
logBtn.style.lineHeight = 1.5;
logBtn.style.letterSpacing = "0.04em";
logBtn.style.color = "#fff";