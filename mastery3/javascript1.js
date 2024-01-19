//synchronous programming and asynchronous programming



//synchrouns programming
// console.log("line by line execution can occur");


//asynchronous programming

console.log("script gets start")
function hello(){
    console.log("hello world")
}


const id=setTimeout(()=>{console.log("hello world")},1000);


// setTimeout(hello,1000);
// for(let i=0;i<100;i++){
//     console.log("within the start and end")
// }

clearTimeout(id);
console.log("script end");