//Первый массив ввода представляет собой ключ к правильным ответам на экзамене,
// например ["a", "a", "b", "d"]. Второй массив содержит ответы, предоставленные студентом.
//
// Оба массива не пусты и имеют одинаковую длину. Верните баллы за этот массив ответов,
// присваивая +4 за каждый правильный ответ, -1 за каждый неправильный ответ
// и +0 за каждый пустой ответ, представленный пустой строкой
// (в языке C используется символ пробела).
//
// Если баллы < 0, вернуть 0.
//
// Например:
//
// javascript
// Copy code
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0



function checkExam(array1, array2) {
  let array3 = []
  for (let i = 0; i < array1.length; i++) {
    if(array2[i] === ''){
      array3.push(0)
    }
    if(array1[i] === array2[i]){
      array3.push(4)
    }
    if(array1[i] !== array2[i] && array2[i] !== ''){
      array3.push(-1)
    }
    console.log(array3)
  }

  let result = array3.reduce((acc,currentValue)=> acc + currentValue)
   if(result < 0){
     return 0
   }else {
     return result
   }
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",""]))
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))
// console.log(checkExam(["a","c","c","c","c","a","c","a","c","c","c","c","c","b","c","a","b","c"], ["b","","a","b","b","c","a","","","","b","","b","","b","a","c","a"]))
