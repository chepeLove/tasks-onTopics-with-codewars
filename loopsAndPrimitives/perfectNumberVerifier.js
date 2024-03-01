//Идеальное число - это число, для которого сумма его делителей
// (исключая само число) равна самому числу.
//
// Напишите функцию, которая может проверить, является ли данное целое число
// n идеальным числом, и вернуть True, если да, или False, если нет.
//
// Примеры:
// n = 28 имеет следующие делители: 1, 2, 4, 7, 14, 28
//
// 1 + 2 + 4 + 7 + 14 = 28, поэтому 28 - идеальное число, и вы должны вернуть True
//
// Еще один пример:
//
// n = 25 имеет следующие делители: 1, 5, 25
//
// 1 + 5 = 6, поэтому 25 не является идеальным числом, и вы должны вернуть False

function isPerfect(n) {
  if(n===1  || n <= 0)return false
  let result = []
  for (let i = 0; i < n; i++) {
    if(n % i === 0){
      result.push(i)
    }
  }
  return n ===  result.reduce((acc,el)=> acc + el)
}
//
console.log(isPerfect(6) )

function isPerfectNumber(n) {
  if (n===1  || n <= 0) {
    return false;
  }

  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
}


function isPerfectNumber2(n) {
  if (n === 1 || n <= 0) {
    return false;
  }

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;


      if (i !== n / i) {
        sum += n / i;
      }

      if (sum > n) {
        return false;
      }
    }
  }

  return sum === n;
}

