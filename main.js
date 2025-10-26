// O'zgaruvchi 3 xil: var, let, const. Var eski syntaxix.
// Hozir let bilan const ishlatiladi
let ism = "Azamat";
let yosh = 29;
let kasb = "frontend";
console.log(
  `Меня зовут ${ism}, мне ${yosh} лет, я будущий ${kasb} разработчик`
);

let yosh2 = 16;
if (yosh2 >= 18) {
  console.log("Sizga kirish ruxsat");
} else {
  console.log("Sizga kirish taqiqlangan");
}

let yosh3 = 20;
let hujjatBormi = false;
if (yosh3 >= 18 && hujjatBormi == true) {
  console.log("Kirish mumkin");
} else if (yosh3 >= 18 && hujjatBormi == false) {
  console.log("Hujjat kerak");
} else {
  console.log("Yosh yetarli emas");
}

// Ma'lumot turlari:
// #1 Number
// #2 Matn - string
// #3 Boolean true/false
// #4 Null
// #5 Undefined

// Object - Kompleks ma'lumot turlari
// #1 Array - Massiv
// #2 Function
// #3 Object
// #4 Muntazam iboralar
// #5 Error

// Object Misol:
// const user = {name: "Azamat",}
// name - Key
// "Azamat" - Value(qiymat)
// Qiymat - Number, String, Boolean, Undefined, Object, Array

// Array
// const colors = ['red', 'blue', 'yellow', 'white', 'black']

// Window Open:
//alert ('Hello')
// const isAcces = confirm('Are you 18 old years?')
// const name = prompt('What is your name?')
// const age = +prompt('How old are you?', '')
// console.log(age)

// Operatorlar
// +, -, /, *, %, && - bu har doim falseni qidiradi, || bu har doim trueni qidiradi

// Postfix
// Increment x++
// Decrement y--

// Prefix
// ++x
// --y

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "")
// console.log(numberOfSeries)
// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// }
// const firstQuestion = prompt("Oxirgi ko'rgan serialingiz?", "")
// const secondQuestion = prompt("Nechi baho berasiz?", "")

// const firstQuestion1 = prompt("Oxirgi ko'rgan serialingiz?", "")
// const secondQuestion1 = prompt("Nechi baho berasiz?", "")

// seriesDB.series[firstQuestion] = secondQuestion
// seriesDB.series[firstQuestion1] = secondQuestion1

// console.log(seriesDB)

function salomlashish(ism, yosh) {
  if (yosh >= 18) {
    console.log(`Salom, ${ism}!, Siz kattasiz`);
  } else {
    console.log(`Salom, ${ism}!, Siz yoshsiz`);
  }
}
salomlashish("Azamat", 29);
salomlashish("Ali", 15);

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
// console.log(numberOfSeries);
// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };
// for (let i = 0; i < 2; i++) {
//   const a = prompt(`Oxirgi korgan serialingiz ${i}?`, "");
//   const b = prompt(`Nechi baho berasiz ${i}?`, "");

//   if (a !== null && b !== null && a !== "" && b !== "") {
//     seriesDB.series[a] = b;
//     // console.log("Done");
//   } else {
//     i--;
//   }
// }
// if (seriesDB.count < 5) {
//   console.log("Siz kam serial ko'ripsiz")
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//   console.log("Siz klassik tomoshabin ekansiz")
// } else if (seriesDB.count >= 10) {
//   console.log("Siz serialchi zvezda ekansiz")
// }
// console.log(seriesDB);
