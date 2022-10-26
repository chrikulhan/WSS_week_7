// Callbacks, Promises and API Calls
//
// More JS: Callbacks, Promises and Arrow Functions
// API calls in the browser

// Code examples
//
// https://github.com/claraj/week6-examples

//Javascript callbacks
//-when you have a function and give it another function
//as one of it's arguments

//Promises and the arrow function notation
// = another way of writing code that does the same
// thing as javascript callbacks

//Use these tools to make API calls from a browser

//What's an API call?
//-a request to another server to get some data
// (like weather data, where's the international space station, can be used on your webpage.)
//code examples: https://github.com/claraj/week6-examples

let animals = ['Giraffe', 'Elephant', 'Yak']

//this function will be called for each item in the array in turn:
//the function will be called for giraffe, then elephant, etc.
animals.forEach(function(animal){
    console.log(animal)
})
//output:
// Giraffe
// Elephant
// Yak

//Callback function can have an optional extra argument:
animals.forEach(function(animal, index){ //index =(where are you in the array?)
    console.log(animal, index)
})
//output:
// Giraffe 0
// Elephant 1
// Yak 2



    // (element,index){
//     console.log(`Animal number ${index} is ${element}`)
// })
//output:
// Animal number 0 is Giraffe
// Animal number 1 is Elephant
// Animal number 2 is Yak

/*Another way to write this code vvv using the arrow notation (below)*/
// animals.forEach(function(animal, index){ //index =(where are you in the array?)
//     console.log(animal, index)
// })
//output:
// Giraffe 0
// Elephant 1
// Yak 2

//Arrow notation:
animals.forEach((animal, index) => {
    console.log(animal,index)
})
//output:
// Giraffe 0
// Elephant 1
// Yak 2

//another way to make the code even more minimal
// (if only one line of code, you can omit the curly braces: )
animals.forEach((animal, index) =>
    console.log(animal,index)
)
// output:
// Giraffe 0
// Elephant 1
// Yak 2

//can write the code all on one line:
animals.forEach((animal, index) => console.log(animal,index))

//another variant-if we only need to know the data, but not the index:
//regular callback function:
animals.forEach(function(animal){
    console.log(animal)
})
//output:
// Giraffe
// Elephant
// Yak

//shortened arrow version:
animals.forEach((animal) => {
    console.log (animal)
})

//output:
// Giraffe
// Elephant
// Yak

//even more simple, but only works with ONE line of code

// (delete curly braces):
animals.forEach((animal) =>
    console.log (animal))

// (move all on one line)
animals.forEach((animal) => console.log (animal))

// (if there is only one argument, can omit the parentheses as well:
animals.forEach(animal => console.log (animal))