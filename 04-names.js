//Local 
const secret = 'SUPER SECRET'
//Available to rest of application
const john = 'john'
const peter = 'peter'
//Provides information about this module
//console.log(module)
//This line would be ran by doing require('./04-names.js'), 
//In order to avoid this, we would have to check if we are running this line from this file or somewhere else via 'require.main == module'

//Basically, 'module' describes the modules information as an object
//We are editing the exports object within the module to allow sharing of these variables to the rest of the application
//The secret variable is not accessible to any other file
module.exports = {john, peter}


