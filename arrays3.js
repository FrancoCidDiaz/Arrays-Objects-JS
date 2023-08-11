const estudiantes = [
    { id: 1, nombre: "Juan", calificacion: 80 },
    { id: 2, nombre: "María", calificacion: 90 },
    { id: 3, nombre: "Pedro", calificacion: 95 }
  ];
  
  // Ejercicio 1: Calcular el promedio de calificaciones de todos los estudiantes
  function calcularPromedioCalificaciones() {
    return estudiantes.reduce((acc, estudiante) => acc + estudiante.calificacion, 0) / estudiantes.length
  }
 
console.log(calcularPromedioCalificaciones())  



// Implementa una función que tome el array de objetos productos y filtre 
//los productos por su precio, devolviendo solo aquellos que estén por encima 
//de un umbral dado:
// javascript

const productos = [
  { id: 1, nombre: "Producto 1", precio: 10 },
  { id: 2, nombre: "Producto 2", precio: 20 },
  { id: 3, nombre: "Producto 3", precio: 5 },
  { id: 4, nombre: "Producto 4", precio: 15 }
];

// Ejercicio 2: Filtrar productos por precio
function filtrarProductosPorPrecio(umbral) {
  return productos.filter((product) => product.precio > umbral)
}

console.log(filtrarProductosPorPrecio(10))



// Escribe una función que tome el array de objetos
//  tareas y calcule la duración total de todas las tareas:
// javascript
// Copy code
const tareas = [
  { id: 1, nombre: "Tarea 1", duracion: 60 },
  { id: 2, nombre: "Tarea 2", duracion: 120 },
  { id: 3, nombre: "Tarea 3", duracion: 45 }
];

// Ejercicio 3: Calcular la duración total de todas las tareas
function calcularDuracionTotalTareas() {
  return tareas.reduce((acc, tarea) => acc + tarea.duracion, 0)
}

console.log(calcularDuracionTotalTareas())


// Implementa una función que tome los arrays de objetos
//  listaReproduccion1 y listaReproduccion2 y encuentre
//   las canciones que están presentes en ambas listas:
// javascript
// Copy code
const listaReproduccion1 = [
  { id: 1, titulo: "Canción 1" },
  { id: 2, titulo: "Canción 2" },
  { id: 3, titulo: "Canción 3" }
];

const listaReproduccion2 = [
  { id: 4, titulo: "Canción 2" },
  { id: 5, titulo: "Canción 4" },
  { id: 6, titulo: "Canción 1" }
];

//ENCONTRAR ELEMENTOS COMUNES CON FILTER Y SOME
// Ejercicio 4: Encontrar las canciones presentes en ambas listas de reproducción
function encontrarCancionesComunes() {
  return listaReproduccion1.filter((cancionLista1) => 
    listaReproduccion2.some((cancionLista2) => cancionLista2.titulo === cancionLista1.titulo)
   ) 
}

console.log(encontrarCancionesComunes())


// Dado el array de objetos empleados que representa empleados 
// de una empresa con sus salarios, escribe una función que encuentre 
// el empleado con el salario más alto:
// javascript
// Copy code
const empleados = [
  { id: 1, nombre: "Empleado 1", salario: 5000 },
  { id: 2, nombre: "Empleado 2", salario: 6000 },
  { id: 3, nombre: "Empleado 3", salario: 4500 }
];

// Ejercicio 5: Encontrar el empleado con el salario más alto
function encontrarEmpleadoSalarioMasAlto() {
  const salarioMasAlto = Math.max(...empleados.map((empleado) => empleado.salario))  
  return empleados.filter((empleado) => empleado.salario === salarioMasAlto)
}
console.log('SALARIO MAS ALTO')
console.log(encontrarEmpleadoSalarioMasAlto())