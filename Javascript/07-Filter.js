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

let gamePromo = gameList.filter( list => {
    return list.precio < 50 ;      
}).map(list => {
    return list.title;
});
console.table(gamePromo);