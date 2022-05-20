// (CONDITIONALS) purple challenge 6/10
// First, inside the for loop and below the number variable, 
// write an if statement that checks if the number in the array is greater than the max.
// If the number is greater than the max, the program should update the max variable to the value of number.
var numbers = [38, 28, 34, 29, 93, 19];
var max = 0;
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > max) { //
    max = number; //
    console.log(number); //
  }
}
console.log(max);


/*-------------------------------------*/ 
// (CONDITIONALS) purple challenge 7/10
// Write an if-else statement that checks whether there is fireDanger and if so, 
// logs a message similar to "There is a wildfire advisory today!". Otherwise, under all other conditions, 
// the program should log a message similar to "No wildfire advisory, enjoy your visit!".
var temp = 95;
var humidity = .15;
var fireDanger = (temp > 90 && humidity < 0.1);

if (temp > fireDanger && humidity < fireDanger) {
  console.log("Wildfire advisory, no visit!");
} else {
  console.log("No wildfire advisory, enjoy your visit!");
}


/*-------------------------------------*/
// (CONDITIONALS) purple challenge 8/10
// Complete the grade classifier using if and else-if statements using the below comparisons:
// grade < 60: F
// grade < 80: C
// grade < 90: B
// grade < 100: A
// First, write an if statement that first checks if the student failed.
// Next, chain else-if statements onto the if statement to check for the remaining letter grades.
var grades = [76, 78, 85, 93, 99];
for (var i = 0; i < grades.length; i++) {
  var grade = grades[i]; // 
  if (grade < 60) {
    console.log("pupil received");
  } else if (grade < 60) {
    console.log("F");
  } else if (grade < 80) {
    console.log("C");
  } else if (grade < 90) {
    console.log("B");
  } else if (grade < 100) {
    console.log("A");
  }
} // C C B A A 


/*-------------------------------------*/
// (CONDITIONALS) purple challenge 9/10
// Write an if statement that logs the number and whether it is odd or even. 
// You may use the % operator (modulus) to determine whether division by 2 yields a remainder. 
// Inside the if condition, check if the number divided by 2 with the modulus operator results in the value of 0.
for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
// 0 is even
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// 6 is even
// 7 is odd
// 8 is even
// 9 is odd
// 10 is even


/*-------------------------------------*/
// (CONDITIONALS) purple challenge 10/10
var order_time = 8;
var no_of_cookies = 12;
if (order_time < 9) {
  if (no_of_cookies === 6) {
    console.log("$12");
  } else if (no_of_cookies === 12) {
    console.log("$18");
  } else {
    console.log("Please order either a half or full dozen.");
  }
} else {
  if (no_of_cookies === 6) {
    console.log("$15");
  } else if (no_of_cookies === 12) {
    console.log("$25");
  } else {
    console.log("Please order either a half or full dozen.");
  }
}