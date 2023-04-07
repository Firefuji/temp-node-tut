const path = require('path')
//Path seperator for this system
console.log(path.sep)
//Joins a sequence of path segments using the path seperator for this system
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
//Base path segment of filePath
const base = path.basename(filePath)
console.log(base)
//Absolute Path, accepts a sequence of paths or path segments
//Difference between join and resolve is illustrated in
//https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)