console.log('MANEJO DE ARRAYS')

const mascotas = [
    { nombre: 'tomasa', edad: 11, tipo: 'perro' },
    { nombre: 'ragnar', edad: 5, tipo: 'perro' },
    { nombre: 'mona', edad: 3, tipo: 'perro' },
    { nombre: 'luke', edad: 2, tipo: 'gato' }
]

const students = [
    { name: 'Jill', lastname: 'Doe', age: 24, course: 'Marketing' },
    { name: 'John', lastname: 'Doe', age: 22, course: 'Web Development' },
    { name: 'Jack', lastname: 'Doe', age: 20, course: 'Accounting' }
]

const numeros1 = [1,2,3,4,5]

const anidado = [1,2,[3,4], [5]]

console.log('Multiplicacion con map:')
const multiplicados = numeros1.map(x => x *2)
console.log(multiplicados)

console.log('Parejas')
const parejas = numeros1.map(x => [x, x])
console.log(parejas)

console.log('Edades mascotas:')
const edades = mascotas.map(mascota => mascota.edad)
console.log(edades)
console.log('Suma edades:')
const sumaEdades = edades.reduce((acc, el) => acc + el, 0)
console.log(sumaEdades)
console.log('Promedio:', sumaEdades / edades.length)

console.log('Suma numeros:')
const sumaNumeros = numeros1.reduce((acc, el) => acc + el, 0)
console.log(sumaNumeros)

console.log('Indexed mascotas:')
const indexed = mascotas.reduce((acc, el) => ({
   ...acc, 
   [el.nombre]: el,
}) ,{})
console.log(indexed)

console.log('Ordenar mascotas alfabeticamente:')
const alfabeticamente = mascotas.sort((a,b) => a.nombre.localeCompare(b.nombre))
console.log(alfabeticamente)

console.log('Ordenar mascotas por edad:')
const sortedMascotasEdad = mascotas.sort((a,b) => b.edad - a.edad)
console.log(sortedMascotasEdad)

console.log('Desanidar array:')
const plano = anidado.reduce((acc, el) => acc.concat(el) ,[])
console.log(plano)

console.log(mascotas, 'QUEDA MODIFICADO POR EL METODO SORT EL ARRAY ORIGINAL')

console.log('Mascotas que su edad es mayor a 4:')
const mayores4 = mascotas.filter(mascota => mascota.edad > 4)
console.log(mayores4)
console.log(mascotas)

const perros = mascotas.filter(mascota => mascota.tipo === 'perro')
console.log(perros)

console.log('Mascotas con una o en su nombre:')
const oMascotas = mascotas.filter(mascota => mascota.nombre.includes('o'))
console.log(oMascotas)

console.log('Mascota cuya edad es par:')
const parMascotas = mascotas.filter(mascota => mascota.edad % 2 === 0)
console.log(parMascotas)

console.log('Concatenar nombre y apellido students:')
const firstLastName = students.map((student) => student.name + ' ' + student.lastname)
console.log(firstLastName)

console.log(mascotas)
console.log(Object.entries(mascotas[0]))
console.log(Object.keys(mascotas[0]))
console.log(Object.values(mascotas[0]))
