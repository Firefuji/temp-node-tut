var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    //Instead of passing all the data in one big batch, we should pass it in small increments in order to prevent traffic congestion
    //We first make a connection between the file and our code
    fileStream.on('open', ()=> {
        fileStream.pipe(res) //Sends in chunks
    })
    fileStream.on('error', (err)=> {
        res.end(err)
    })
}).listen(5000)