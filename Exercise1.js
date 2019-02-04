// Exercise 1: Crazy Typewriter
// Create a simple html form with a textarea form field, and a reset button
// When the User clicks the reset button, any text already in the textarea should be cleared/erased
// As the User types, make it so they always enter a set sentence no matter what letters they actually type (each to the User presses a key,
//    your JavaScript should add the next character from your hardcoded sentence to the textarea just as if they typed it).
// BONUS CHALLENGES:
// Start with a list containing multiple canned sentences and randomly pick a sentence when the User resets the form

var idx = 0;
var Text = "My name is Didier and I'm proud to be a CodeCrew student.";

var input = document.getElementById("typer");
input.addEventListener('keypress', textPress);

function textPress(e) {
    console.log(Text[idx]);
    e.preventDefault();
    typer.value += Text[idx];
    idx++;
}
