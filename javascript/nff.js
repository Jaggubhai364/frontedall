let h1=document.querySelector('h1');
function changecolour(color,delay){
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        h1.style.color=color;
        resolve('colour changed');
    },1000)
})
}
changecolour(red,1000)
.then(()=>{
    changecolour(yellow,1000)
})
.then(()=>{
    changecolour(green,1000)
})