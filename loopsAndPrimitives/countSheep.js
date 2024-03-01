//Если не можете уснуть, просто считайте овецки!!
//
// Задача:
// Учитывая неотрицательное целое число, например,
// 3, верните строку с мурмуром: "1 овечка...2 овечка...3 овечка...".
// Ввод всегда будет корректным, то есть без отрицательных целых чисел.

const countSheep = function (num) {
  if(num === 0){
    return ''
  }
  let result = []
  for (let i = 1; i <= num; i++) {
    result.push(`${i} sheep...`)
  }
  return result.join('')
}

console.log(countSheep(1))

const countSheep1 = num => {
  let val = '';
  for (let i = 1; i <= num; i++) {
    val += `${i} sheep...`;
  }
  return val;
}