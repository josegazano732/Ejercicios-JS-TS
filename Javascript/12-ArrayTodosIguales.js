let listaNum = [5,9,3,10,50,30,32]

function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí
    for(let i=0; i<arreglo.length - 1; i++ ){
      if(arreglo[i] !== arreglo[i+1]){
        return false;
      }
    }
    return true;
  }

  console.log(todosIguales(listaNum));