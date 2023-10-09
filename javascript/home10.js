
let countfreq=(string)=>
{
    let obj={
       
    }
    for(const letter of string)
    {
       if(letter in obj)
       {
        obj[letter]=obj[letter]+1;
       }
       else{
        obj[letter]=1;
       }
    }
    return obj

}
let string="jatin agrawal is the best";

console.log(countfreq(string));