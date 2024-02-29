//Very simple, given a number (integer / decimal / both depending on the language),
// find its opposite (additive inverse).
//
// Examples:
//
// 1: -1
// 14: -14
// -34: 34


function opposite1(number) {
  return(-number);
}

function opposite2(number) {
  let strNumber = String(number)
  if(strNumber[0] === '-'){
    return Number(strNumber.split('').splice(1).join(''))
  }else {
    return Number('-'+ strNumber)
  }
}

