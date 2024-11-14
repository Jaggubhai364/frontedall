let task =document.querySelector('input');
let btn =document.querySelector('button')
let line =document.querySelector('#line');
btn.addEventListener('click',function(){
    let li =document.createElement('li');
    li.textContent=task.value;
    line.appendChild(li);
    task.value='';
    li.addEventListener('dblclick',function (){
        this.remove();
    })
});
// li.addEventListener('dblclick',function (){
//     this.remove();
// })