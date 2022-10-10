
for (let i = 0; i < 20; i++) {

    let resultado = '';

    if (i == 0) {
        i = 0;
    }

    if(i % 3 == 0 && i % 5 == 0){
        resultado = 'FIZZBUZZ';
    }

    if(i % 3 == 0){
        resultado = "Fizz";
       // console.log("Fizz");
    } if(i % 5 == 0){
        resultado = "Buzz";
        //console.log("Buzz");
    }

    console.table(resultado || i);
}

// Mismo ejercicio pero como funcion connun parametro.
/*
function fizzBuzz(numero){
    for (let i = 0; i < numero; i++) {

        let resultado = '';

        if(i % 3 == 0 && i % 5 == 0){
            resultado += 'FIZZBUZZ';
           // console.log("FIZZ-BUZZ");
        }
    
    
        if(i % 3 == 0){
            resultado += "Fizz";
            //console.log("Fizz");
        } if(i % 5 == 0){
            resultado += "Buzz";
            //console.log("Buzz");
        }
    
        console.table(resultado || i);
    }
}
*/
//fizzBuzz(50);