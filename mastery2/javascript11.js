const body=document.body;


body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})

const mainbtn=document.querySelector(".mybtn");

mainbtn.addEventListener("mouseover",(e)=>{
    console.log("you are in the mouse over event occur")
})
