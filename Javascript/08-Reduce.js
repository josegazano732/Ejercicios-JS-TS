//!Metodo reduce se encarga de de ejecutar una funcion 'reductora' sobr cada elemento de un array.
//!A diferencia 

let gameList = [
    {
        title: 'ResidentEvil',
        plataforma: 'PS5',
        precio: 79
    },
    {
        title:'Crash',
        plataforma:'ps5',
        precio: 49
    },
    {
        title:'Call Of Dutty',
        plataforma:'PS5',
        precio:100
    },
    {
        title:'Pokemon',
        plataforma:'android',
        precio:23
    }
]

let pricesList = gameList.map(game => {
    return game.precio;
});

// Funcion reductora
const reducer = (acumulador,actualValor) => {
    return acumulador + actualValor;
}

//monto = pricesList.reduce(reducer);

let montoDos = gameList.map(game =>{
    return game.precio;
}).reduce(reducer);

console.table(montoDos);

//console.table(pricesList);