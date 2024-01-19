//multiple buttons can be select
// const first=document.querySelector("#one");
// first.addEventListener("click",()=>{
//     console.log("you click me one ")
// })
// 

 const allButton=document.querySelectorAll(".mybtn button");
// allButton.addEventListener("click",function(){

// for(let Button of allButton){
//     Button.addEventListener("click",function(){
//         console.log(this);
//     })
   
// }


// allButton.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(button.textContent);
//     })
// })



//event object
const first=document.querySelector("#one");
first.addEventListener("click",(events)=>{
    console.log(events);
});


//kab bhi kisi bhi element me event listener add hoga
//js engine---- line by line execute the code
//browser  --- js Engine+extra features
//browser --> js Engine + Web API


allButton.forEach(function(button){
        button.addEventListener("click",function(e){
            console.log(e.currentTarget);
        })
    })



