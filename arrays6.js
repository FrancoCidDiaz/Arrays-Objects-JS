 // Array of Users
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com' },
    { id: 5, name: 'Mike Wilson', email: 'mike@example.com' },
  ];
  
  // Array of Products
  const products = [
    { id: 101, name: 'Laptop', price: 1000 },
    { id: 102, name: 'Smartphone', price: 800 },
    { id: 103, name: 'Headphones', price: 100 },
    { id: 104, name: 'Tablet', price: 500 },
    { id: 105, name: 'Camera', price: 600 },
  ];
  
  // Array of Orders
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
      userId: 2,
      products: [
        { productId: 103, quantity: 3 },
        { productId: 105, quantity: 2 },
      ],
    },
    {
      id: 203,
      userId: 3,
      products: [
        { productId: 102, quantity: 2 },
        { productId: 104, quantity: 1 },
      ],
    },
    {
      id: 204,
      userId: 1,
      products: [
        { productId: 105, quantity: 1 },
      ],
    },
    {
      id: 205,
      userId: 4,
      products: [
        { productId: 101, quantity: 1 },
        { productId: 103, quantity: 1 },
      ],
    },
    {
      id: 206,
      userId: 5,
      products: [
        { productId: 104, quantity: 2 },
      ],
    },
  ];



 // Find all users who have placed an order.

 function usersWithOrders() {
    const usersId = orders.map((order) => order.userId);
    const usersWithOrders = users.filter((user) => usersId.includes(user.id));
    return usersWithOrders.map((user) => user.name);
  }
  
  console.log(usersWithOrders());


//   Find all products with a price greater than $500.

  function productsGreaterThan500() {
    return products.filter((product) => product.price > 500).map((product) => product.name)
  }
  
  console.log(productsGreaterThan500())

// Find the total number of orders placed.

  function numberOfOrders() {
    return orders.length
  }

  console.log(numberOfOrders())

// Calculate the total revenue generated from all orders.

  function totalRevenueFromOrders() {
    return orders.reduce((acc, order) => {
      order.products.forEach((orderProduct) => { 
        const product = products.find((product) => product.id === orderProduct.productId);
        if (product) {
          acc += product.price * orderProduct.quantity;
        }
      });
      return acc;
    }, 0);
  }

  console.log(totalRevenueFromOrders())

// Find the user who placed the most orders.

function userWithMoreOrders() {
  let maxOrderCountByUser = 0; 
  let userWithMoreOrders 
  users.map((user) => {
    let orderCountByUser = 0
    for(let i = 0; i < orders.length; i++){
      if(user.id === orders[i].userId){
        orderCountByUser++        
      }
    }
    if(orderCountByUser > maxOrderCountByUser){
      maxOrderCountByUser = orderCountByUser
      userWithMoreOrders = user.id
    }
  })
   return users.find((user) => user.id === userWithMoreOrders).name
}

  console.log(userWithMoreOrders())


// Find the product that has been ordered the most (by quantity).

  // function mostOrderedProduct() {
  //   let mostOrderedProduct
  //   let maxOrderedCount = 0
  //  orders.forEach((order) => {
  //   const { products } = order
  //   products.reduce((acc, product) => {
  //     if(product.quantity > maxOrderedCount){
  //       maxOrderedCount = product.quantity
  //       mostOrderedProduct = product
  //     }
   
  //   })
   
  //   })
  //   return products.filter((product) => produ)
  // }

  function mostOrderedProduct() {
    const productCount = {}; // Objeto para almacenar el contador de cantidad por producto
  
    orders.forEach((order) => {
      const { products } = order;
      products.forEach((product) => {
        const { productId, quantity } = product;
        if (!productCount[productId]) {
          productCount[productId] = 0;
        }
        productCount[productId] += quantity;
      });
    });
  
    let maxOrderedCount = 0;
    let mostOrderedProductId;
  
    for (const productId in productCount) {
      if (productCount[productId] > maxOrderedCount) {
        maxOrderedCount = productCount[productId];
        mostOrderedProductId = productId;
      }
    }
  
    // Encuentra el producto con el id más ordenado
    const mostOrderedProduct = products.find((product) => product.id === mostOrderedProductId);
    return mostOrderedProduct;
  }

  console.log(mostOrderedProduct())

// Find the order with the highest total value (sum of product prices * quantities).

function orderWithHighestValue() {
  let maxOrderValue = 0;
  let orderWithHighestValue;

  orders.forEach((order) => {
    let orderValue = 0;
    order.products.forEach((productData) => {
      const product = products.find((p) => p.id === productData.productId);
      if (product) {
        orderValue += product.price * productData.quantity;

      }
    });

    if (orderValue > maxOrderValue) {
      maxOrderValue = orderValue;
      orderWithHighestValue = orderValue;
    }

  });

  return orderWithHighestValue
}
  
  console.log("order with highest value")
  console.log( orderWithHighestValue())

// Add a new user to the users array.
// Remove a product from the products array.
// Update the quantity of a specific product in a specific order.