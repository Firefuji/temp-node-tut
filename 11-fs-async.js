//Fs module
//We can work the Fs module asynchronously or synchronously
//Async methods
const {readFile, writeFile} = require('fs')

//Needs a callback to perform after done reading or writing
//Callback Chaining: THE PYRAMID OF DOOM
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})

