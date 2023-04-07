// Modules
//
// CommonJS makes it so by default, every file is a module
// Modules are encapsulated code where we can choose what to export when included in other files
//
// For applications, we typically split our application into multiple JS files
// Splitting files helps organize our code alot
// When we want to run our application, we will choose an entry point which will include every file

//We set the names variable to the exports object of the '04-names.js' module via the require() method
const names = require('./04-names.js');
const sayHi = require('./05-utils.js');
const data = require('./06-alternative-flavors.js')
require('./07-mind-grenade.js')
console.log(names)
console.log(data)
sayHi(`Susan`)
//John and peter are part of the 'names' object, so to access them, we do dot notation
//Alternatively we could've replaced names with {john, peter}
sayHi(names.john)
sayHi(names.peter)

