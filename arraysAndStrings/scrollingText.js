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

function scrollingText1(text) {
  let temp = []
  let save = text.split('')
  for (let i = 0; i < save.length; i++) {
    let movingEl = text.split('').splice(0, i)
    let restEl = text.split('').splice(i, text.length)
    let result = restEl.concat(movingEl).join('').toUpperCase()
    temp.push(result)
  }
  return temp
}

console.log(scrollingText("abc"))