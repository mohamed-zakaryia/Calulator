var input = document.querySelector("#display");
var buttons = Array.from(document.querySelectorAll(".buttons"));
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        input.innerText = "";
        break;
      case "=":
        input.innerText = eval(input.innerText);
        break;
      case "←":
        input.innerText = input.innerText.slice(0, -1);
        break;
      default:
        input.innerText += e.target.innerText;
    }
  });
});
