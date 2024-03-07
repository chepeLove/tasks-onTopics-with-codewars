// Просто создай коробку
// Учитывая число в качестве параметра (от 2 до 30),
// верните массив строк, которые формируют коробку.
//   Например:
//
// n = 5
//
//   [
//   '-----',
//     '- -',
//     '- -',
//     '- -',
//     '-----'
//   ]
// n = 3
//
//   [
//   '---',
//     '- -',
//     '---'
//   ]


function box(num){
  let arr = []
  for (let i = 0; i < num; i++) {
      if(i === 0 || i === num - 1){

        arr.push('-'.repeat(num))
      }else {
        arr.push('-' + ' '.repeat(num - 2) + '-');
      }
  }
  return arr
}

function box2(n) {
  const outB = '-'.repeat(n);
  const inB = `-${' '.repeat(n-2)}-`;

  return [outB, ...Array(n-2).fill(inB), outB];
}

console.log(box(3))