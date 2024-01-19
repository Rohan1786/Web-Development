//setIntervals

console.log("start")

// setInterval(()=>{
//     console.log(Math.random())
// },2000)

const body=document.body;
const btn=document.querySelector("button");
// btn.addEventListener("click",()=>{
//    clearInterval(id);
//    btn.textContent=body.style.background;
// })

const id=setInterval(()=>{
    const red=Math.floor(Math.random()*126);
    const green=Math.floor(Math.random()*126);
    const blue=Math.floor(Math.random()*126);
const rgb=`rgb(${red},${green},${blue})`;

body.style.background=rgb;
console.log(rgb)

},1000);


console.log("end")