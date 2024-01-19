// const URL="https://jsonplaceholder.typicode.com/posts"
const xhr=new XMLHttpRequest();
// console.log(xhr)


//step1
console.log(xhr.readyState);
xhr.open("GET",URL);
console.log(xhr.readyState);

xhr.onreadystatechange(()=>{
console.log(xhr.readyState);
})

