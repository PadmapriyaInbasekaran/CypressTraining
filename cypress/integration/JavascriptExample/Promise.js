function promiseExample()
{

}
let myPromise = new Promise(function(resolve, reject)
{
let a = 15
if(a<10)
{
 resolve("Success")   
}
else{
    reject("Failed")
}
})

myPromise.then(
    function(value){
        console.log(value)
    },
    function(error){
        console.log(error)
    }
)