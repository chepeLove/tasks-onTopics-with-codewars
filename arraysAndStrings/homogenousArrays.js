//Задача:
//
// Учитывая двумерный массив, верните новый массив, который содержит только те массивы
// из оригинала, которые не были пустыми и все их элементы одного
// и того же типа (т.е. однородные). Для простоты предполагается,
// что массивы внутри массива будут содержать только символы и целые числа.
//
// Пример:
//
// Учитывая [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]],
// ваша функция должна вернуть [[1, 5, 4], ['b']].
//
// Дополнение:
//
// Пожалуйста, имейте в виду, что для этого ката мы предполагаем,
// что пустые массивы не являются однородными.
//
// Полученные массивы должны быть в том порядке, в котором они были изначально,
// и их значения не должны изменяться.
//
// Не допускается неявное приведение типов. Подмассив [1, '2']
// считается недопустимым и должен быть отфильтрован.


function filterHomogenous(arrays) {
  return arrays.filter(el => {
    if(el.length === 0) return false
    let firstItem = typeof el[0]
    return  el.every(item => typeof item === firstItem)
  })
}
let filterHomogenous1 = a => a.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))