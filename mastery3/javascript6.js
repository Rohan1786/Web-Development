function myPromises(){

    return new Promises((resolve,reject)=>{
    const value=false;
    setTimeout(()=>{

    if(value){
        resolve();
    }
    else{
        reject();
}
});},2000);
}
myPromises().then(()=>{console.log("your in resolve state")}).catch(()=>{console.log("your in reject")})