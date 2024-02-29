//Напишем функцию, которая возвращает количество аргументов, которые она получила.

function howManyArguments() {
  return arguments.length
}

const args_count = (...args) => args.length