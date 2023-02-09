
let myPromise = new Promise(function(resolve, reject)
{
let a = 15
if(a>10)
{
 resolve("Success")   
}
else{
    reject("Failed")
}
});

async function asyncExample()
{
try{
    let value = await myPromise;
    console.log(value)
}
catch(error) {
    console.log(error)

}
}

asyncExample();