const celcius=document.getElementById("inputCel");
const fehrn=document.getElementById("inputFah");


celcius.addEventListener("input",function(){
    let c=this.value;
    let f=(c * 9/5) + 32;
    if(!Number.isInteger(f)){
        f=f.toFixed(3);
    }
    fehrn.value=f;
});

fehrn.addEventListener("input",function(){
    let f=this.value;
    let c=(f - 32) * 5/9 ;
    if(!Number.isInteger(c)){
        c=c.toFixed(3);
    }
    celcius.value=c;
})