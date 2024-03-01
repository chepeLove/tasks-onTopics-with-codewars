// "Я дам вам целое число. Верните мне фигуру, длина
// и ширина которой равны этому целому числу.
// Число будет целым числом от 1 до 50.
//
// Пример
// n = 3, поэтому я ожидаю получить квадрат 3x3, как показано ниже в виде строки:
//
//   +++
//   +++
//   +++"

function generateShape(integer){
  let result = ''
  for (let i = 0; i <= integer; i++) {
    for (let j = 0; j < integer; j++) {
      result += '+'
    }
    result +='\n'
  }
  return result.trim()
}

function generateShape1(int){
  return Array(int).fill(Array(int+1).join('+')).join('\n')
}


function generateShape2(integer){
  return ('+'.repeat(integer) + '\n').repeat(integer).trim();
}

console.log(generateShape(4))