// In this project, we'll add the JavaScript code that changes label, color, 
// and image variables depending on the selected mode.
// We've already initialized the variables with some default values, 
// what's left is for you to conditionally update them. Take a look before you continue.

// 1) mode will help us switch between the dark, light, and ninja modes that define the look.
// 2) color saves the background color for a mode.
// 3) image saves the path to the image that'll display in a certain mode.
// 4) label informs the user what mode they're currently using.

var mode = "light"; // or "ninja"
var color = "ghostWhite";
var image = "/img/light-icon.png";
var label = "Light Mode";

if (mode === "dark") {
  color = "darkSlateBlue";
  image = "/img/dark-icon.png";
  label = "Dark Mode";
} else if (mode === "light") {
  color = "ghostWhite";
  image = "/img/light-icon.png";
  label = "Light Mode";
} else {
  color = "dimGray";
  image = "/img/ninja-icon.png";
  label = "Ninja Mode";
}
console.log(label);