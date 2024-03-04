//Напишите функцию, которая может возвращать наименьшее значение массива
// или индекс этого значения. Второй параметр функции будет указывать,
// должно ли оно возвращать значение или индекс.
//
// Предполагается, что первый параметр всегда будет массивом,
// заполненным по меньшей мере 1 числом и не содержащим дубликатов.
// Предполагается, что второй параметр будет строкой, содержащей одно
// из двух значений: "value" и "index".
//
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0


function min(arr, toReturn) {
  if(toReturn === 'value'){
    return Math.min(...arr)
  }
  if(toReturn === 'index'){
    let minIndex = 0;
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i];
        minIndex = i;
      }
    }

    return minIndex;
  }
}

console.log(min([1,2,3,4,5], 'value'))
console.log(min([1,2,3,4,5], 'index'))


const min1 = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
