//Просто, учитывая строку слов, верните длину самого короткого слова (или слов).
//
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function findShort(s){
  let array = s.split(' ')
  let result = []

  for (let i = 0; i < array.length; i++) {
      result.push(array[i].length)
  }

  return Math.min(...result)
}

function findShort1(s){
  return Math.min(...s.split(" ").map (s => s.length));
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort1("Let's travel abroad shall we"))