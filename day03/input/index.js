const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (btn.innerHTML == "😶") {
    input.type = "password";
    btn.innerHTML = "😎";
  } else {
    input.type = "text";
    btn.innerHTML = "😶";
  }
});
