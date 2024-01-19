const URL="https://jsonplaceholder.typicode.com/posts"
const xhr=new XMLHttpRequest();
// console.log(xhr);
// step1 use open method
// console.log(xhr.readyState);
xhr.open("GET",URL);
xhr.onreadystatechange=function(){

    if(xhr.readyState===4){

        const response=xhr.response;
        const data=JSON.parse(response)
        console.log(typeof data)

        // console.log(typeof xhr.response)
    }
    // console.log(xhr.readyState);
}


xhr.send();
