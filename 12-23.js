// 2021.12.23 (LIVE SESSION - LOOPS)

let myNumber = 5;
myNumber += 2; // 7
myNumber++; // +1 = 6
myNumber--; // -1 = 4
console.log(myNumber);


let myName = "Elif";
myName = myName + "Balci";
console.log(myName); // Elif Balci


// while and for LOOPS
let counter = 0;
while(counter<10){
    counter++;
    console.log(counter);
} // 1 ~ 15

let counter = 100;
while(counter>1){
    counter--;
    console.log("Now " + counter + " left");
} // 99 ~ 1 

let counter = 99;
while(counter>1){
    console.log("Now " + counter + " left");
    counter--;
} // 99 ~ 1 



let guess = prompt("Enter a number")
// console.log(guess);
if (guess===10){
    alert("That's correct");
} else {
    while(guess != 10) {
        if(guess>10){
            alert("Enter a lower number");
        } else if (guess<10){
            alert("Enter a higher number");
        } else if (guess==10) {
            alert("that is correct");
        }
        guess = prompt("Enter a number");
    }
}



for(let counter=0; counter<10; counter++){
    console.log(counter);
} // 0 - 9

for(let i=0; i<10; i++){
    console.log(i);
} // 0 - 9

/*------------------------------------------*/
let budget = 500;
let dinner = 22;
let dinnerNumber = Math.floor(budget/dinner);
// console.log(dinnerNumber);

for(let i=1; i<=dinnerNumber; i++) {
    console.log("Remaining budget = " + (budget-(dinner*i)));
    let remaining = budget - (dinner*i);
    if(remaining < dinner){
        console.log("Sorry, you can't eat anymore.");
    }
}


let number = 40; 
for(let i=50; i>10; i-=5){
    console.log(i);
} // 50 45 40 35 30 25 20 15