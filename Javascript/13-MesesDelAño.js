
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    let nuevoArray =[];
    array.forEach(element => {
      if(element === 'Enero' || element === 'Marzo' || element === 'Noviembre'){
        nuevoArray.push(element);
      }
    });
    //return 'No se encontraron los meses pedidos';
    console.log(nuevoArray);
  }

  console.log(mesesDelAño(meses));