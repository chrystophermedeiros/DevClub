const express = require('express')
const uuid = require('uuid')
const cors = require('cors');

const port =3001;
const app = express()


app.use(express.json())
app.use(cors())

const users = []
const checkUserId = (request, response, next) =>{
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)
    if(index < 0) {
        return response.status(404).json({message: "user not found"})
    }

    request.userIndex = index
    request.userID = id

    next()
 
}


app.get('/users/', (request, response) =>{
  
    return response.json(users)
})


app.post('/users/', (request, response) =>{
    try{
        const {name, age} = request.body
        // if(age < 18) throw new Error("apenas permitido usuario maior de 18 anos de idade")
        const user = {id:uuid.v4(), name, age}
        users.push(user)
        return response.status(201).json(user)
    } catch (err) {
        return response.status(500).json({erro:err.message})
    }finally {
        console.log("terminou tudo");
    }

})

app.put('/users/:id', checkUserId, (request, response) =>{
    
    const { name, age} = request.body
    const index = request.userIndex
    const id = request.userID
    const updateUser = { id, name, age }
    users[index] = updateUser
    return response.json(updateUser)
})

app.delete('/users/:id', checkUserId, (request, response) =>{
    const index = request.userIndex    
    users.splice(index,1)
    return response.status(204).json({message: "User delete com sucesso"})

})

app.listen(port, () =>{
    console.log(`🚀  Server started on port ${port}`);
})