async function asyncExample()
{
    let a = 15
    if(a>10)
    {
     return Promise.resolve("Success")   
    }
    else{
        return Promise.reject("Failed")
    }

}
asyncExample().then(
    function(result) {
    console.log(result)
},
function(error) {
    console.log(error)
}
);