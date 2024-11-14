// function hello(){
//     console.log("hello");

// }
// hello();
// function printname(){
//     console.log("a");
// }
// printname();
// function x(){
//     for(i=0;i<=5;i++){
//         console.log(i);
//     }
// }
// x();
// function printname(){
//     console.log("gullu");
// }
// printname();
// function roll(){
//     let x=Math.floor(Math.random()*6)+1;
//     console.log(x);
// }
// roll();
// roll();
// roll();
// roll();
// function printname(name ,age){
//     console.log(`${name} ka age is ${age}`);
// }
// printname("sradhaji",23);
// function sum(number1,number2){
//     console.log(`sum of both the no is ${Number(number1) + Number(number2)}`);

// }
// sum(prompt("enter 1st"),prompt("enter 2 nd"));
// function avg(n1,n2,n3){
//     console.log(`avg of the 3 numbers are ${(Number(n1)+Number(n2)+Number(n3))/3}`);
// }
// avg(1,2,3);
// function mtable(n){
//     for(let i=0;i<=10;i++){
//         console.log(`${n}*${i}=${n*i}`);
//     }
// }
// mtable(prompt("give me a number and i will give you mtable"));
// return values
// function sum(n1,n2){
//     return(n1+n2);
// }
// let s=sum(2,3);
// console.log(s);
// // we can also write it as
// console.log(sum(2,3));
// // arguments ko ese bhi pass kiya ja skata hai like
// let m=sum(sum(1,2),3);
// console.log(m);
// function sum(n1,n2){
//     return(n1+n2);
//     console.log('d');//return hela pare return pare jo sabu code thae execute hueni se guda jemiti ehi code snippet
//     console.log('f')
// }
// let s=sum(2,3);
// console.log(s)
// function x(n){
//     let sum =0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
        
//     }
//     console.log(sum);
// }
// x(4);
// passing array to a function
// let str=['a','b','c'];
// function concatinate(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         result += str[i];
//     }
//     return(result);
// }
// let x=concatinate(str);
// console.log(x);
// function expression
// function ko ek variable re store kariba jemitiki function ku call karahauthila semiti hin variable ku call kariba
// let x=function(n1,n2){
// let sum=n1*n2;
// return sum;
// }
// console.log(x(1,2));
// x=function(n1,n2){
//     let sum=n1%n2;
//     return sum;
//     }
//     console.log(x(1,2));//jo jo property veriable re thila jemiti pare variable change heijauthila se guda ethi bhi applicable
//higher order functions
// function multigreet(func,n){
//     for(i=0;i<=n;i++){
//         func();
//     }
// }

// let greet=function(){
//     console.log("hi");
// }
// multigreet(greet,4)

//refer to lecture
// const calculat={
//     add(a,b){
//         return a+b ;
//     },
//     min(a,b){
//         return a-b ;
//     },
//     mul(a,b){
//         return a*b ;
//     },
//       num:55
// }
//higher order functions
// function oddevenTest(request){
//     if(request == 'odd'){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }else if(request == 'even'){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     }
// }
// let request="even";
// let x=oddevenTest(request);
// Let's dry run the function with request = "even" and input 3.

// Step-by-Step Dry Run
// Initial Variables:

// request = "even"
// Input n = 3
// Call to oddevenTest(request):

// We pass request = "even" to the function oddevenTest.
// The function checks the condition if(request == 'odd'), which is false since request = "even".
// It moves to the else if(request == 'even') block, which is true, so it returns the following function:
// javascript
// Copy code
// function(n){
//     console.log(n % 2 == 0);
// }
// This function checks if a number is even and logs the result.

// Assign to x:

// The function returned from oddevenTest(request) is assigned to the variable x.
// Calling x(3):

// Now, the function stored in x is called with the input 3.
// Inside the function:
// It checks if 3 % 2 == 0, which evaluates to false.
// The result false is logged to the console.
// Final Output:
// The function will log false since 3 is an odd number, and we are checking if it's even.






// You said:
// when i write x(3) what does it means
// ChatGPT said:
// ChatGPT
// When you write x(3), it means that you're calling the function stored in the variable x and passing the argument 3 to it.

// Here’s a breakdown:

// Assignment of x:
// When you write let x = oddevenTest(request);, the function oddevenTest(request) is called with request = "even". This returns a new function based on the condition inside oddevenTest.

// In this case, the function returned is:

// javascript
// Copy code
// function(n) {
//     console.log(n % 2 == 0);
// }
// Storing the Function in x:
// The returned function is stored in the variable x. So, x is now a reference to this function.

// Calling x(3):

// Writing x(3) means you're calling the function stored in x and passing the argument 3 to it.
// Inside the function x, the parameter n gets the value 3.
// The function then checks if n % 2 == 0 (which checks if 3 is even) and logs the result to the console.
// Summary:
// x(3) is calling the function stored in x, passing 3 as an argument, and executing the logic inside that function.






// You said:
// ok tell me one thing in a function in general case the format is function name(n)and i call this by name(n)right but here when i write x(3) i know i pass te value 3 but is there somethnf here to reciver that value
// ChatGPT said:
// ChatGPT
// Yes, in the case of x(3), there is something in the function to receive the value you're passing—this "something" is the parameter in the function definition.

// Here's how it works:

// General Case of a Function:

// javascript
// Copy code
// function functionName(n) {
//     // Do something with n
// }
// Here, n is the parameter of the function.
// When you call the function with functionName(3), the value 3 is passed to n.
// Inside the function, n will hold the value 3.
// In Your Example with x(3):

// Let's break it down:

// javascript
// Copy code
// function oddevenTest(request) {
//     if (request == 'odd') {
//         return function(n) {      // This is the inner function
//             console.log(!(n % 2 == 0));
//         };
//     } else if (request == 'even') {
//         return function(n) {      // This is the inner function
//             console.log(n % 2 == 0);
//         };
//     }
// }
// When you call oddevenTest(request), it returns an inner function.
// The inner function has a parameter n, which is the placeholder to receive any value passed to it when the function is called.
// When You Assign and Call x(3):

// let x = oddevenTest("even");
// This returns the function:

// javascript
// Copy code
// function(n) {
//     console.log(n % 2 == 0);
// }
// and assigns it to x.

// When you call x(3), you're actually calling:

// javascript
// Copy code
// function(3) {
//     console.log(3 % 2 == 0);
// }
// Here, the parameter n in the inner function receives the value 3. So n acts as the receiver of the value 3.

// Summary:
// In x(3), the 3 is passed to the function stored in x.
// The parameter n in that function receives the value 3.
// So, in this case, n is the "something" that receives the value passed when you call x(3).
