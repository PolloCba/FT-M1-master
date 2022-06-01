'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 1) {
    return array;
  }

  let pivot = array[0];
  
  let left = []; 
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i])
     }else{
      right.push(array[i]);
     }
  }
 return [].concat(quickSort(left), pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if( array.length <= 1) {
      return array;
  }

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  right = mergeSort(right);
  left = mergeSort(left);

  let array2 = [];

  while (left.length && right.length) {
      if(left[0] < right[0]) {
         array2.push(left.shift());
         }else {
         array2.push(right.shift());
        }
    }
    return array2.concat(left, right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
