//Read stream is used when the file being read is too big and reading the entire file is bad
const {createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt')
//Data is read in chunks 
//Default chunk is 64kb, we can control the chunk size with highWaterMark
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})
stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (error) => {
    console.log(error)
})