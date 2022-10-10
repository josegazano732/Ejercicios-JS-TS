
let listaNum = [7,6,8,20];

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
  /* for(i=0; i < array.length; i++){
    if(array[i]===elemento){
      return true;
    }
   }
   return false;
   */
  let valor = false;
  array.forEach(element => {
    if(elemento === element){
        valor = true;
    }
  });
  return valor;
}

  console.log(arrayContiene(listaNum,5));
  