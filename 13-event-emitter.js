// //Class EventEmitter
// //Event-driven program
// const EventEmitter = require('events')
// const customEmitter = new EventEmitter()
// //'on' will listen to a specific event and 'emit' send that event
// //We respond to the 'reponse' event with the callback function
// customEmitter.on('response', (name, id) => {
//     console.log(`Data recieved ${name}: ${id}`)
// })
// customEmitter.on('response', () => {
//     console.log(`some other logic `)
// })
// //Emitting a 'response event'
// //Any other parameters are passed down to the Event Listener
// customEmitter.emit('response', 'john', 34)

const http = require('http')
const server = http.createServer()
//Stock events for Node servers are documented, 'request' is one of them
server.on('request', (req, res) => {
    res.end('Welcome')
})
server.listen(5000)