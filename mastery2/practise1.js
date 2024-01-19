//litte practise

// const alButton=document.querySelectorAll(".mybtn button");


// alButton.forEach(button=>{
//     button.addEventListener("click",(e)=>{
// // console.log(e.currentTarget);
// e.target.style.backgroundColor="red";

//     })
// })


//example for another persopective

function randomColorGenerator(){
    const red=Math.floor(Math.random())*256;
    const green=Math.floor(Math.random())*256;
    const blue=Math.floor(Math.random())*256;
    const randomColor=`rgb(${red},${green},${blue})`
    return randomColor;
}

const btn=document.querySelector("button .mybtn");
const body=document.body;
btn.addEventListener("click",()=>{
const randomColor=randomColorGenerator();
body.style.backgroundColor=rand;

})
