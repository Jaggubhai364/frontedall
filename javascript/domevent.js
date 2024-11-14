let btns =document.querySelectorAll('button');
// btn.onclick=function (){
//     alert("button was clicked");
// }
// for (let i=0;i<btns.length;i++) {
//     // btns[i].onclick = sayhello;
//     // btns[i].onmouseenter=saybye;
//     btns[i].addEventListener('click',sayhello);
//     btns[i].addEventListener('click',saybye);
//     btns[i].addEventListener('dblclick',function(){
//         alert('hi hello krishna bolo');
//     });
// }
// function sayhello (){
//     alert('hello ji sasrikal');
// } 
// function saybye(){
//     alert('aa to shai');
// }
let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    console.log('generated');
let newcolor =generatenewcolour();
let h1 = document.querySelector('h1');
let div = document.querySelector('div');
h1.innerText=newcolor;
div.style.backgroundColor = newcolor;
});

function generatenewcolour(){
    let red= Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color =`rgb(${red},${green},${blue})`;
    return color;
}