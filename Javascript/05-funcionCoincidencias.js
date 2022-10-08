
/*
? Que esta corriendo este array
* Reutilizar este bucle.
! El bucle falla cuando hay mas de 5 elementos en array.
TODO: Falta por mostrar el array en el dom
*/
function coincidencias(frase, busqueda){
    //Esta variable limpia la frase de signos o caracteres que no necesitemos del texto o frase.
    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-?¿()]/gi, '');
    let resultado = 0;

    //sentencia includes devuelve true si el parametro pasado se encuentra dentro del texto.
    if(texto_limpio.includes(busqueda)){
        // Con split dividimos una cadena de texto y la transformamos en un array.
        let palabras = texto_limpio.split(" ");
        let mapa = {};

        //Recorre el palabras que ahora es un array
        for(let palabra of palabras){
            if(mapa[palabra]){
                //Si existe la palabra dentro del mapa le sumo 1 si existe
                mapa[palabra]++
            }else{
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];

    }else{
        if(resultado == 0){
            resultado = 0 + " No hay palabras que coincidan";
        }
       // resultado = 0;
    }

    return resultado;
    //console.log(texto_limpio);

}
console.log(
    "Numero de coincidencias en la frase: ",
    coincidencias("Hola! Jose Gazano. Tu perfil de linkedin (jose) comienza con la palabra JOSE" , "peon"));
