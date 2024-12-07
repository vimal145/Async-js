//1.  what is higher order function

// higher order functions are the function that accepts a function in a parameter or return a function or both
// for eg- forEach is a higher order function cause it takes another function inside it
 

//1st way 
// function abcd(val){

// }
// abcd(function(){});

// 2nd way
// function abcd(){
    
//     return function(){};
// }
// aisa function jo accept kar le ek aur function ya phir return kr de ek aur function


// 2nd == constructor function

// normal funtion jisme this ka istemal ho aur aap jise call krte waqt new keyword ka istemal kare 

// function saanchaOfBiscuit(){
//     this.width = 12;
//     this.height = 22;
//     this.color = "brown";
//     this.taste = "sugary";
// }

// var bis1 = new saanchaOfBiscuit();
// var bis2 = new saanchaOfBiscuit();
// var bis3 = new saanchaOfBiscuit();
 
// console.log(bis1);
// console.log(bis2);
// console.log(bis3);

// jab apke paas aisa mauka ho ki apko ek jaisi properties wale bohot sare elements bnanane hai tab constructor function use kr skte hai

// function circularButtonBanao (color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.presable = true;
// }

// var redBtn = new circularButtonBanao("red");
// var blueBtn = new circularButtonBanao("blue");

// console.log(redBtn);
// console.log(blueBtn);

// 3. firsst class function
// aise functions jo ki normal values ya phir variables ki tarah treat kiye ja sake unhe first class functions kehte hai
// var abcd = function(){

// }

// 4. new keyword
//  new keyword sunte hi mn me ek blank object bna lo 
// new keyword creates a blank object for the constructor function which is getting called just after new keyword

//5. iife -- imediately invoked function expression 
// iife hai funtionn ko turant chalane ki kla, is tareeke se ki ham log koi private variable bna paye
// e.g--
// var ans = (function(){
//     var privateVal = 12;

//     return {
//         getter: function(){
//             console.log(privateVal);
//         },
//         setter: function(val){
//             privateVal = val ;
//         }
//     };
// })();
// ans.getter();
// ans.setter(24);
// ans.getter();
// agar hamko koi value private rakhna hai to usko ham iife ke andar rakhenge jisse wo value access nhi ho payegi per agar hamko fir bhi value access karna hai to ham usko getter me daal ke return kar denge // jisse ham use bahar bhi access kar skte hai...aur setter ke madad se ham us private value ko change bhi kar skte hai


// 6. prototype -- we can see this in brownser
// whenever we create an object there automatically exist an prototype which contains some helper function .


// 7. prototype inheritence -- 
// inheritence means passing parents features to child, to do the same thing in javascript with the help of prototype is called prototype inheritance

// var human = {
//     name: "vimal",
//     canFly: false,
//     canTalk: true,
//     willDie: true
// }
// var sheryiansStudent = {
//     solveJsQuestions: true,
//     createModernWebsite: true
// }
// sheryiansStudent.__proto__ = human;
// console.log(sheryiansStudent);

// 8. this keyword 
// this is a special type of keyword that changes its value according to its use 
// jab bhi koi cheez {} bracket ke andar nhi hoti hai to ham use global scope kehte hai 

// in global scope 
// console.log(this) --- gives --- window

// in function scope 
// function abcd (){
//     console.log(this);  --- gives ---- window
// }

// in method scope ---- a function inside an object is method
// var abcd = {
//     baatKaro : function(){  ----- method ke andar this ki value object hoti hai 
//         console.log(this);
//     }
// }

// IMPORTANT -- in any method , "this" keyword always refers to its parent object

// this in case of eventListner
// var button = document.querySelector("button");
// button.addEventListener("click",function(){
//     console.log(this);
// });
//  here , "this" refer to button...... it means in case of event listner this will refer to the value written before addEventListner.

// 9. call apply bind == agar tumhare paas koi function hai aur koi object hai aur tumhe function chalana hai aur by default this ki value window hai use window na rakh kar point karwana hai kisi object ki taraf 

// function abcd (val,val2,val3){
//     console.log(this.name,val,val2,val3);
// }

// var obj = { name: "vimal",age:44};

// abcd.call(obj,2,3,5);

// 10. apply -- aply is same as call but here we pass an array to give arguments for the parameter

// function abcd (val,val2,val3){
//     console.log(this.type,val,val2,val3);
// }
// var obj = {
//     name: "maruti",
//     type: "car",
//     class: "middle",
//     price: 400000
// }
// abcd.apply(obj,[3,55,6]);

// 11. bind 

// function abcd (){
//     console.log(this);
// }
// var obj = {
//     name: "maruti",
//     type: "car",
//     class: "middle",
//     price: 400000
// }
// var bindedfnc =abcd.bind(obj);
// bindedfnc();

// 12. what is pure function and impure function

// pure function -- a funtion which gives same output for same input is a pure funtion

// function abcd(val){
//     return val+2;
// }
// var ans1 = abcd(3);
// var ans2 = abcd(5);
// console.log(ans1,ans2);

// impure function -- a function which give different output for same input is a impure funtion
                    //   it will never change/update the value of a global variable
// function abcd(val){
//     return Math.random()*val;
// }
// var ans1 = abcd(3);
// var ans2 = abcd(3);

// console.log(ans1,ans2);