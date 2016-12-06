/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.
document.getElementById('q1').innerHTML = "JS Page is Connected Properly";
document.getElementById('q1').classList.add("status-good");



// When the JS is connected properly, the following code will update the status message.



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.
var feelings = "These are really good learning materials";
document.getElementById("q2").innerHTML = feelings;





// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.
var name = "Erica";
var message = "Hello my name is ";
var greeting = message + name;
document.getElementById('q3').innerHTML = greeting;






// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var x = 12;
var y = 2;

var add = x + y;
document.getElementById('q4a').innerHTML = add;

var subtract = x -y;
document.getElementById('q4b').innerHTML = subtract;

var multiply = x * y;
document.getElementById('q4c').innerHTML = multiply;

var divide = x/y;
document.getElementById('q4d').innerHTML = divide;


// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.

var dog = "guvy";
var cat = "snowball";
var pets = "I have a dog named " + dog + " " + "and a cat named " +cat +".";
document.getElementById('q5').innerHTML = pets;


// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.

var x = "5";
var y = "3";

var add2 = x + y;
document.getElementById('q6a').innerHTML = add2;

var subtract2 = x - y;
document.getElementById('q6b').innerHTML = subtract2;

var multiply2 = x * y;
document.getElementById('q6c').innerHTML = multiply2;

var divide2 = x/y;
document.getElementById('q6d').innerHTML = divide2;

document.getElementById('q6note').innerHTML = "<p>The add function combines them, while the others perform a math function</p>";


// 7. When a button is clicked, add content into the ID "q7".
document.getElementById('callAlert').addEventListener("click", function () {
  document.getElementById('q7').innerHTML = "<p>We built this city..we built city on Rock and Roll</p>";
});


// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.

// Click the button
document.getElementById('callDoubleNum').addEventListener("click", function () {
// Collect data
  var number =
  document.getElementById('doubleNum').value;
// Do something with th data
  var numberDouble = (number * 2);
// Display Data
  document.getElementById('q8').innerHTML = numberDouble;
});


// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1 = 5;
var num2 = 10;


var numCompare = num1 === num2 ? "Yes, the value of num1 is greater than num2" :
"No, the value of num1 is not greater than num2";

document.getElementById('q9').innerHTML = numCompare;


// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Nice work, keep practicing".
//    Test to make sure each condition is met properly.

var score = 55;

if(score > 90) {
  document.getElementById('q10').innerHTML = "<p>Great job</p>";
}else if( 90 > score > 60) {
  document.getElementById('q10').innerHTML = "<p>Nice work, keep practicing</p>";
}else {
  document.getElementById('q10').innerHTML = "<p>Time to Spend More time Studying</p>";
}



// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."


// Click the button
document.getElementById('callDemographics').addEventListener("click", function () {
// Collect Data
var name =  document.getElementById('name').value;
var age =   document.getElementById('age').value;
var state = document.getElementById('state').value;
var demographics = "My name is " + name + ". I'm " + age + " years old, and I live in " + state +"."
//Do something with the data
// Display the data
document.getElementById('qa').innerHTML = demographics;

});



// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.
var width = 2;
var height = 3;
var rectangle = "If a rectangle has a width of " + width + ", and a height of " + height +
", the area of this rectangle is " + (height * width) +".";
document.getElementById('qb').innerHTML = rectangle;


// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.

document.getElementById('callRectangle').addEventListener("click", function () {

  var width2 = document.getElementById('width2').value;
  var height2 = document.getElementById('height2').value;

  var rectangle2 = "If a rectangle has a width of " + width2 + ", and a height of " + height2 +
  ", the area of this rectangle is " + (height2 * width2) +".";

  document.getElementById('qc').innerHTML = rectangle2;
});


// D. Have the user enter their name into a textfield. When they click a button,
// find the length (number of characters) of their name and display the result in the HTML page.

document.getElementById('callName').addEventListener("click", function () {
  var name2 = document.getElementById('name2').value;
  var nameLength = name2.length;
  var nameMessage = "My name is "+ name2 + ", and the length of characters is " + nameLength + ".";

  document.getElementById('qd').innerHTML = nameMessage;
});


// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad


document.getElementById('callTestScore').addEventListener("click", function () {
  var testScore = document.getElementById('testScore').value;
  var highScore = "Great Job";
  var medScore = "Nice work, keep practicing";
  var lowScore = "Time to study more";



  if(testScore > 90) {
  document.getElementById('qe').innerHTML =  highScore;
  document.getElementById('qe').classList.add("status-good");
}else if((90 > testScore) && (testScore > 60)){
  document.getElementById('qe').innerHTML = medScore;
  document.getElementById('qe').classList.add("status-ok");
  }else {
  document.getElementById('qe').innerHTML = lowScore;
  document.getElementById('qe').classList.add("status-bad");
  }
  });


/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
