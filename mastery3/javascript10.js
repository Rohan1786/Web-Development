const URL="https://jsonplaceholder.typicode.com/";

 const sendRequest=(method,url)=>{
    return new Promise(function(resolve,reject){
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=function(){
            if(xhr.status>=200&& xhr.status<300){
        resolve(xhr.response);
            }
            else{
                reject(new Error("something wents wrong"));
            }
        }
        xhr.onerror=function(){
            reject(new Error("something happens"))
        }
        xhr.send();
    })


}
console.log(xhr.sendRequest("GET",URL));
