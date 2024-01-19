const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

//capturing the event
// child.addEventListener("click",()=>{
//     console.log("capture !!!!! child");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("capture !!!!! parent")
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("capture !!!!! grandparent")
// },true);

// document.body.addEventListener("click",()=>{
//         console.log("capture !!!!! body")
//     },true);


// //event bublling 
// child.addEventListener("click",()=>{
//     console.log("you click on child");
// });

// parent.addEventListener("click",()=>{
//     console.log("you click on parent")
// })
// grandparent.addEventListener("click",()=>{
//     console.log("you click on grandparent")
// });

// document.body.addEventListener("click",()=>{
//         console.log("you click on body")
//     });


    //event delegation


grandparent.addEventListener("click",(e)=>{
    console.log(e.target)
});