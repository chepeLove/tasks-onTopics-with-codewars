//В данном ката вам нужно просто определить,
// является ли заданный год високосным или нет.
// В случае, если вы не знаете правил, вот они:
//
// Года, делящиеся на 4, являются високосными,
// но года, делящиеся на 100, не являются високосными,
// но года, делящиеся на 400, снова являются високосными.
// Тестируемые годы находятся в диапазоне 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
  return (year % 4 === 0  && year % 100 !== 0) || year % 400 === 0
}