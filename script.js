// Script for navigation bar
const bar=document.body.querySelector('#bar');
const nav=document.body.querySelector('#navbar');
const close=document.body.querySelector('#close');
console.log(close)
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}