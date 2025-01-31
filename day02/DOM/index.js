// const btn = document.createElement("button");
// btn.innerText = "버튼";
// btn.addEventListener("click", () => {
//   alert("점메추");
// });
// document.body.appendChild(btn);

// document.getElementsByClassName
// document.querySelector

// const red = document.querySelector(".red");
// red.addEventListener("click", () => {
//   alert("빨강");
// });

// const blue = document.querySelector(".blue");
// blue.addEventListener("click", () => {
//   alert("파랑");
// });

// const green = document.querySelector(".green");
// green.addEventListener("click", () => {
//   alert("초록");
// });

// const makeAlert = (msg) => {
//   alert(msg);
// };

// [".red", ".blue", ".green"].forEach((v) => {
//   document.querySelector(v).addEventListener("click", () => makeAlert(v));
// });

// const redButton = document.querySelector(".red");
// const blueButton = document.querySelector(".blue");
// const greenButton = document.querySelector(".green");
// const squareButton = document.querySelector(".square");
// const softButton = document.querySelector(".soft");
// const hardButton = document.querySelector(".hard");
// const smallButton = document.querySelector(".small");
// const mediumButton = document.querySelector(".medium");
// const largeButton = document.querySelector(".large");

// const box = document.querySelector(".box");

// redButton.addEventListener("click", () => {
//   box.style.backgroundColor = "red";
// });
// blueButton.addEventListener("click", () => {
//   box.style.backgroundColor = "blue";
// });
// greenButton.addEventListener("click", () => {
//   box.style.backgroundColor = "green";
// });

// squareButton.addEventListener("click", () => {
//   box.style.borderRadius = "0px";
// });
// softButton.addEventListener("click", () => {
//   box.style.borderRadius = "30px";
// });
// hardButton.addEventListener("click", () => {
//   box.style.borderRadius = "9999px";
// });

// smallButton.addEventListener("click", () => {
//   box.style.width = "100px";
//   box.style.height = "100px";
// });
// mediumButton.addEventListener("click", () => {
//   box.style.width = "200px";
//   box.style.height = "200px";
// });
// largeButton.addEventListener("click", () => {
//   box.style.width = "300px";
//   box.style.height = "300px";
// });

const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue");
const greenButton = document.querySelector("#green");
const squareButton = document.querySelector("#square");
const softButton = document.querySelector("#soft");
const hardButton = document.querySelector("#hard");
const smallButton = document.querySelector("#small");
const mediumButton = document.querySelector("#medium");
const largeButton = document.querySelector("#large");
const box = document.querySelector(".box");

const colorBox = ["red", "blue", "green"];

redButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("red");
});
blueButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("blue");
});
greenButton.addEventListener("click", () => {
  box.classList.remove(...colorBox);
  box.classList.add("green");
});
squareButton.addEventListener("click", () => {
  box.classList.remove("soft");
  box.classList.remove("hard");
  box.classList.add("square");
});
softButton.addEventListener("click", () => {
  box.classList.remove("square");
  box.classList.remove("hard");
  box.classList.add("soft");
});
hardButton.addEventListener("click", () => {
  box.classList.remove("square");
  box.classList.remove("soft");
  box.classList.add("hard");
});
smallButton.addEventListener("click", () => {
  box.classList.remove("medium");
  box.classList.remove("large");
  box.classList.add("small");
});
mediumButton.addEventListener("click", () => {
  box.classList.remove("small");
  box.classList.remove("large");
  box.classList.add("medium");
});
largeButton.addEventListener("click", () => {
  box.classList.remove("small");
  box.classList.remove("medium");
  box.classList.add("large");
});
