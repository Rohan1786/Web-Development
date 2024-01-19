const hello=(x)=>{
    let a="rohan"
    let b="pawar"
    return function(){
    console.log(a,b,x)
    }

}
ans=hello("mohit")
ans();