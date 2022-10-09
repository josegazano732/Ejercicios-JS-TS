/*
function fibonacci(num){
    let serie = [0,1];
    console.log(serie[1]);
    for (let x = 2; x <= num; x++) {
        // X - 1 me regresa una posiciona atras tomando el valor de su indice.
        serie.push(serie[x - 1] + serie[x - 2])
        
    }

    return [serie, serie[num]];
    //console.log(serie);
}

console.log("Serie completa: ", fibonacci(10)[0]);
console.log("Resultado fibb: ", fibonacci(10)[1]);
*/

function fibonnaciDos(num){
    let lista = [0,1];
    console.table(lista[1]);
    for(x=2; x<= num; x++){
        lista.push(lista[x - 1] + lista[x - 2]);
    }
    return [lista, lista[num]];
}
console.table(fibonnaciDos(10)[0]);
