//Вернуть количество гласных в данной строке.
//
// Для этого задания мы будем считать a, e, i, o, u гласными (но не y).
//
// Входная строка будет содержать только строчные буквы и/или пробелы.

function getCount(str) {
  return str.toLowerCase().match(/[aeiou]/g).length
}

function getCount1(str) {
  let vowels = ['a','e','i','o','u']
  return str.toLowerCase().split('').filter(el => vowels.includes(el)).length
}

console.log(getCount1("abracadabra"))