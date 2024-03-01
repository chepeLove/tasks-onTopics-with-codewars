// Вы получаете массив чисел, верните сумму всех положительных чисел.
//
//   Пример: [1, -4, 7, 12] => 1 + 7 + 12 = 20
//
// Примечание: если нет чисел для суммирования, сумма по умолчанию равна 0.

function positiveSum(arr) {
  if(arr.length === 0 || arr.filter(el=>el > 0).length === 0) return  0
  return arr.filter(el=>el > 0).reduce((acc,currentValue)=>acc+currentValue)
}

function positiveSum1(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([1,2,3,4,5]))
console.log(positiveSum1([1,-2,3,4,5]))