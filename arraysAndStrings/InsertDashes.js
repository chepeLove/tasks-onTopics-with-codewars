//Напишите функцию insert_dash(num), которая вставляет дефисы ('-')
// между каждой парой нечетных цифр в числе num. Например, если num равно 454793,
// вывод должен быть 4547-9-3.
//
// Обратите внимание, что число всегда будет неотрицательным (>= 0).

function insertDash(num) {
  let str = num.toString()
  let arr = []
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i])
    if(Number(str[i]) % 2 !== 0 && str[i+1] !== undefined && Number(str[i+1]) % 2 !== 0){
      arr.push('-')
    }
  }
  return arr.join('')
}

console.log(insertDash(454793))