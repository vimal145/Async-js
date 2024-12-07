// 1.  the difference between var let and const,, their differences and window object

// var old js me tha
// var function scoped hai -- var apne parent function me kahi bhi use ho skta hai
// var adds itself to the window object 

// function abcd(){
//     for(var i=1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);   // here it will not give error because it is fucntion scoped
// }
// abcd();

// let and const new js me aaya hai
// let braces scoped hota hai     
// let doesn't adds itself to the window object

// function abcd (){
//     for (let i = 0; i < 12; i++) {
//         console.log(i);
//     }
//     console.log(i);  // here it will give error because i is bracess scoped 
// }

// js me bohot sare aise features hai jise ham use kar skte hai per wo js me nhi balki windows me hai. jise ham dhund skte hai 
// ek particular object me jiska naam window hai
// window have a number of features that js uses . is called window 



// 2. Heap memory
// jitne bhi variable ya data ham banate hai unhe kahi na kahi store to karna padta hai use ham kehte hai 
// heap memory


// 3. execution context 
// jab bhi ham koi bhi function chalayenge function apna khud ka ek imaginary container bna lega 
// jisme uski 3 cheeze hogi
// execution context is a container which is created when function is called and it  contains 3 things -- 
// 1. variables
// 2. functions inside parent function
// 3. lexical enviroment of that function

// lexical enviroment -- ye ek chart hota hai jisme ye lika hota hai ki funtion kin chizo ko access kr skta hai aur kin chizo ko nhi, mtalb ki it holds its scope and scope cha



// how to copy refrence value 
// var a = [1,2,3,4,5];
// var b = [...a];   (the triple dot is spread operator , here the value of a will be copied to b)
// b.pop();
// console.log(a)
// console.log(b)

// var obj = {
//     name: "vimal",
//     age: 21,
//     college: "Ramgarh engineering college",
//     branch: "CSE",
//     salary: 50000
// }
// var copyobj = {...obj};
// console.log(obj)       
// console.log(copyobj)


// truthy and falsy
// js me kuch bhi likho wo mainly 2 me se ek prakaar se belong karti hai
// falsy values yeh hai = 0 false null undefined NaN document.all
// truthy values == all values except above
// if(5){
//     console.log("hey");
// }else{
//     console.log("hello");
// }


// switch
// switch(){
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
// }


// foreach loop--- foreach loop sirf array pe kaam karta jab bhi hamare paas ek array hota hai tab ham foreach ka use krte hai

// var a = [2,43,34,53,3,4,5,4,6,67,3,44,3,7,8,];

// a.forEach(function(val){
//     console.log(val+2);   // yaha per function(val) me val me ek ek karke array ki value recieve hogi aur ham function ke andar uska use apne hisab se kar skte hai 
// })
// for each kabhi bhi default ya original array me change nhi karta hai ye sirf us array ke temporary copy me changes karta hai jisse original array hamesha same rehta hai.


// for in loop
// objects per loop karne ke liye for in loopp use kiya jata hai

// var obj = {
//     name: "vimal",
//     age: 22,
//     salary:40000
// }
// for (var key in obj){
//     // console.log(key,obj[key]);
//     // console.log(obj)
// }

// do while
// var a = 20;
// do{
//     console.log("hey");
//     a++;
// }
// while(a<10)

// callback function
// aisa code jo baad me chalta hai , ham use time deke rok skte hai

// setTimeout(function(){
//     console.log("vimal");
// },2000);


// first class funtion
// js ek concept hai jiska matlab hai ki ham function ko as a value use kr skte hai

// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hello");});

// how arrays are made behind the scenes , and -ve indexs of array
// arrays are objects behind the scenes , js make arrays as objects thats why here -ve indexes can also exist
// var a = [32,42,1];
// // behind the scene 
// a[-1]=2
// var a = {
//     0:32,
//     1:42,
//     2:1,
// }
// console.log(a)


// how to know that it is array or object
// Array.isArray([]); // true
// Array.isArray({}); // false 

// how to delete a property from an object

var a = {
    name:"vimal",
    age:30,
    salary:20000,
}
delete a.age;
// console.log(a);

var anotherA = {
    name: "sara",
    dob: "00-00-00",
    salary: 32000,
    accountNo: 9949042240850,
    studentId: 3490009,
}   
console.log(anotherA);
delete anotherA.name;
console.log(anotherA);

var studentData = {
    name: "jhon doe",
    studnetId: 22033440103,
    registrationNo: 2090390381045,
    department: "CSE",
    semester: "3rd"
}







