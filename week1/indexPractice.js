console.log("Hello, world!");

var a = 100 // Flexible.
a = "Test"
console.log(a);

b = 200;
b = "Another test..."
console.log(b);

//What's ES6?
let c = 200
c = "Third test."
// let c = 400 // Already defined in the same "Scope."
console.log(c);

const x = 1234 // Re-defining the constant won't work. It's already a defined type.
console.log(x)

function testingLetConst(){
    const x = 550 //This is fine.
    let c = 250 //This is fine.
    console.log(`IN Block of C: ${c}`);
}
console.log(`OUT Block of C: ${c}`);

var flag = false
console.log(typeof a)
console.log(typeof b)
console.log(typeof flag)
console.log(typeof testingLetConst)

// Declaring functions via function expressions
let sayHello = function () {
    console.log("Hello World. Again.")
}
sayHello;

let greetings = () => {
    console.log("AAUUUUGH ARROW FUNCTION")
}
greetings;

// ARRAY TIME
let arr = [0, 1, 2, 3, 4, "STRING", null, false]
console.log(arr)
console.log(arr[4]) // To indiciate a specific part of the array. Zero indexed.
console.log(arr.length)

var emptyVar
console.log(emptyVar) //Returns Undefined.
console.log(typeof emptyVar)

let objectNull = null
console.log(objectNull) //returns Null
console.log(typeof objectNull) //returns Object?

let objectCity = {}
console.log(objectCity) //returns {}?
console.log(typeof objectCity) //returns Object?

//Creating, and then Modifying a list
let numbersSet = [1, 2, 3, 4, 5]
console.log(numbersSet)

let newNumbers = numbersSet.map((num) => num * 2)
console.log(newNumbers)

//Filtering via conditions
let evenNumbers = numbersSet.filter((n) => n % 2 === 0)
console.log(evenNumbers)

//Prints everything together in one value
let reduceNumbers = numbersSet.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(reduceNumbers)

//Mapping and interacting...
numbersSet.map((num) => num * 2)
    .forEach((num) => console.log(num))

const outNumberSet = numbersSet.map((num) => num * 2)
    .filter((n) => n > 2)
console.log(outNumberSet)

//...I think this is everything?