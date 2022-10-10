
let listaNum = [7,6,8,20];

function sumarUno(lista){
  let nuevaLista = [];
  for(i=0; i<lista.length; i++){
    
    nuevaLista [i]= lista[i] + 1;
  }
  return nuevaLista;
}

console.log(sumarUno(listaNum));

/*
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let nuevoArray = [];
  for(i=0; i < array.length; i++){
    nuevoArray[i] = array[i] + 1;
  }
  return nuevoArray;
}

console.log(incrementarPorUno([5,3,10,12]));
*/