//Ваша цель в этой задаче - реализовать функцию difference, которая вычитает один список из другого и возвращает результат.
//
// Она должна удалить все значения из списка a, которые присутствуют в списке b, сохраняя их порядок.
//
// Пример:
// difference([1, 2], [1]); // должно вернуть [2]
// Если значение присутствует в b, все его вхождения должны быть удалены из другого списка:
//
// difference([1, 2, 2, 2, 3], [2]); // должно вернуть [1, 3]


function arrayDiff(a, b) {
    return a.filter(el =>  !b.includes(el))
}

console.log(arrayDiff([1,2], [1]))
console.log(arrayDiff([1,2,2], []))
console.log(arrayDiff([1,2,3], [1,2]))