//callbacks with respective decoring the object
const heading1=document.querySelector(".heading1")
const heading2=document.querySelector(".heading2")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")





// setTimeout(()=>{
//     heading1.textContent="rohan";
//     heading1.style.color="orange";

    
//     setTimeout(()=>{
//         heading2.textContent="karthik";
//         heading2.style.color="pink";



//         setTimeout(()=>{
//             heading3.textContent="ramesh";
//             heading3.style.color="red";

//             setTimeout(()=>{
//                 heading4.textContent="arunkumar";
//                 heading4.style.color="blue";
//             },2000);
//         },2000);
//     },2000);
    
// },2000);



//pyramid formation for new process to be manage the website

function changeContext(element,text,color,time,onSuccessCallback,onFailureCallback){
    return new Promises((resolve,reject)=>{
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            resolve();
        }
       
    
        else{
            reject()
        }
    },time)
});
}


changeContext(heading1,"ONE","red",1000)
.then(()=>changeContext(heading2,"two","cyan",1000))
.then(()=>changeContext(heading3,"three","pink",1000))
.then(()=>changeContext(heading4,"three","pink",1000))

