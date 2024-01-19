//promises
//status should be fulfiled or the pending based on promises gets over or not
//value is should be undefined or the defined

const bucket=['coffee','chips','vegetables','salt','rice'];


const friedRice=new Promise((resolve,reject)=>{
if(bucket.includes("vegetables")&& bucket.includes("rice")&& bucket.includes("salt")){
    resolve("Fried rice")

}
else{
    reject("couldnt do it")
}
});

// friedRice.then((myFriedRice)=>{
//     console.log("lets eat this my :",myFriedRice)
// },(error)=>{
// console.log(error)
// 
// })
friedRice.then((myFriedRice)=>{
        console.log("lets eat this my :",myFriedRice)
    }).catch((error)=>{
        console.log(error)
    });

    

