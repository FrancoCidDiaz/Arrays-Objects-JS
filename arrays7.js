const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 30, city: "NewYork" },
    { id: 2, name: "Bob", email: "bob@example.com", age: 25, city: "LosAngeles" },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 28, city: "Chicago" },
    { id: 4, name: "David", email: "david@example.com", age: 35, city: "Miami" },
    // Agrega más usuarios aquí
  ];
  
  // Array de productos (products)
  const products = [
    { id: 101, name: "Product 1", price: 10.99, stock: 50, category: "Electronics" },
    { id: 102, name: "Product 2", price: 24.50, stock: 30, category: "Clothing" },
    { id: 103, name: "Product 3", price: 7.99, stock: 100, category: "HomeKitchen" },
    { id: 104, name: "Product 4", price: 45.00, stock: 20, category: "Electronics" },
    // Agrega más productos aquí
  ];
  
  // Array de pedidos (orders)
  const orders = [
    {
      id: 201,
      userId: 1,
      products: [
        { productId: 101, quantity: 2 },
        { productId: 102, quantity: 1 },
        { productId: 104, quantity: 3 },
      ],
    },
    {
      id: 202,
      userId: 3,
      products: [
        { productId: 101, quantity: 1 },
        { productId: 103, quantity: 5 },
      ],
    },
    {
      id: 203,
      userId: 2,
      products: [
        { productId: 102, quantity: 2 },
        { productId: 103, quantity: 2 },
        { productId: 104, quantity: 1 },
      ],
    },
    {
      id: 203,
      userId: 2,
      products: [
        { productId: 103, quantity: 2 },
        { productId: 101, quantity: 2 },
        { productId: 104, quantity: 1 },
      ],
    },
    // Agrega más pedidos aquí
  ];



//Encontrar el producto más vendido (el producto con más unidades vendidas en total en todos los pedidos).

function mostSelledProduct() {
    let productsSold = {};
  
    orders.forEach((order) => {
      order.products.forEach((pOrder) => {
        const productId = pOrder.productId;
        const quantity = pOrder.quantity;
  
        if (productId && quantity > 0) {
          if (!productsSold[productId]) {
            productsSold[productId] = 0;
          }
          productsSold[productId] += quantity;
        }
      });
    });
  
    let maxSelled = 0;
    let mostSelledProduct;
  
    for (const productId in productsSold) {
      if (productsSold[productId] > maxSelled) {
        maxSelled = productsSold[productId];
        mostSelledProduct = productId;
      
      }
    }
  
    return products.find((product) => product.id == mostSelledProduct).name
  }
  
  console.log(mostSelledProduct());


//Calcular el promedio de edad de los usuarios que han realizado al menos un pedido.

function averageAgeUsers() {
  const ages = orders.map((order) => {
    let ages = 0
    users.map((user) => {
      if(user.id === order.userId){
        ages += user.age
      }
    })
    return ages
  })
  return ages.reduce((acc, age) => acc + age, 0) / ages.length
}

console.log(averageAgeUsers())

//Encontrar el usuario con el valor total de pedidos más alto.

function userWithHighestOrder() {
  let userOrderValues = {};
  let maxOrderValue = 0;
  let userWithHighestOrder;

  orders.forEach((order) => {
    let orderValue = 0;

    order.products.forEach((productData) => {
      const product = products.find((p) => p.id === productData.productId);
      if (product) {
        orderValue += product.price * productData.quantity;
      }
    });

    if (!userOrderValues[order.userId]) {
      userOrderValues[order.userId] = 0;
    }
    userOrderValues[order.userId] += orderValue;
  });


  for (const userId in userOrderValues) {
    if (userOrderValues[userId] > maxOrderValue) {
      maxOrderValue = userOrderValues[userId];
      userWithHighestOrder = userId;
    }
  }

  return users.find((u) => u.id == userWithHighestOrder).name
}


console.log(userWithHighestOrder())

//Crear una función que tome un parámetro de búsqueda (por ejemplo, "Electronics") y devuelva todos los productos de esa categoría
//junto con el nombre y el correo electrónico del usuario que realizó el pedido.
//retorna un array de objetos donde el valor sea el producto y la llave otro objeto con el nombre y el correo del usuario

function findDataByProductCategory(data) {
  const result = {}
  result[data] = [];
  orders.map((order) => {
    products.map((p) => {
      const user = users.find((u) => u.id === order.userId)
      if(p.category === data){
        if(!result[data][user.name]){
          result[data].push({ [user.name]: user.email })
        }
        
      }
    })
  })
  return result
}

console.log(findDataByProductCategory("Electronics"))
console.log(findDataByProductCategory("Clothing"))
console.log(findDataByProductCategory("HomeKitchen"))





//Calcular el total de ventas para cada categoría de productos y mostrar
//los resultados en un objeto que tenga el nombre de la categoría como clave y el total de ventas como valor.

function totalSalesByCategory() {
  const totalSalesByCategory = orders.reduce((acc, order) => {
    order.products.map((productData) => {    
      const product = products.find((p) => p.id === productData.productId);
        if(product){
          const category = product.category
          acc[category] = (acc[category] || 0) + productData.quantity 
        }    
    })
    return acc
  } ,{})
  return totalSalesByCategory
}

console.log(totalSalesByCategory())


//Crear una función que tome un parámetro de búsqueda (por ejemplo, "New York") y
//devuelva todos los usuarios que viven en esa ciudad junto con la lista de productos que han comprado.

// function getUsersByCity(userCity) {
//   const userByCity = orders.reduce((acc, order) => {
//   const usersFound = users.filter((user) => user.city === userCity) 
//   const productsByUser = order.products.map((productData) => {
//     if( )
//   })
//    acc[userCity] = {[usersFound]: usersFound.id}


//    return acc
//   } ,{})
//   return userByCity
// }

// console.log(getUsersByCity("NewYork"))
// console.log(getUsersByCity("LosAngeles"))
// console.log(getUsersByCity("Chicago"))
// console.log(getUsersByCity("Miami"))




//Eliminar todos los productos que tienen un stock menor o igual a 10.

//Crear una función que tome un parámetro de usuario y devuelva todos los productos que ha comprado más de una vez.

function getUserByProducts(userByProduct) {
  const user = users.find((u) => u.name === userByProduct)
 return orders.map((order) => {
    const userFound = order.find((uOrder) => uOrder.userId === user.id)
    order.products.map((productData) => {
      const product = products.find((p) => p.id === uOrder.productId);
    })
  })
}

console.log(getUserByProducts("Alice"))
console.log(getUserByProducts("Bob"))
console.log(getUserByProducts("Charlie"))
console.log(getUserByProducts("David"))



//Calcular el valor total de los pedidos realizados en cada ciudad y mostrar los resultados en un objeto que tenga el nombre de la ciudad como clave y el valor total de los pedidos como valor.

//Crear una función que tome un parámetro de producto y devuelva todos los usuarios que lo han comprado junto con la cantidad que cada usuario ha comprado.  