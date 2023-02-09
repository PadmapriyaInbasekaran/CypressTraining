

function callBackFunction(a,b, addFunction)
{
let sum = a + b
    return addFunction(sum)
}
function addFunction(sum)
{
console.log("sum = "+sum)
}
callBackFunction(10,20,addFunction)