// let arr=[1,2,3,4,5];
// let print = function(x){
//     console.log(x);
// }
// arr.forEach(function(x){
//     console.log(x);
// });
// arr.forEach((x)=>{
//     console.log(x);
// });
// const students = [
//     {
//         name: "Alice",
//         marks: 85
//     },
//     {
//         name: "Bob",
//         marks: 92
//     },
//     {
//         name: "Charlie",
//         marks: 78
//     },
//     {
//         name: "Diana",
//         marks: 88
//     }
// ];
// // students.forEach((Element)=>{
// //     console.log(Element.name);
// // // });
// // let double=students.map((el)=>{
// //     console.log(el.marks*el.marks);
// // });
// // let ans = students.every((x)=>{
// //     return x.marks >70;
// // });
// // console.log(ans);
// // let ans = students.some((x)=>{
// //     return x.marks <80;
// // });
// // console.log(ans);
// //reduce method 
//  let num=[1,75,3,100,98];
// //  let result =num.reduce((rsl,el)=>{
// //     console.log(rsl);
// //     return(rsl+el);
// //  });
// //  console.log(result);
// //maximum in array
// // let max=0;
// // for(let i=0;i<num.length;i++){
// //     if(num[i]>max){
// //         max=num[i];
// //     }   
// // }
// // console.log(max);
// // pq1
// // let x=[10,100,100000,890000];
// // let y=x.every((el)=>{
// //     return el%10==0 ;
// // });
// // console.log(y);
// // pq2
// let x=num.reduce((rsl,el)=>{
//     if(rsl<el){
//         return rsl;
//     }else{
//         return el;
//     }
// });
// console.log(x);
// function sum(a,b=4){
//     return a+b;
// };
// let x=sum(1);
// console.log(x);
// let num=[1,75,3,100,98];
// console.log(num);
// console.log(...num);
// spread array
// let x=[1,2,3,4,5,6];
// let y=[0,9,8,7,5,4]
// let z=[...y,...x]
// console.log(z);
// console.log(...z);
// object spread
// const data={
//     name: "Alice",
//          marks: 85,
// };
// const datacopy ={...data,id:223};
// console.log(datacopy);
//array ko obj me kese badalte he
// let arr=[1,2,3,4,5]
// let obj1 = {...arr};
// console.log(obj1);
// let obj2 = {...'hello'};
// console.log(obj2);
//destructring
// let arr = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

// let [winner, runnerup, ...others] = arr;

// console.log(winner);     // "Alice"
// console.log(runnerup);   // "Bob"
// console.log(others);     // ["Charlie", "Diana", "Eve"]
// //destrucuring in object
// let arr=[1,2,3,4,5,6,7,8];
// let sum=0;
// let x = arr.forEach((el)=>{
// el=el*el;
// sum+=el;
// });
// let arr=[1,2,3];
// let sum =0;
// function avg(arr,sum){
//       let z= sum/arr.length;
//       console.log(z);
// }
// let x =function sumandsqare (arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i]*arr[i];
//         sum += arr[i];
//     }
//     console.log(sum);
//     avg(arr,sum)
// }
// let y= x(arr);
// let plus = arr.map((el)=>{
// el=el+5;
// return el;
// })
// console.log(plus);
// let arr1=['sradhaji','bjbhau'];
// let arr2=arr1.map((el)=>{
//     console.log(el);
//     return el.toUpperCase();
// });
// console.log(arr2);
// const students1 = [
//         {
//             name: "Alice",
//             marks: 85
//         },
//         {
//             name: "Bob",
//             marks: 92
//         },
//         {
//             name: "Charlie",
//             marks: 78
//         },
//         {
//             name: "Diana",
//             marks: 88
//         }
//     ];
//     const students2 = [
//         {
//             name: "Alice",
//             marks: 85
//         },
//         {
//             name: "Bob",
//             marks: 92
//         },
//         {
//             name: "Charlie",
//             marks: 78
//         },
//         {
//             name: "Diana",
//             marks: 88
//         }
//     ];
//     function megaobjects(...args){
//         let x =args.concat();
//        return x;
//     }
//     let y=megaobjects(students1,students2);
//     console.log(y);
// arr1=[1,8,0]
// function double(arr1,...args){
//     let x=args.map((el)=>{
//         return el*2;
//     })
//     return[...arr1,...x];
// }
// let w=double(arr1,8,9,7);
// console.log(w);
