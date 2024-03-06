//Давайте создадим некоторый прокручиваемый текст!
//
// Ваша задача - завершить функцию, которая принимает строку и
// возвращает массив со всеми возможными вращениями данной строки в верхнем регистре.
//
// Пример:
//
// scrollingText("codewars") должно вернуть:
//
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]


function scrollingText(text){
  let arr = []
  let textUp = text.toUpperCase()
  for (let i = 0; i < text.length; i++) {
    let newStr = textUp.slice(i) + textUp.slice(0,i)
    arr.push(newStr)
  }
  return arr
}

console.log(scrollingText("abc"))