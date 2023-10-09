const newdog=document.getElementById("newdog");
const dogimage=document.getElementById("dogimage");

newdog.onclick=()=>getnewdog()
{

}
function getnewdog()
{
 fetch("https://dog.ceo/api/breeds/image/random")
 .then(Response=>Response.json())
 .then(json=>
    { 
       
       dogimage.innerHTML=`<img src='${json.message}'/>`

    })
}