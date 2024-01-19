// function myfunc(power){
//     return function(number){
//         return number**power;
//     }
// }

const myfunc=power=>number=>number**power;// it is similar like above function


const cube=myfunc(2);
const ans=cube(3);
console.log(ans);

const func=()=>{
   let counter =0;
    return function(){
        if(counter<1){
        console.log("hi im calling  by you")
        counter++;
    }
    else{
        console.log("hi i already called by you"+counter)
    }
}}
const h=func();
h();
h();
h();
h();
h();

