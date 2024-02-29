//Напишем функцию, которая принимает массив из 10 целых
// чисел (в пределах от 0 до 9) и возвращает строку в формате телефонного номера.

function createPhoneNumber(numbers){
  return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))