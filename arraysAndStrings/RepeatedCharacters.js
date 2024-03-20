//Написать функцию по подсчету повторяющихся символов
// const x = 'aaabbcccddddaa';
// Получить результат
// // output: 3a2b3c4d2a


function repeatedCharacters(str) {
  let result = '';
  let obj = str.split('').reduce((acc,curr) => {
    if(acc[curr]){
      acc[curr]++
    }else {
      acc[curr] = 1
    }
    return acc
  } ,{})
  for (let char in obj) {
    result += obj[char] + char;
  }
  return result
}

console.log(repeatedCharacters('aaabbcccddddaa'))