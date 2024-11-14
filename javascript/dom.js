let btn=document.querySelector('button');
btn.addEventListener('click')

function generatenewcolour(){
    let red= Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color =`${red},${green},${blue}`
}