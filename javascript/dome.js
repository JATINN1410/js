let text=document.getElementById('text');
console.log(text.innerText);
// text.innerText="muskan agrawal";
// console.log(text.innerText);
// text.innerHTML='<p>motariya</p>'
// text.style.color="red";
// text.style.backgroundColor="purple";
// let divred=document.getElementById("red");
// let divblue=document.getElementById("blue");
// let divyellow=document.getElementById('yellow');
// // console.log(divred);
const squares=document.querySelectorAll(".squarebox");
// console.log(squares);
const timesclicked={'red':0,'blue':0,'yellow':0}
squares.forEach(square => {
    // console.log(square.value);
    square.onclick=()=>
    {
        timesclicked[square.value]+=1;
        square.innerText=timesclicked[square.value];
    console.log(square.value);
    }
    
});
const clearscore=document.getElementById("clearscore");
clearscore.onclick=()=>
{ 
    squares.forEach(square=>{
    square.innerText=" ";
    timesclicked[square.value]=0
       
    });

}
// divred.onclick=()=> console.log("red")
// divyellow.onclick=()=>console.log("yellow");
// divblue.onclick=()=>console.log("blue");