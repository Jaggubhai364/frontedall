
// for(let i=10;i>=1;i=i-3){
//     console.log(i);
// }
// for(let i=0;i<=16;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// //infinite loop
// for(let i=0;i<=10;i++){
//     let w=5*i;
//     console.log(w);
    
    
// }
//while loop
 //while ke liyr alag se veriable likhna hota hai not like for loop ki
 //ki andar hin likh rahe he
//  let i=5;
//  while(i>1){
//     console.log(i);
//     i--;
//  }
// let i=100;
// while(i>=1){
//     console.log(i);
//     i--;
// }
// let fav="avatar";
// let gus=prompt("");
// while((fav!=gus)&&(gus!="quit")){
//     console.log('phir se maro');
// gus=prompt("");
// }
// console.log('h');
// let fav="avatar";
// let gus=prompt("put movie name");
// while(fav!=gus){
//     if(gus=="quit"){
//         console.log("kabhi alwida na kehna")
//         break;
//     }
//     console.log('phir se maro');
// gus=prompt("wrong gase");
// }
// console.log('h');
// let fruits=['a','b','c','d'];
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }
// let heroes=[['a','v','g'],['l','q','m']];
// for(i=0;i<=heroes.length;i++){
//     for(j=0;j<=heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }
// let fruits=['a','b','c','d'];
// for(a of fruits)
// {
//     console.log(a);
// }
// let heroes=[['a','v','g'],['l','q','m']];
// for(a of heroes){
//     for(b of a){
//         console.log(b)
//     }
// }
// let todo=[];
// let req=prompt("enter your request");
// while(true){
//     if(req=="quit"){
//         console.log("quit");
//         break;
//     }
//     if(req=="list"){
//        for(let i=0;i<=todo.length;i++){
//         console.log(i,todo[i]);
//        }
//     } if(req=="add"){
//         let add=prompt("enter your work");
//         todo.push(add);
//         console.log('task added')
//     }
//      if(req=="d"){
//         let id=prompt("enter the index want to delete");
//         todo.splice(id,1);
//     }
//     req=prompt("enter your request");
// }