//GLOBAL VARIABLES
//
//Can be used anywhere within your application
//
// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules (CommonJS)
// module      - info about current module (file)
// process     - info about env where the program is being executed
console.log(__dirname)
setInterval(() => { //Runs console.log('Hello World') every second as an async event
    console.log('Hello World')
}, 1000)
