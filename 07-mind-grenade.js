const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is ${num1+num2}`)
}
//This will appear when we run 03, because we haven't checked if require.main == module in order to run it, by default all modules' code will run.
addValues()