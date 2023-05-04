const plus =document.querySelector(".plus"),
minuss = document.querySelector(".minuss"),
number = document.querySelector(".number");

let a=1;
plus.addEventListener("click" , ()=>{
    a++;
    a= (a < 10) ? "0" +a :a;
    number.innerText = a;
    console.log(a);
})

minuss.addEventListener("click" , ()=>{
if(a>1){
    a--;
    a= (a < 10) ? "0" +a :a;
    number.innerText = a ;
}
});


const plluss =document.querySelector(".plluss"),
minus = document.querySelector(".minus"),
numberr = document.querySelector(".number2");

let b=1;
plluss.addEventListener("click" , ()=>{
    b++;
    b= (b < 10) ? "0" +b :b;
    numberr.innerText = b;
    console.log(b);
})

minus.addEventListener("click" , ()=>{
if(b>1){
    b--;
    b= (b < 10) ? "0" +b :b;
    numberr.innerText = b ;
}
});


const pluss =document.querySelector(".pluss"),
mminus = document.querySelector(".mminus"),
numbeer = document.querySelector(".number3");

let c=1;
pluss.addEventListener("click" , ()=>{
    c++;
    c= (c < 10) ? "0" +c :c;
    numbeer.innerText = c;
    console.log(c);
})

mminus.addEventListener("click" , ()=>{
if(c>1){
    c--;
    c= (c < 10) ? "0" +c :c;
    numbeer.innerText = c ;
}
});