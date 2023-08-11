// Array de objetos de usuarios
const users = [
    { id: 1, name: 'John Doe', companyId: 1 },
    { id: 2, name: 'Jane Smith', companyId: 2 },
    { id: 3, name: 'Bob Johnson', companyId: 1 },
    { id: 4, name: 'Alice Williams', companyId: 2 },
  ];
  
  // Array de objetos de compañías
  const companies = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
  ];
  
 // Array de objetos de productos
const products = [
  { id: 1, name: 'Product X', companyId: 1 },
  { id: 2, name: 'Product Y', companyId: 2 },
  { id: 3, name: 'Product Z', companyId: 1 },
  { id: 4, name: 'Product A', companyId: 2 },
  { id: 5, name: 'Product B', companyId: 1 },
  { id: 6, name: 'Product C', companyId: 2 },
];

// Array de objetos de pedidos
const orders = [
  { id: 1, productId: 1, userId: 1, quantity: 5 },
  { id: 2, productId: 2, userId: 2, quantity: 10 },
  { id: 3, productId: 3, userId: 3, quantity: 2 },
  { id: 4, productId: 2, userId: 1, quantity: 3 },
  { id: 5, productId: 4, userId: 3, quantity: 7 },
  { id: 6, productId: 5, userId: 2, quantity: 4 },
  { id: 7, productId: 6, userId: 1, quantity: 9 },
  { id: 8, productId: 4, userId: 3, quantity: 2 },
  { id: 9, productId: 3, userId: 2, quantity: 6 },
  { id: 10, productId: 1, userId: 1, quantity: 3 },
];
  
  // Ejercicios sin resolver:
  
  // Ejercicio 1:
  // Dado el ID de un usuario, encuentra el nombre de la compañía a la que pertenece.


  function getCompanyByUserId(userId) {
    const user = users.find((user) => user.id === userId)
    const { companyId  } = user
    return companies.find((company) => company.id === companyId).name
  }
  
console.log(getCompanyByUserId(1))
console.log(getCompanyByUserId(2))
console.log(getCompanyByUserId(3))
console.log(getCompanyByUserId(4))


// Dado un ID de producto, encuentra todos los pedidos en los que se ha vendido 
// ese producto junto con la cantidad vendida. El resultado debe ser un array de 
// objetos con la siguiente estructura:
// [
//   { orderId: 1, quantity: 5 },
//   { orderId: 3, quantity: 3 },
//   // ...
// ]

  function getOrdersByProductIdAndQuantity(productId) {
    const data = orders.filter((order) => order.productId === productId)
    return data.map((order) => ({ orderId: order.id, quantity: order.quantity }))
  }


console.log('getOrdersByProductIdAndQuantity')
console.log(getOrdersByProductIdAndQuantity(1)) 
console.log(getOrdersByProductIdAndQuantity(2))  
console.log(getOrdersByProductIdAndQuantity(3))  
console.log(getOrdersByProductIdAndQuantity(4))
console.log(getOrdersByProductIdAndQuantity(5))     

  
  // Ejercicio 3:
  // Dado el nombre de una compañía, encuentra todos los usuarios que trabajan en ella.
  
  function getUsersByCompanyName(companyName) {
    const companyId = companies.find((company) => company.name === companyName).id
    return users.filter((user) => user.companyId === companyId).map((user) => user.name)
  }

console.log(getUsersByCompanyName('Company A'))  
console.log(getUsersByCompanyName('Company B')) 

  // Ejercicio 4:
  // Calcula el total de productos vendidos por cada compañía.

  function totalSoldProductsByCompany(companyName) {
    const companyId = companies.find((company) => company.name === companyName).id
    const productsId = products.filter((product) => product.companyId === companyId).map((product) => product.id)
    return orders.reduce((acc, order) => {
      if(productsId.includes(order.productId)){
        acc += order.quantity
      }
      return acc
    } , 0)
  }

console.log(totalSoldProductsByCompany('Company A'))
console.log(totalSoldProductsByCompany('Company B'))

  
  // Ejercicio 5 (Desafío):
  // Encuentra el usuario que ha realizado la mayor cantidad de pedidos y muestra su información completa.

  function getUserWithMoreOrders() {
    let userWithMoreOrders;
    let maxOrderCount = 0;
  
    users.map((user) => {
      let orderCount = 0;
  
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].userId === user.id) {
          orderCount++;
        }
      }
  
      if (orderCount > maxOrderCount) {
        maxOrderCount = orderCount;
        userWithMoreOrders = user;
      }
    });
  
    return userWithMoreOrders
  }

console.log(getUserWithMoreOrders())  


  // Nota: Puedes resolver los ejercicios utilizando métodos como find(), filter(), reduce(), etc., o mediante enfoques alternativos si lo deseas.



  
// ¡Claro! Aquí tienes algunos ejercicios más desafiantes relacionados con los arrays de objetos que generamos anteriormente. Estos ejercicios están diseñados para desarrolladores senior.

// Ejercicio de rendimiento:
// Encuentra la compañía con más usuarios y muestra el nombre de la compañía y la cantidad de
// usuarios que tiene. Intenta optimizar el rendimiento de tu solución para manejar grandes conjuntos de datos.

function findCompanyWithMoreUsers() {
  let companyWithMoreUsers;
  let maxUsersCount = 0;

  companies.map((company) => {
    let usersCount = users.filter((user) => user.companyId === company.id).length;
    if (usersCount > maxUsersCount) {
      maxUsersCount = usersCount;
      companyWithMoreUsers = company;
    }
  });

  return {[companyWithMoreUsers.name]: maxUsersCount};
}

console.log('Find company with more users')
console.log(findCompanyWithMoreUsers())

// Ejercicio de combinación de datos:
// Combina los arrays de usuarios, compañías y productos para obtener un nuevo array de objetos que contenga la información completa de cada pedido, incluyendo el nombre del usuario, el nombre de la compañía y el nombre del producto. El resultado debería ser un array con objetos como este:

// javascript
// Copy code
// [
//   { orderId: 1, productName: 'Product X', userName: 'John Doe', companyName: 'Company A' },
//   // ...
// ]
// Ejercicio de filtrado y cálculo:
// Encuentra la compañía que ha vendido la mayor cantidad total de productos y muestra el nombre de la compañía y la cantidad total de productos vendidos.

// Ejercicio de agrupamiento y cálculo:
// Agrupa los usuarios por compañía y calcula el promedio de la cantidad de productos vendidos por cada compañía. Muestra el nombre de la compañía y el promedio de productos vendidos. Asegúrate de manejar el caso de compañías sin usuarios.

// Ejercicio de manipulación de fechas:
// Agrega una propiedad "fecha" a cada objeto de pedido con una fecha aleatoria en el rango de los últimos 30 días. Luego, encuentra los pedidos que se realizaron durante la última semana y muestra su información completa.