//how to use async and await in javascript

// Example of using async and await in JavaScript   

//let response =fetch('https://jsonplaceholder.typicode.com/posts/1');
//console.log(response);
// promies has only three states pending, resolved and rejected.
// to handle promies we have to use .then() and .catch methods
// then works if promise is resolved and catch works if promise is rejected
//Arrow functions -> arrow functions are a shorter syntax for writing functions in JavaScript.
//async and await -> async and await are used to handle asynchronous operations in a more readable way.
//what is asynchronous operation -> an asynchronous operation is one that does not block the execution of other operations while it is being performed.
//what is async function -> an async function is a function that is declared with the async keyword. It always returns a promise.
// what is await -> await is used to wait for a promise to be resolved or rejected. It can only be used inside an async function.
//so .then will wait for the promise like await then when the promise is resolved it will give the resonse if it's not it will rejected
// so basically await and then does the same work but await is more readable and easier to understand.

//example of arrow function
const arrowfunc=(name)=>{
    console.log("this is an arrow function"+ name);
}

let promise=new Promise((resolve,reject)=>{
    let state=true;
    if(state){
        resolve("promimse is resolved");
    }   
    else{
        reject("promise is rejected");
    }
});

async function asyncFunction(){
    try{
        let result=await promise;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
asyncFunction();
arrowfunc("hey there");

let response;
let data;
async function fetchAPI(postid){
try{
    response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
    data=await response.json();
    const title=data.title;
    console.log(title);
    
}
catch(error){
    console.log(error);
}
}
fetchAPI(1);

async function fetchuser(userId){
    try{
        let response=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let data=await response.json();
        return data;
        console.log(userId +":"+ data.name);
    }
    catch(error){
        console.log(error);
    }
}



/*('https://jsonplaceholder.typicode.com/posts/1')
.then(respone=>respone.json())
.then(data=>console.log(data))
.catch(error=>console.log(error)); */

fetch('https://jsonplaceholder.typicode.com/posts/99').then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error.message));

async function getapi(){
    try{
        let response= await fetch('http://localhost:3000/');
        let data=await response.text();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

getapi();


fetch('http://localhost:3000/post',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({   
        title:'foo',
        body:'bar',
        userId:1
    }),
})
.then(response=>response.text())
.then(data=>console.log(data))
.catch(error=>console.log(error));  

//put call
fetch('http:localhost:3000/put',{
    method:'PUT',
    headers:{
        'Content-Type' : 'application/json'
    },
    body:JSON.stringify({
        id:1,
        title:'foo',
        body:'bar',
        userId:1
    }),
})
.then(response=>response.text())
.then(data=>console.log(data))
.catch(error=>console.log(error));






