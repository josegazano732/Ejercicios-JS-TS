
function fibonacci(num){
    let serie = [0,1];
    console.log(serie[1]);
    for (let x = 2; x <= num; x++) {
        serie.push(serie[x - 1] + serie[x - 2])
        
    }

    return [serie, serie[num]];
    //console.log(serie);
}

console.log("Serie completa: ", fibonacci(10)[0]);
console.log("Resultado fibb: ", fibonacci(10)[1]);