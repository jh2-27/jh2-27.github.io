const myHeading = document.querySelector("h1");
console.log(myHeading);
//myHeading.textContent = "Hello world!";
let today = new Date();
console.log(today);
myHeading.textContent = today.toDateString();