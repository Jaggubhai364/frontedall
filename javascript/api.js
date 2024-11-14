let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log('data 1',data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log('data 2',data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
// }
// ) 
// console.log('sweet')


async function getfacts() {
    try {
        let res = await fetch(url);
        let body = await res.json();
        console.log('data 1:', body.fact);

        let res2 = await fetch(url);
        let body2 = await res2.json();
        console.log('data 2:', body2.fact);
    } catch (error) {
        console.log('Error:', error);
    }
}

console.log('sweet');
getfacts();

