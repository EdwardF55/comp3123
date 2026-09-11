//Defining object (literal)
let person = {
    name: "Jane",
    "Full Name": "Jane Doe", // You can use square brackets too.
    state: "Healthy",
    age: 24,
    null: null,
    undefined: undefined,

    displayInfo: function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, ...`)
    }, //Creates a function inside.
    displayArrow: () => {
        console.log(`Name: ${this.name}, Age: ${this.age}, ...`)
    }, //...and one with an Arrow. Note that it only reads whatever is inside for the context of the "this". Whatever that means.
}
console.log(person)
console.log(typeof person)
person.displayInfo();
person.displayArrow();

console.log(person.name)
console.log(person.null)
console.log(person["Full Name"]) //Gotta use the brackets for stringed names.
const fullname = "Full Name"
console.log(person[fullname]) //You can do this too using consts.

//This is a destructure.
const { name, state, age, null: n } = person //If you ever need a null or something, make sure to have it assigned with null:n, otherwise you get an unexpected token error.
//Remember: Key first, then the NEW Variable Name.
console.log(name, state, age, n)

//Additional Functions info
function printData(firstname, lastname, cityname) {
    this.name = firstname
    console.log(`this: ${this}, ${this.name}`) //Points at: SELF
    console.log(`First name: ${firstname}, Last name: ${lastname}, City name: ${cityname}`)

    console.log(arguments) //Prints arguments...?
    console.log(`arguments[0]: ${arguments[0]}, arguments[1]: ${arguments[1]}, arguments[2]: ${arguments[2]}`)
}
printData("John", "Doe", "New York")

let printDataArrow = (firstname, lastname, cityname) => {
    console.log(`First name: ${firstname}, Last name: ${lastname}, City name: ${cityname}`)
    //Attempting "console.log(arguments)" would result in an error due to not having an "arguments" in this arrow function.
}
printDataArrow("Pritesh", "Patel", "Toronto")