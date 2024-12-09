const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // database calls , cryptography , network 
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
}) 

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "vimal", email: "vimalranan581@gmail.com"});
    },1000);
})
promiseThree.then(function(user){
    console.log(user);  /// yaha hamko .then me... user me uper ka jo data resolve me hai wo mil jayega
})


const promiseFour = new Promise(function(resolve, reject){
    let error = true;
    if(!error){
        resolve({username:"vimal",password:"1234"})
    }
    else{
        reject('ERROR: SOMETHING WENT WRONG');
    }
},1000)
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>{ 
    console.log(err)
}).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    let error = true;
    if(!error){
        resolve({username:"Javascript",password:"123456789"})
    }
    else{
        reject('ERROR: JS WENT WRONG');
    }
},1000)

async function consumePromiseFive () {
    try{
        const response = await promiseFive
        console.log(response)
    }catch(err){
        console.log(err);
    }
}
consumePromiseFive();

// async function getAllUsers (){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//          console.log(data);
//     } catch (error) {
//         console.log("E:", error); 
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))