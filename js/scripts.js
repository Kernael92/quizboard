var question1Answers = prompt("Inside which HTML element do we put the JavaScript?");
question1Answers = ("A) JavaScript", "B) script", "C) js");
var question2Aanswers = prompt("How do you declare a JavaScript variable carName;?");
question2Aanswers = ("A) v carName;", "B) variable carName;", "C) var carName;");
var question3Answers = prompt("Which event occurs when the user clicks on an HTML element");
question3Answers  = (" A) onmouseover", "B) onclick", "C) onchange");
var question4Answers = prompt("How do you create a function named myFunction?");
question4Answers = ("A) function myFunction", "B)function=myFunction", "C) Function;myFunction");
var question5Answers = prompt("How do you write hello World in an alert box?");
question5Answers = ("A) msg(Hello World)", "B) alertBox(Hello World)", "C) alert(Hello World)");

var answer1 = ['question1Answers'];
var answer2 = ['question2Aanswers'];
var answer3 = ['question3Answers '];
var answer4 = ['question4Answers'];
var answer5 = ['question5Answers'];












var totalCorrect = 0





$(document).ready(function() {


      var answer1 = $("input:radio[name=question-1-answers]:").val();
      var answer2 = $("input:radio[name=question-2-answers]:").val();
      var answer3 = $("input:radio[name=question-3-answers]:").val();
      var answer4 = $("input:radio[name=question-4-answers]:").val();
      var answer5 = $("input:radio[name=question-5-answers]:").val();




});
