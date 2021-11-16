//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

Object.values(person3).forEach(element =>{
    console.log(element)
})

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    printInfo(){
        return `Name: ${this.name}\nAge: ${this.age}`
    }
    addAge(increase){
        return this.age + increase
    }
}

let timmah = new Person('Timmah', 10)
let cartman = new Person('Eric Cartman', 10)
console.log(timmah.printInfo())
console.log(cartman.printInfo())
console.log(timmah.addAge(3))

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord  = string => {
    return new Promise( (resolve,reject) => {
        if(string.length > 10){
            resolve('Big Word')
        } else {
            reject('Small Word')
        }
    })
}

isBigWord('shenanigans')
.then( (result) => {
    console.log(result)
})
.catch( (error) => {
    console.log(error)
})

isBigWord('test')
.then( (result) => {
    console.log(result)
})
.catch( (error) => {
    console.log(error)
})

// =============Exercise #4 ============//
// code wars problem 1
// translate a string into pig latin

function pigLatin(string){
    let pigString = ""
    let split = string.split(' ')
    split.forEach(word => {
        pigString = pigString + word.slice(1) + word[0] + 'ay ' 
    })
    return pigString
}

console.log(pigLatin('a big bear'))

// =============Exercise #5 ============//
// code wars problem 2
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highLow(string){
    let numList = string.split(' ')
    numList.sort(function(a,b){return a-b})
    return `${numList[numList.length - 1]} ${numList[0]}`
}

console.log(highLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

// extra //
// code wars problem 3
/* You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
    let evenOdd = []
    let numSave = 0
    for (let i = 0; i < 3; i++){
        if (Math.abs(integers[i]) % 2 == 0){
            evenOdd.push('even')
        } else {
            evenOdd.push('odd')
        }
    }
    if (evenOdd.filter(word => word == 'odd').length > evenOdd.filter(word => word == 'even').length){
        for(let i = 0; i < integers.length; i++){
            if (Math.abs(integers[i]) % 2 == 0){
                return integers[i]
            } else {}
        }
    } else {
        for(let i = 0; i < integers.length; i++){
            if (Math.abs(integers[i]) % 2 == 1){
                return integers[i]
            } else {}
        }
    }
  }

  console.log(findOutlier([1,2,3]))
  console.log(findOutlier([2,6,8,10,3]))
  console.log(findOutlier([137028066,-23357110,-59627212,1012722,108282346,-55051086,-110537451,60756412,-191248586,26191416,-22776266,180484394,-82064494,189415712,62553262]))

