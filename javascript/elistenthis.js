// let h1=document.querySelector('h1');
// let h2=document.querySelector('h2');
// let p=document.querySelector('p');
// function backgroundColor(){
//     this.style.backgroundColor="blue";
// }
// h1.addEventListener("click",backgroundColor);
// h2.addEventListener("click",backgroundColor);
// p.addEventListener("click",backgroundColor);

// KeyboardEvent
// let inp=document.querySelector('input');
// inp.addEventListener('keydown',function(event){
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);  
//     console.log('key pressed');
// });
//form events
// let form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.dir(form)
//     let user = this.elements[0];//form.elements[0]
//     let pas = this.elements[1];//form.elements[1]
//     // console.dir(inp); // To inspect the element's properties
//     console.log(user.value); // To log the value entered in the
//     console.log(pas.value);

    
// });
// let txt = document.querySelector('#txt');
// let p = document.querySelector('p');
// txt.addEventListener('input',function(){
// console.log(txt.value);
// p.innerText=txt.value;
// });
// let btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     btn.style.backgroundColor='green';
// });
let txt = document.querySelector('#txt');
let h1=document.querySelector('h1');
txt.addEventListener('input',function(event){
    
h1.innerText=txt.value
})