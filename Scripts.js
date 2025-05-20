/*alert("Hello world");*/
/*
console.log("Hello world")
confirm("Are you sure to continue?: ");*/
/*var age=prompt("Type your age: ");
if(age>18){
    alert("Is an adult");
}
else{
    alert("Is underage");
}*/
//Sphere Volume program:
/*
const pi=3.141592
var radius=prompt("Type the radius: ");
if (radius<0){
    alert("Please type a positive value.")
}
else{
    var volume=(4/3)*(pi)*(radius**3);
    alert(volume);
}*/
/*
var number=prompt("Type the number");
if(number<0){
    alert("This number is negative")
}
else if (number>0){
    alert("This number is positive")
}
else{
    alert("This number is zero");
}
*/
/*
var score=prompt("Type the student score")
if(score<70){
    alert("The student failed")
}
else if (score>70){
    alert("The student approved")
}
else{
    alert("Student approved")
};
*/
/*
var price=prompt("Type the total cost of the products")
if{ var price
    alert(price)
}

else if(price>100)(-20% + price)
    alert
*/
/*
var limit=prompt("Type the limit: ");
let i=0;
for(i=2;i<=limit;1++){
    console.log(i);
}
*/
//With For Statement:
/*
let i=0
var limit=prompt("Type the limit until you want the numbers intevarl: ")
for(i=3;i<=limit;i++){
    console.log(i);
}
let x=3
var limit=prompt("Type the limit until you want the numbers interval: ")
while(x<=limit){
    console.log(x);
    x=x+3;
}*/
function sendMail(){
    document.getElementById("mailsuccess").innerHTML="Thanks for confirm of your mail."
}
function guessNumber(number, random) {
    if (number >= 0 && number <= 100) {
        if (number == random) {
            document.getElementById("answer").innerHTML = "Congrats! This is the number!"
        }
        else {
            document.getElementById("answer").innerHTML = "Oh no! Is not the number. Try Again.";
        }
    }
    else {
        document.getElementById("answer").innerHTML = "Please, type a valid number.";
    }
}