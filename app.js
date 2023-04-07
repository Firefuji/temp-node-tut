// npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
//npm install <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// Name has to be unique in order to be published
// Dependencies [External packages] are stored within node_modules
// Needed to provide information about our project

//Needs install to work
const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

//When pushing to github, we do not need to push the node_modules
//In .gitignore, we can specify what files not to include when pushing