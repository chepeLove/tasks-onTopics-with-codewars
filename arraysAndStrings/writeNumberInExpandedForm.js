//Напишите число в развернутой форме
// Вам будет предоставлено число, и вам нужно вернуть его в виде строки в
// развернутой форме. Например:
//
// expandedForm(12); // Должно вернуться '10 + 2'
// expandedForm(42); // Должно вернуться '40 + 2'
// expandedForm(70304); // Должно вернуться '70000 + 300 + 4'
// ПРИМЕЧАНИЕ: Все числа будут целыми положительными числами, большими 0.

function expandedForm(num) {
  const arrStr = num.toString().split('');
  const newArr = [];

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] !== '0') {
      newArr.push(arrStr[i] + '0'.repeat(arrStr.length - 1 - i));
    }
  }

  return newArr.join(' + ');
}


console.log(expandedForm(12))
console.log(expandedForm(70304))