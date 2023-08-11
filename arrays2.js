// Array de objetos "Usuarios"
const users = [
    { id: 1, name: 'Juan', age: 25 },
    { id: 2, name: 'Maria', age: 30 },
    { id: 3, name: 'Pedro', age: 35 }
];

// Array de objetos "Posts"
const posts = [
    { id: 1, title: 'Primer post', content: 'Lorem ipsum dolor sit amet', userId: 1 },
    { id: 2, title: 'Segundo post', content: 'Consectetur adipiscing ma elit dolor', userId: 1 },
    { id: 3, title: 'Tercer post', content: 'Sed do eiusmod tempor incididunt', userId: 2 },
    { id: 4, title: 'Cuarto post', content: 'Ut labore et dolore magna aliqua', userId: 3 }
];

// Array de objetos "Comentarios"
const comments = [
    { id: 1, text: '¡Excelente artículo!', userId: 2, postId: 1 },
    { id: 2, text: 'Gracias por compartir', userId: 3, postId: 1 },
    { id: 3, text: 'Interesante punto de vista', userId: 1, postId: 2 },
    { id: 4, text: 'Estoy de acuerdo contigo', userId: 2, postId: 2 },
    { id: 5, text: 'Buen trabajo', userId: 3, postId: 3 }
];


//   Ejercicio 1: Obtener el nombre
//    del autor de un post dado su id.

function getNameByPost(postId) {
    const post = posts.find((post) => post.id === postId)
    const autor = users.find((user) => user.id === post.userId)
    return autor.name
}

console.log(getNameByPost(1))
console.log(getNameByPost(2))
console.log(getNameByPost(3))

//   Ejercicio 2: Obtener todos los comentarios
//    de un usuario dado su id.

function getCommentsByUserId(userId) {
    return comments.reduce((acc, comment) => {
        if (userId === comment.userId) {
            acc.push(comment.text)
        }
        return acc
    }, [])
}

console.log(getCommentsByUserId(1))
console.log(getCommentsByUserId(2))
console.log(getCommentsByUserId(3))
console.log(getCommentsByUserId(4))


//   Ejercicio 3: Obtener todos los posts que
//    contengan un texto dado en su contenido.  


  function getPostByText(text) {
    return posts.filter((post) => post.content.includes(text))
  }

console.log("UNO", getPostByText("Lorem"))  
console.log("DOS", getPostByText("dolor"))  
console.log("TRES", getPostByText("ma")) 


// PUEDO CREAR UN ARRAY DE OBJETOS CON UN MAP DE ESTA FORMA O TAMBIEN CON UN REDUCE
// Ejercicio 1: Obtener el nombre y la edad de todos los usuarios.

  function getNameAndAge() {
    return users.map(user => ({name: user.name, age: user.age})) 
  }

console.log(getNameAndAge())

// Ejercicio 2: Obtener todos los posts realizados por un usuario dado su id.

  function getPostsByUserId(userId) {
    return posts.filter((post) => post.userId === userId)
  }

console.log(getPostsByUserId(1))
console.log(getPostsByUserId(2))
console.log(getPostsByUserId(3))

// Ejercicio 3: Obtener todos los comentarios de un post dado su id.

  function getCommentsByPostId(postId) {
    return comments.filter((comment) => comment.postId === postId)
  }

console.log('GET COMMENTS BY POST ID')  
console.log(getCommentsByPostId(1))
console.log(getCommentsByPostId(2))
console.log(getCommentsByPostId(3))


//Ejercicio: obtener el title de un post dado el id de un comentario

  function getTitleByCommentId(commentId) {
    const comment = comments.find((comment) => comment.id === commentId)    
    const { postId } = comment
    return posts.filter((post) => post.id === postId).map((post) => post.title)
  }  

console.log('GET POST TITTLE BY COMMENT ID')
console.log(getTitleByCommentId(1))
console.log(getTitleByCommentId(2))
console.log(getTitleByCommentId(3))
console.log(getTitleByCommentId(4))
console.log(getTitleByCommentId(5))


// Ejercicio 4: Obtener el número total de comentarios realizados por cada usuario.

  function getCommentsCountByUser() {
    return comments.reduce((acc, comment) => {
      const { userId } = comment
      const user = users.find((user) => user.id === userId)
      if(user){
        const { name } = user
        acc[name] = (acc[name] || 0) + 1
      }
      return acc
    } ,{})
  }

  // function getTasksCountByUser() {
  //   const tasksCount = tasks.reduce((count, task) => {
  //       const { assignedTo } = task;
  //       const user = users.find((user) => user.id === assignedTo);
        
  //       if (user) {
  //           const { name } = user;
  //           count[name] = (count[name] || 0) + 1;
  //         }
      
  //         return count;
  //   }, {})
  //   return tasksCount
  // }


console.log(getCommentsCountByUser())

// Ejercicio 5: Obtener el promedio de edad de los usuarios que han realizado al menos dos comentarios.



  function getAverageAgeAtLeast2comments() {
    const count = comments.reduce((acc, comment) => {
      const { userId } = comment;
      const user = users.find((user) => user.id === userId);
      if (user) {
        const { name } = user;
        acc[name] = (acc[name] || 0) + 1;
      }
      return acc;
    }, {});
  
    const userIdsWithAtLeast2Comments = Object.entries(count)
      .filter(([userId, commentCount]) => commentCount >= 2)
      .map(([userId]) => userId);
  
    const agesToAverage = users
      .filter((user) => userIdsWithAtLeast2Comments.includes(user.name))
      .map((user) => user.age);
  
    const sum = agesToAverage.reduce((acc, age) => acc + age, 0);
    const average = sum / agesToAverage.length;
  
    return average;
  }  

console.log(getAverageAgeAtLeast2comments())  

