const users = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Laura" },
    { id: 5, name: "Carlos" },
  ];
  
  const tasks = [
    { id: 1, title: "Completar informe", assignedTo: 1 },
    { id: 2, title: "Enviar correo", assignedTo: 2 },
    { id: 3, title: "Realizar llamadas", assignedTo: 1 },
    { id: 4, title: "Preparar presentación", assignedTo: 3 },
    { id: 5, title: "Revisar documentación", assignedTo: 4 },
    { id: 6, title: "Planificar proyecto", assignedTo: 2 },
    { id: 7, title: "Investigar mercado", assignedTo: 5 },
    { id: 8, title: "Resolver problemas", assignedTo: 3 },
    { id: 9, title: "Coordinar reunión", assignedTo: 4 },
    { id: 10, title: "Analizar datos", assignedTo: 1 },
  ];

  const projects = [
    { id: 1, name: "Proyecto A", assignedTo: [1, 2], tasks: [1, 3, 5] },
    { id: 2, name: "Proyecto B", assignedTo: [2, 3, 4], tasks: [2, 4, 6]},
    { id: 3, name: "Proyecto C", assignedTo: [1, 4, 5], tasks: [7, 8, 9, 10]  },
  ];

function getTasksByUser(userId) {
    return tasks.filter((task) => task.assignedTo === userId)
}

// Ejemplo de uso
const userTasks = getTasksByUser(1);
console.log(userTasks);
// Resultado esperado: [
//   { id: 1, title: "Completar informe", assignedTo: 1 },
//   { id: 3, title: "Realizar llamadas", assignedTo: 1 }
// ]


//   Obtener el nombre de un usuario asignado a una tarea:
//   Escribe una función llamada getUserNameByTaskId que tome como parámetro
//    el ID de una tarea y devuelva el nombre del usuario asignado a esa tarea. 
//   Si el ID de la tarea no existe o el usuario no está asignado a ninguna tarea, 
//   la función deberá devolver un mensaje indicando que no se encontró el usuario.  

function getUserNameByTaskId(taskId) {
    const assignedUserNames = [];
    const userTask = tasks.filter((task) => task.id === taskId)

    userTask.map((task) => {
        const assignedUser = users.find((user) => user.id === task.assignedTo);
        if (assignedUser) {
            assignedUserNames.push(assignedUser.name);
        }
    });
    return assignedUserNames
}

console.log(getUserNameByTaskId(1))
console.log(getUserNameByTaskId(2))


// Obtener el número de tareas asignadas a cada 
// usuario:
// Escribe una función llamada getTasksCountByUser que devuelva un objeto
//  donde las claves sean los nombres de los usuarios y los valores sean el
//   número de tareas asignadas a cada usuario.

  function getTasksCountByUser() {
    const tasksCount = tasks.reduce((count, task) => {
        const { assignedTo } = task;
        const user = users.find((user) => user.id === assignedTo);
        
        if (user) {
            const { name } = user;
            count[name] = (count[name] || 0) + 1;
          }
      
          return count;
    }, {})
    return tasksCount
  }

console.log(getTasksCountByUser())



// Ejercicio: Obtener las tareas asignadas a usuarios con un determinado nombre
// Escribe una función llamada getTasksByUserName que tome
//  como parámetro el nombre de un usuario
//  y devuelva un nuevo array con todas las tareas asignadas a ese usuario.
//   Si no se encuentra ningún usuario con ese nombre o el usuario no tiene
//    tareas asignadas, la función debe devolver un array vacío.

function getTasksByUserName(userName) {
    const user = users.find((user) => user.name === userName)
    if(user){   
      const tasksByUsername = tasks
      .filter((task) => task.assignedTo === user.id)
      .map((task) => task.title)
           
    return tasksByUsername
  }
}

console.log('EJ getTasksByUserName')
console.log(getTasksByUserName('Juan'))  
console.log(getTasksByUserName('Maria'))
console.log(getTasksByUserName('Pedro'))    


// Ejercicio 1: Obtener los proyectos asignados
//  a un usuario específico.
// Escribe una función llamada getProjectsByUser que
//  tome como parámetro el ID de un usuario y devuelva un nuevo
//   array con los proyectos asignados a ese usuario.

  function getProjectsByUser(userId) {
    
    return projects.filter((project) => project.assignedTo.includes(userId)).map((project) => project.name)
  }

console.log(getProjectsByUser(1))
console.log(getProjectsByUser(2))
console.log(getProjectsByUser(3))
console.log(getProjectsByUser(7))







// Ejercicio 3: Obtener el número de tareas asignadas a cada proyecto.
// Escribe una función llamada getTasksCountByProject que devuelva un 
// objeto donde las claves sean los nombres de los proyectos y los valores sean 
// el número de tareas asignadas a cada proyecto.


  function getTasksCountByProject() {
    const projectsCount = projects.reduce((count, project) => {
        count[project.name] = project.tasks.length
        return count
    } ,{})

    return projectsCount
  }

console.log(getTasksCountByProject())  



//   function getTasksCountByUser() {
//     const tasksCount = tasks.reduce((count, task) => {
//         const { assignedTo } = task;
//         const user = users.find((user) => user.id === assignedTo);
        
//         if (user) {
//             const { name } = user;
//             count[name] = (count[name] || 0) + 1;
//           }
      
//           return count;
//     }, {})
//     return tasksCount
//   }