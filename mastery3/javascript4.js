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
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
        }
        if(onSuccessCallback){
            
        onSuccessCallback();
        }
        else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },time)
}
changeContext(heading1,"hello","green",1000,()=>{
    changeContext(heading2,"hello","green",1000,()=>{
        changeContext(heading3,"hello","green",1000,()=>{
            changeContext(heading4,"hello","green",1000,()=>{
    
            }
            ,()=>{
                console.log("heading one not exists")
            });
        }
        ,()=>{
            console.log("heading two not exists")
        });
    }
    ,()=>{
        console.log("heading three not exists")
    });
}
,()=>{
    console.log("heading four not exists")
});