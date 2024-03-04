//Напишите функцию, которая принимает в качестве аргумента одну непустую строку,
// состоящую только из строчных и прописных букв ASCII (слова),
// и возвращает упорядоченный список, содержащий индексы всех заглавных (прописных) букв в строке.
//
// Пример (Ввод -> Выход)
// «CodEWaRs» --> [0,3,4,6]


 function capitals (word) {
  let toUpper = word.toUpperCase()
   let arr = []
   for (let i = 0; i < word.length; i++) {
     if(word[i] === toUpper[i]){
       arr.push(i)
     }
   }
   return arr
}

console.log(capitals('CodEWaRs'))