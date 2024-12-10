let a = 5

// if(a == 2){
//     console.log(a**3)
// } else if(a == 5){
//     console.log(a++)
// } else if(a == 9){
//     console.log(a - 1)
// } else {
//     console.log("none is indicated")
// }


// Ternary Operator
a == 2 ? console.log(a**3) : a ==5 ? console.log(a*10) : a == 9 ? console.log(a - 1) : console.log("none is indicated")


let person = "Male"

switch(person){
    case "Male":
        console.log("This is a male gender")
        break
    case "Female":
        console.log("This is a female gender")
        break
    case "Other" :
    console.log("This does not fall under male or female")    
}