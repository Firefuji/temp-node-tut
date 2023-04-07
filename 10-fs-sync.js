//Fs module
//We can work the Fs module asynchronously or synchronously
//Sync methods
const {readFileSync, writeFileSync} = require('fs')

//Two params: Path and encoding
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first)
console.log(second)
//Will create/override file in given path
//{flag: 'a'} will make it so it won't override the file but instead add on to its contents
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag:'a'})