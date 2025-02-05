const btn = document.querySelector("#btn");
const list = document.querySelector("#linkList");

btn.addEventListener("click", () => {
  if (linkList.style.display == "flex") {
    linkList.style.display = "none";
  } else {
    linkList.style.display = "flex";
  }
});
