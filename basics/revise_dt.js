//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "pallavi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//Stack memory(Primitive datatype)
//heap memory(non Primitive datatype)

let myName="pallavi Agrahari";

let anothername=myName;
anothername="abc";
console.log(myName);
console.log(anothername);

let user1={
    email:"user@google.com",
    upi:"user@ybl"
}

let user2=user1;
user2.email="pallavi@gmai.com";

console.log(user2.email);
console.log(user1.email);
