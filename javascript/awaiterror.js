let h1=document.querySelector('h1'); 
function changecolour(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject('404 not found offo');
            }
            h1.style.color =color;
            console.log('colour changed',color);
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
//
async function demo() {
    try {
        await changecolour('red',1000);
        await changecolour('green',1000);
        await changecolour('blue',1000);
        await changecolour('pink',1000);
    } catch (error) {
        console.log('error caught');
        console.log(error)
    }
    console.log('bj');
    console.log('bhau');
}
