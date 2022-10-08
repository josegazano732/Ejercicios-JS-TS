//Funcion retorna con string FIZZ si el parametro pasado es multiplo de 3.
//De lo contrario retorna string BUZZ si el parametro es multiplo de 5.
//En caso de que no sea multiplo de 3 y 5 retorna el parametro que se le pasa en la funcion.
function fizzBuzz(num){
    if (num % 3 == 0) {
        return "Fizz";
    }
    if(num % 5 == 0){
        return "Buzz";
    }

    return num;
}

console.log(fizzBuzz(15));