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
    }

]

let titleList = [];
//! Recorre el array gameList y hace push de los titulos a la nueva lista llamada titleList.
for (let index = 0; index < gameList.length; index++) {
    titleList.push(gameList[index].title);
    
}

console.log(titleList);

/*--------------------Usando metodo MAP -------------------*/

let tituloList = gameList.map(x => {
    return 'El titulo es: '+ x.title;
});

console.table(tituloList);