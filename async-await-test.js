//Async patterns - Setup Promises
const {readFile, writeFile} = require('fs')
// readFile('./content/first.txt', 'utf8', (err, data) => {
//     if(err) {
//         return;
//     }
//     console.log(data)
// })

//Promise for better code structure
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

//Async & await for the best code structure
//Better method of writing .then; .catch; .finally as it looks more like sync code
const util = require('util')
const getText = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await getText('./content/first.txt', 'utf8')
        const second = await getText('./content/second.txt', 'utf8')
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME ${first} ${second}`)
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}
start()