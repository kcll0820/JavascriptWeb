// const input = document.querySelector("#input");
// const btn = document.querySelector("#btn");
// const word = document.querySelector("#word");
// const length = document.querySelector("#length");

// input.addEventListener("input", (e) => {
//   const { target } = e;
//   if (
//     (target.value.includes("!") ||
//       target.value.includes("@") ||
//       target.value.includes("#") ||
//       target.value.includes("$")) &&
//     6 <= target.value.length &&
//     target.value.length <= 20
//   ) {
//     word.style.color = "#BDEE63";
//     length.style.color = "#BDEE63";
//     btn.style.color = "white";
//     btn.style.backgroundColor = "black";
//   } else if (
//     !(
//       target.value.includes("!") ||
//       target.value.includes("@") ||
//       target.value.includes("#") ||
//       target.value.includes("$")
//     ) &&
//     6 <= target.value.length &&
//     target.value.length <= 20
//   ) {
//     word.style.color = "#cecece";
//     length.style.color = "#BDEE63";
//     btn.style.color = "white";
//     btn.style.backgroundColor = "#cecece";
//   } else if (
//     (target.value.includes("!") ||
//       target.value.includes("@") ||
//       target.value.includes("#") ||
//       target.value.includes("$")) &&
//     (6 > target.value.length || target.value.length > 20)
//   ) {
//     word.style.color = "#BDEE63";
//     length.style.color = "#cecece";
//     btn.style.color = "white";
//     btn.style.backgroundColor = "#cecece";
//   } else {
//     word.style.color = "#cecece";
//     length.style.color = "#cecece";
//     btn.style.color = "white";
//     btn.style.backgroundColor = "#cecece";
//   }
// });

import { elements } from "./elements.js";
import { handlerInputEvent } from "./handler.js";

elements.input.addEventListener("input", (e) => handlerInputEvent(e));
