let h1=document.querySelector('h1'); 
function changecolour(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color =color;
            resolve("color change");
        },delay);
    });
}
// changecolour('red',1000)
// .then( ()=> {
//     console.log('1');
//     return changecolour('green',1000);
// })
// .then( ()=> {
//     console.log('1');
//     return changecolour('orange',1000);
// })
// .then( ()=> {
//     console.log('1');
//     return changecolour('blue',1000);
// }).then( ()=> {
//     console.log('1');
//     return changecolour('purple',1000);
// })

//we can improve this above by async and await
async function demo() {
    await changecolour('red',1000);
    await changecolour('green',1000);
    await changecolour('blue',1000);
    await changecolour('pink',1000);
}
demo();