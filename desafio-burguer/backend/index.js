const express = require('express')
const uuid = require('uuid')
const port = 3002
const app = express()
app.use(express.json())

const pedidos = []
const checkPedido =  (req, res, next) =>{
    const { id } = req.params
    const index = pedidos.findIndex(pedido => pedido.id === id)
    if(index < 0) {
        return res.status(404).json({message: "pedido not found"})
    }

    req.pedidoIndex = index
    req.pedidoID = id

    next()
 
}
/*
Crie um middleware que é chamado em todas requisições que tenha um 
console.log que mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) 
e também a url da requisição.
*/

const logRequests = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
  }
  
  
  
const log = logRequests
app.use(log)



app.get('/order/', (req, res) =>{
  
    return res.json(pedidos)
})

app.get('/order/:id', checkPedido, (req, res) =>{
   
    return res.json(pedidos)
})



app.post('/order/', (req, res) =>{

    const {order, clientName, price, status ="Em preparação", } = req.body
    const pedido = {id:uuid.v4(), order, clientName, price, status}

    pedidos.push(pedido)
    return res.status(201).json(pedido)

})

app.put('/order/:id', checkPedido, (req, res) =>{
    
    const { order, clientName, price, status = pedidos[req.pedidoIndex].status } = req.body
    const index = req.pedidoIndex
    const id = req.pedidoID
    const updatepedido = { id, order, clientName, price, status }
    pedidos[index] = updatepedido
    return res.json(updatepedido)
})

app.delete('/order/:id', checkPedido, (req, res) =>{
    const index = req.pedidoIndex    
    pedidos.splice(index,1)
    return res.status(204).json({message: "pedido deletado com sucesso"})

})

app.patch('/order/:id', checkPedido, (req, res) =>{
    const { order, clientName, price,status } = req.body
    const index = req.pedidoIndex
    const id = req.pedidoID
    const updatepedido = { id, order, clientName, price, status: status || "pronto" }
    pedidos[index] = updatepedido

    return res.json(updatepedido)
})


app.listen(port, () =>{
    console.log(`🚀  Server started on port ${port}`);
})