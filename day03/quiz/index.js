const input = document.querySelector("input");
const icon = ["#hide", "#view"];

icon.forEach((v) => {
  hide.addEventListener("click", () => {
    if (hide.style.display == "none") {
      hide.style.display = "flex";
      view.style.display = "none";
      input.type = "password";
    } else {
      hide.style.display = "none";
      view.style.display = "flex";
      input.type = "text";
    }
  });
});
