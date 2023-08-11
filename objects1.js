let teams = { 
'accounts'      : 1,
'finance'       : 2 ,
'canteen'       : 10, 
'regulation'    : 3, 
'trading'      : 6, 
'change'        : 6,
'IS'            : 8,
'retail'        : 5,
'cleaning'      : 4,
'pissing about' : 25 }



//Filtrar equipos por tamaño mínimo: Crea una función que acepte el objeto teams y un tamaño mínimo como 
//argumentos, y devuelva un nuevo objeto que contenga solo los equipos cuyo tamaño sea igual o mayor al tamaño mínimo especificado.


function filterByMin( minSize) {
  return Object.keys(teams).filter((key) => teams[key] >= minSize )
  
}

console.log(filterByMin(5))
console.log(filterByMin(10))
console.log(filterByMin(12))
console.log(filterByMin(17))



//Contar el número total de empleados: Calcula y muestra en la consola el número total de empleados
//sumando los tamaños de todos los equipos en el objeto teams.

function totalNumberEmployees() {
  return Object.values(teams).reduce((acc, el) => acc + el ,0)
}

console.log(totalNumberEmployees())


//Encontrar el equipo más grande: Escribe una función que recorra el objeto teams
 //y devuelva el nombre del equipo más grande junto con su tamaño.

 function greatestTeam() {
    let max = 0;
    let teamName = '';
  
    for (const [key, value] of Object.entries(teams)) {
      if (value > max) {
        max = value;
        teamName = key;
      }
    }
  
    return { name: teamName, size: max };
  }

console.log(greatestTeam())


//Ordenar equipos por tamaño: Crea una función que ordene los equipos en el objeto teams en
 //orden descendente según su tamaño y devuelva un nuevo objeto con los equipos ordenados.




//Promedio de tamaño de equipos: Calcula el tamaño promedio de los equipos en el objeto teams
 //y muestra el resultado redondeado en la consola.

