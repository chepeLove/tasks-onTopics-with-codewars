//Напишите функцию, которая принимает массив чисел (целых чисел для тестов) и целевое число.
// Она должна найти два различных элемента в массиве, сумма которых равна целевому значению.
// Затем индексы этих элементов должны быть возвращены в виде кортежа / списка
// (в зависимости от вашего языка) следующим образом: (индекс1, индекс2).
//
// Для этого ката некоторые тесты могут иметь несколько ответов; любые правильные
// решения будут приняты.
//
// Ввод всегда будет действительным (числа будут массивом длиной 2 или более,
// и все элементы будут числами; цель всегда будет суммой двух различных элементов
// из этого массива).

function twoSum(numbers, target) {
  for (let i = 0; i <numbers.length-1; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target){
        return [i,j]
      }
    }
  }
}


function twoSum1(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(numbers[i], i);
  }

  return null; // If no such pair found
}

console.log(twoSum([1, 2, 3], 4))