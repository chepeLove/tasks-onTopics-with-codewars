//Функция rgb неполная. Завершите ее так, чтобы подача десятичных
// значений RGB приводила к возвращению шестнадцатеричного представления.
// Допустимые десятичные значения для RGB - от 0 до 255.
// Все значения, выходящие за этот диапазон, должны быть округлены до
// ближайшего допустимого значения.
//
// Примечание: Ваш ответ должен всегда состоять из 6 символов, сокращенный
// вариант с 3 не будет работать.
//
// Примеры (ввод --> вывод):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0 --> "000000"
// 148, 0, 211 --> "9400D3"

function rgb(r, g, b) {
  const componentToHex = (c) => {
    const rounded = Math.max(0, Math.min(255, Math.round(c)));
    const hex = rounded.toString(16);
    return (hex.length === 1 ? "0" + hex : hex).toUpperCase();
  };

  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgb(255, 255, 255))
console.log(rgb(0,   0, -20))
console.log(rgb(300, 255, 255))
// console.log(rgb(255, 255, 255))