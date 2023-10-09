function sum(a,b)
{                                //simple function
    return a+b;
}


let sum2=(c,d)=>{                //arrow function explicit return
    return c+d;

}

let sum3=(e,f)=>e+f;            //arrow function implicit return
let num=sum3(1,6);
console.log(num);
let mul=(a,b)=>a*b;
let nums=mul(3,5);
console.log(nums);
let arr=["jatin","manu",3,4,5,4,6,7,8,8];
let arr2=arr.slice(1,4);
console.log(arr2);
