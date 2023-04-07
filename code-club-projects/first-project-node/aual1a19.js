//npm index.js roda o servidor
//ctrl+c para o servidor
//npm i nodemon -D = só vai ser usado na minha maquina
//npm i uuid = cria um id universa e unico

// -Middleware = interceptador tem o poder de alterado ou parar os dados da requisição

/*
    | - Query params =  http://localhost:3000/users?name=Chrystopher&age=28 // filtros

    app.get('/users', (request, response) =>{
    const {name, age} = request.query //Destructuring assignnment
  

    console.log(name, age);
    return response.json({name, age})
   
    })
    ________________________________params______________________________________________

    | - Route params = /users/2 //BUSCAR, DELETAT OU ATUALIZAR ALGO ESPECIFICO
    
    app.get('/users/:id', (request, response) =>{
    const {id} = request.params
    console.log(request);
  
    return response.json({id})
   
    })

    -----------------------------Body--------------------------------------------
    Request Body = {"name" : "Chrystopher","gae": 26 }

    app.get('/users/', (request, response) =>{
    const {name, age} = request.body
    console.log(request);
  
    return response.json({name, age})
    

*/

const express = require('express')
const uuid = require('uuid')
const port =3000

const app = express()

app.use(express.json())

const users = []

app.get('/users/', (request, response) =>{
    return response.json(users)
})


app.post('/users/', (request, response) =>{
    const {name, age} = request.body
    const user = {id:uuid.v4(), name, age}

    users.push(user)
    return response.status(201).json(user)

})

app.put('/users/:id', (request, response) =>{
    const { id } = request.params
    const { name, age} = request.body
    const updateUser = { id, name, age }
    
    const index = users.findIndex(user => user.id === id)
    if(index < 0) {
        return response.status(404).json({message: "user not found"})
    }

    users[index] = updateUser
    
    return response.json(updateUser)
})

app.delete('/users/:id', (request, response) =>{

    const {id} = request.params
    const index = users.findIndex(user => user.id === id)
    if(index < 0) {
        return response.status(404).json({message: "user not found"})
    }

    users.splice(index,1)

    return response.status(204).json({message: "User delete com sucesso"})

})

app.listen(port, () =>{
    console.log(`🚀  Server started on port ${port}`);
})