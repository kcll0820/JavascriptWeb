// 1234567890abcdef
const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const colorList = [..."0123456789abcdef"];
const getOneOfHex = () => colorList[getRandom(0, colorList.length)];

const getColor = () =>
  "#" +
  Array(6)
    .fill(0)
    .map(() => getOneOfHex())
    .join("");

Array(10)
  .fill(0)
  .forEach(() => {
    const btn = document.createElement("button");
    const color = getColor();
    btn.innerText = color;
    btn.addEventListener("click", () => {
      const box = document.querySelector("#box");
      box.style.backgroundColor = color;
    });
    document.body.appendChild(btn);
  });
