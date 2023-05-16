const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)


app.use(express.static('public'))


const connectedClients = new Set()


io.on('connection', (socket) => {
    console.log('A user connected')


    connectedClients.add(socket.id)


    io.emit('connectedClients', Array.from(connectedClients))


    socket.on('chatMessage', (message) => {
        console.log('Chat message:', message)


        socket.broadcast.emit('chatMessage', message)
    })


    socket.on('disconnect', () => {
        console.log('A user disconnected')


        connectedClients.delete(socket.id)


        io.emit('connectedClients', Array.from(connectedClients))
    })
})


const port = 3009
http.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
