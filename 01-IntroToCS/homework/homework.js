'use strict'

function BinarioADecimal(num) {
  let sum = 0;
  
  for (let i = 0; i < num.length; i++) {
       sum += num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let str = "";
  while (num > 0){
    let resto = num % 2;
    str = resto + str;
    num = Math.floor(num / 2);
  }
  return str;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}