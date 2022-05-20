var message = "";
var language = "German";
if (language === "English") {
  message = "Thank you";
  console.log(message);
} else if (language === "Spanish") {
  message = "Gracias";
  console.log(message);
} else if (language === "German") {
  message = "Danke";
  console.log(message);
} else {
  message = "We don't support " + language;
  console.log(message);
}