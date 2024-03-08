///Многие люди предпочитают заменять свой адрес электронной почты,
// когда отображают его в Интернете. Один общий способ сделать это - заменить символы @ и .
// их буквальными эквивалентами в квадратных скобках.
//
// Пример 1:
//
// user_name@example.com => user_name [at] example [dot] com
// Пример 2:
// af5134@borchmore.edu => af5134 [at] borchmore [dot] edu
// Пример 3:
//
// jim.kuback@ennerman-hatano.com
// => jim [dot] kuback [at] ennerman-hatano [dot] com
//
// Используя приведенные выше примеры в качестве руководства, напишите функцию,
// которая принимает строку адреса электронной почты и возвращает его
// обфусцированную версию в виде строки, заменяя символы @ и . на [at] и [dot] соответственно.


function obfuscate(email) {
  return email.replace(/@/g, ' [at] ').replace(/\./g, ' [dot] ');
}

console.log(obfuscate('test@123.com'))
console.log(obfuscate('Code_warrior@foo.ac.uk'))