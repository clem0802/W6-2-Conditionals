// values like "true" are called "conditions"
// statements relying on conditions are called "conditionals"
// conditions decide if the code runs or gets skipped
// they come in between parentheses


// 2021.12.22 (LIVE SESSION - CONDITIONALS)
// RANDOM numbers
// older than 18 they can drive
// between 16 and 18 they can drive with an adult present
// younger than 16 they cannot drive at all
const age = Math.random()*100;
if (age > 18) {
    console.log("they can drive");
} else if (age >= 16 && age <= 18) {
    console.log("they can drive with an adult present");
} else {
    console.log("they cannot drive at all");
}


/*------------------------------------*/
// SWITCH code reads the whole thing
const color = "blue";
switch(color){
    case "pink":
    console.log("nice");
    break; // if true, STOP, don't run anymore the code
    case "purple":
    console.log("ok");
    break;
    case "red":
    console.log("bad");
    break;
    default:
    console.log("any color"); // output this
} 


/*------------------------------------*/
// with "PROMPT"
const food = prompt("taste of the food");
switch(food){
    case "spicy":
    console.log("I will not eat it");
    break; 
    case "sour":
    console.log("I like it");
    break;
    case "sweet":
    console.log("not healthy");
    break;
    default: // no "break" after "default"
    console.log("this is not food"); 
} 


/*------------------------------------*/
// TERNARY operators
const number = 11;
number>10 ? console.log("bigger than 10") : console.log("smaller than 10");
// ? => if true
// : => else


const color = "pink";
color==="pink" ? console.log("pink") :
color==="purple" ? console.log("purple") :
console.log("any color");


const myName = "Elif";
// if (myName==="Elif"){
//     console.log("you are an instructor");
// } else if (myName==="Peter"){
//     console.log("you are a student");
// } else{
//     console.log("I don't know you");
// }
myName==="Elif" ? console.log("you are an instructor") :
myName==="Peter" ? console.log("you are a student") :
console.log("i don't know who you are");


/*------------------------------------*/
var points = 7600;
var pointsNeeded = 8000;
if (points >= pointsNeeded) {
 console.log("You're Level 2!");
} else {
 var left = pointsNeeded - points;
 console.log("You need " + left + " points to get to Level 2");
}
// You need 400 points to get to Level 2 (output)


