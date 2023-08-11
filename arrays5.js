// Array de usuarios
const usuarios = [
    { id: 1, name: 'Juan', age: 25, rolId: 1 },
    { id: 2, name: 'María', age: 30, rolId: 2 },
    { id: 3, name: 'Pedro', age: 28, rolId: 2 },
    { id: 4, name: 'Ana', age: 27, rolId: 3 },
    { id: 5, name: 'Carlos', age: 32, rolId: 1 }
  ];
  
  // Array de roles
  const roles = [
    { id: 1, nombre: 'Administrador' },
    { id: 2, nombre: 'Editor' },
    { id: 3, nombre: 'Usuario' }
  ];
  
  // Array de productos
  const products = [
    { id: 1, name: 'Producto 1', categoryId: 1 },
    { id: 2, name: 'Producto 2', categoryId: 2 },
    { id: 3, name: 'Producto 3', categoryId: 1 },
    { id: 4, name: 'Producto 4', categoryId: 3 },
    { id: 5, name: 'Producto 5', categoryId: 2 }
  ];
  
  // Array de categorías
  const categories = [
    { id: 1, name: 'Electrónica' },
    { id: 2, name: 'Ropa' },
    { id: 3, name: 'Hogar' }
  ];
  //Ahora, aquí tienes 10 ejercicios sin resolver en dificultad para un desarrollador semi senior:
  
  
  


  //Dado un producto, obtener su nombre y categoría.


function getProduct(productId) {
    const product = products.find((product) => product.id === productId).name
    const category = categories.find((category) => category.id === product.categoryId).name
    return {product: category}
}

console.log(getProduct(1))
console.log(getProduct(2))
console.log(getProduct(3))
console.log(getProduct(4))

  //Dado un rol, obtener todos los usuarios que tienen ese rol.


  //Dada una categoría, obtener todos los productos que pertenecen a esa categoría.


  //Obtener el nombre de todos los usuarios mayores de 25 años.



  //Obtener el nombre y edad de todos los usuarios que tienen el rol de "Editor".



  //Obtener el nombre de todos los productos cuyo nombre contiene la palabra "Producto".



  //Obtener el nombre de todos los usuarios que tienen al menos un producto en la categoría "Electrónica".



 // Obtener el nombre y edad del usuario más joven.



  //Obtener el nombre y edad del usuario más viejo que tiene al menos un producto en la categoría "Hogar".


