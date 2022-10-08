
for (let i = 1; i < 100; i++) {

    let resultado = '';

    if(i % 3 == 0){
        resultado += "Fizz";
       // console.log("Fizz");
    } if(i % 5 == 0){
        resultado += "Buzz";
        //console.log("Buzz");
    }

    console.log(resultado || i);
}

// Mismo ejercicio pero como funcion connun parametro.
function fizzBuzz(numero){
    for (let i = 1; i < numero; i++) {

        let resultado = '';
    
        if(i % 3 == 0){
            resultado += "Fizz";
           // console.log("Fizz");
        } if(i % 5 == 0){
            resultado += "Buzz";
            //console.log("Buzz");
        }
    
        console.log(resultado || i);
    }
}

fizzBuzz(50);