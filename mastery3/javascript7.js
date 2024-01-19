//promises resolve
 //promise chaining


//  Promise.resolve(5).then(value=>{
//     console.log(value);
//  })

//then()
//then usually use to return promise for chaining of the promises

function myFunction(){
    return new Promise((resolve,reject)=>{
        resolve("good");
    })
}

myFunction().then((value)=>{

    console.log(value);
    value+=" Morning";
    return value;


}).then((value)=>{
    console.log(value);
    value+=" rohan";
    return value;

}).then(value=>{
    console.log(value);
});
