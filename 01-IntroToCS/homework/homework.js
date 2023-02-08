'use strict';

function BinarioADecimal(num) {
  //revisar si me pasan un string
  // console.log('que es la variable num?:', typeof num);
  if (typeof num !== 'string') return 'El valor debe ser un string';
  //separa cada caracter del numero
  //num = 10
  num = num.split('').reverse(); // [0,1]
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0" || num[i] === "1") result += Math.pow(2, i) * Number(num[i]);
    else result = "No se mando un numero binario valido";
  }
  return result;
}

function DecimalABinario(num) {
  //revisar si me pasan un numero
  // console.log('que es la variable num?:', typeof num);
  if (typeof num !== 'number') return 'El valor debe ser un numero';
  let result = [];
  //divide entre 2 hasta llegar 0
  while (num > 0) {
    result.push(num%2);// = 19/2 dame el restante de la division = 1
    //breaking the loop
    num = Math.floor(num/2); //9.5 Floor = 9
  }
  //result = [1,1,0,0,1]
  return result.reverse().join('');//result = [1,0,0,1,1] =>'10011'
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
