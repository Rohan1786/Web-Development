let link=document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href","https://codprog.com")
const input=document.querySelector("input");
console.log(input.getAttribute('type'));

link=Array.from(link)
console.log(link.isArray)
// for(let link of links){
//     links.style.fontWeight="bold";
// }

console.log(link.classList);