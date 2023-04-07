// npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
//npm install <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//Dev dependency
//We will not need these dependencies when we finally put our project out
//npm install <packageName> --save-dev

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
console.log('hello people')

//When pushing to github, we do not need to push the node_modules
//In .gitignore, we can specify what files not to include when pushing
//When we download packages from Github, if a package.json exists, we can do npm install in the same directory, in order to automatically setup the node modules folder

//Scripts
//Set up command aliases
//To use do "npm run <command alias>"

//Uninstall packages by doing npm uninstall <packageName>

//Version: major-change.minor-change.patch
//Minor-change is backwards compatiable

//npx, global vs local dep, version template, package.json