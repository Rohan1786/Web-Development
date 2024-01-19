function myFunc(callback){
    console.log("my function 1 doing some task");
    callback();
}
// function myFunc()2{
//     console.log("my function  doing some task 2")
// }
// myFunc(myFunc2);
// myFunc2();

myFunc(()=>{
    console.log("my function task 2")
});
// myFunc();