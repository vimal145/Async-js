//1. word vs keyword
//2. var let and const
//3. hoisting
//4. types in js -- primitives and reference
//5. conditionals -- if else else-if
//6. loop -- for while
//7. functions 
// 8. array 
// 9. push pop shift unshift




// 1. word vs keyword 
// chacha = word
// for, let , var  = keyword



//2. var let and const
// variable = it changes and constant = it doesnot changes



//3. hoisting
// variable and functions are hoisted which means their declaration in moved on the top of code
// desi bhasa me bole to we can access a variable before its declaration.

// undefined -- it means it exsist but currently we don't have its value
// not-defined -- it means it does not have its exsistence
//console.log(a);
//var a = 10;  // var a; a=10; and var a will be moved to the top so it will give undefined if we console.log this variable.



//4. types in js -- primitives and reference
// primitives = number , string , null , boolean , undefined
// reference = []   ()   {}    aisi koi bhi value jisko copy karne per real copy nhi hota balki us main value ka refrence paas ho jata
// use ham refrence value kahte hai aur jiska copy karne per real copy ho jata hai wo value primitive type value hoti hai
//eg---
// var a = [1,2,3,4,5];
// var b = a;
// b.pop();
// console.log(b);
// console.log(a);
// in the above example both a and b has been changed because b has the reference of a .




//5. conditionals if else else-if
// if(true);
// if(false);


//6. loop -- for while  (loop means repeat)
// for(var i=0; i<10; i++){
//     console.log(i);
// }
// var i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }


//7. functions 
// functions mainly 3 kaam ke liye use hota hai
// 1) jab aap apna code turant nhi chalana chate hai future me chalana chahte hai
// 2) jab aap apna code reuse karna chahte hai 
// 3) jab aap apna code baar baar different data ke saath chalana chahte hai
// function hellobolo(){
//     console.log("hello");
// }
// hellobolo();
// function differentData(a,b,c,d){
//     console.log(a,b,c);
//     console.log("this is d="+ d);
// }
// differentData(1,2,3,4);
// here above we are paasing arguments to the function and it will be recieved to the differentData() this paranthesis(parameter) and the we can print it.
// arguments = real value jo ham dete hai function chalate waqt
// parameters = variables jisme value store hoti hai arguments wali


// 8. array 
// var a = _[1,2,3,4,5,6,7,8] ;

// 9. push pop shift unshift splice
// var arr = [1,2,3,4,5,6,7,8] ;
// arr.push(9);  // add a value to last
// console.log(arr);
// arr.pop();       // remove a value from last
// console.log(arr);
// arr.unshift(0);  // add a value to first
// console.log(arr);
// arr.shift();     //remove a value from first
// console.log(arr);
// arr.splice(2,1);
// console.log(arr);  // remove your desired value by giving its index and count to element 



// 10. object
// ek se jada bande ki baat ki to hua array, ek hi bande ke bare me sari baat ki to hua object
// object means ek bande ki detail to hold karna in a key value pair
// i) blank object
// var a = {};
// ii) filled object
var a = {
    age: 20,
    name: "vimal",
    email: "hellovimal@gmail.com",
    mob: "0646463101",
    kuchbolo: function vimal(){
        console.log("vimal")
    }
}
console.log(a.name);
console.log(kuchbolo());
// props vs method
/// above age, name etc is a property but kuchbolo is a method(method means properties whose value is a function)


