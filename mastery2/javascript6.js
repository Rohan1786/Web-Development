//some old methods to support poor IE
//appendChild
//insertBefore
//replaceChild
//removeChild

const { addListener } = require("nodemon");


const li=document.createElement("Li");
const reference=document.querySelector(".h");


li.textContent="clixk";

// ul.remove(li,reference);


//staic list vs live list
const ul=document.querySelector(".nav");
const sixthLi=document.createElement("Li");
sixthLi.textContent="jip";
ul.append(sixthLi);
console.log(ul);
// querySelector used to give static add Lst
// getElementBysomething used to give live add List
