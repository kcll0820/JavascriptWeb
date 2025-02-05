// data = [
//   {
//     company: "진에어", //항공편
//     departureTime: "08:45", //출발시간
//     arrivalTime: "11:20", //도착시간
//     price: 162000, //가격
//     date: "2025-03-16", // 비행날짜
//     destination: "오사카", //도착지
//   },
// ];

// const time = data.map((x) => {
//   const [dtHour, dtMinute] = x.DepartureT.split(":");
//   const [atHour, atMinute] = x.ArrivalTime.split(":");
//   x.dtHour = dtHour;
//   x.dtMinute = dtMinute;
//   x.atHour = atHour;
//   x.atMinute = atMinute;
//   const hour = data.map((x) => {
//     if (atMinute - dtMinute < 0) {
//       minusHour = atHour - dtHour - 1;
//     } else {
//       minusHour = atHour - dtHour;
//     }
//   });
//   const minute = data.map((x) => {
//     if (atMinute - dtMinute < 0) {
//       minusMinute = 60 + (atMinute - dtMinute);
//     } else {
//       minusMinute = atMinute - dtMinute;
//     }
//   });
//   delete x.dtHour;
//   delete x.dtMinute;
//   delete x.atHour;
//   delete x.atMinute;
//   const getTime = `소요시간 : ${minusHour}시간 ${minusMinute}분`;
//   return getTime;
// });

// const flyingTime = document.querySelector(".flyingTime");
// flyingTime.innerHTML = time;

const company = ["진에어", "대한항공", "아시아나항공", "티웨이항공"];
const destination = ["도쿄", "오사카"];
const randomPrice = Math.floor(Math.random() * 100 + 160);
const price = randomPrice + "000";
console.log(price);

const randomHour = Math.floor(Math.random() * 25);
const getHour = (x) => {
  if (x < 10) return "0" + x;
  else if (x == 24) return "00";
  else return x;
};

const randomMinute = Math.floor(Math.random() * 61);
const getMinute = (x) => {
  if (x < 10) return "0" + x;
  else if (x == 60) return "00";
  else return x;
};

const departureTime =
  getHour(randomHour) + "시 " + getMinute(randomMinute) + "분";
console.log({ departureTime });

const arrivalHoure = (x) => {
  const arrivalTime = x + 2;
  if (arrivalTime >= 24) {
    if (arrivalTime - 24 < 10) {
      return "0" + (arrivalTime - 24);
    } else {
      return arrivalTime - 24;
    }
  } else if (arrivalTime < 10) return "0" + arrivalTime;
  else return arrivalTime;
};

const arrivalMinute = (x) => {
  const arrivalMinute = x + 30;
  if (arrivalMinute >= 60) {
    if (arrivalMinute - 60 < 10) {
      return "0" + (arrivalMinute - 60);
    } else {
      return arrivalMinute - 60;
    }
  } else if (arrivalMinute < 10) return "0" + arrivalMinute;
  else return arrivalMinute;
};

const arrivalTime =
  arrivalHoure(randomHour) + "시 " + arrivalMinute(randomMinute) + "분";
console.log({ arrivalTime });
