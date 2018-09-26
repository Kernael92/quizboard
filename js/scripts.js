var scrore = 0; //set score to 0
var total = 5; //Total number of questions
var point = 1; //points per correct answer
var highest =parseInt(" total * point");
var medium = parseInt("highest-point");
var lowest = parseInt("highest-point-point");
var n = total;

function init () {
   // set correct answers
   sessionStorage.setItem("A1","B");
   sessionStorage.setItem("A2","C");
   sessionStorage.setItem("A3","B");
   sessionStorage.setItem("A4","A");
   sessionStorage.setItem("A5","B");


}


$(document).ready(function() {

   //show first question
   $("#q1").show();

   $('#q2').hide();

   $('#q3').hide();

   $('#q4').hide();

   $('#q5').hide();

   $('#btn1').click(function(){
      $('#q2').show();
      $('#btn1').hide();
   });

   $('#btn2').click(function(){
      $('#q3').show();
      $('#btn2').hide();
   });
   $('#btn3').click(function(){
      $('#q4').show();
      $('#btn3').hide();
   });
   $('#btn4').click(function(){
      $('#q5').show();
      $('#btn4').hide();
   });

   $('#submit').click(function() {
      $('#quiz').hide();
      $('#afterSubmit').show();
      var q1 = document.quiz.q1.value;
      var q2 = document.quiz.q2.value;
      var q3 = document.quiz.q3.value;
      var q4 = document.quiz.q4.value;
      var q5 = document.quiz.q5.value;

      var score = 0;

      if (q1 == "B"){
         score++;
      }
      if (q2 == "A") {
         score++
      }
      if (q3 == "B") {
         score++
      }
      if (q4 == "A") {
         score++
      }
      if (q5 == "B") {
         score++
      }

      var messages = ["Great job!", "That's just okay!", "You really need to do better!"];
      var pictures = ["img/WIN.gif", "img/OKAY.gif", "img/lose.gif"];

      var range;


      if (score < 1) {
         range = 2;
      }
      if (score > 0 && score < 3) {
         range = 1;
      }
      if (score >= 3) {
         range = 0
      }

      //document.getElementById('#afterSubmit').styles.visibilty = "visible";
      document.getElementById('message').innerHTML = messages[range];
      document.getElementById('results').innerHTML = "You got " +score+ " correct";
      document.getElementById('picture').src = pictures[range];






   });
});













   //
   //$(".questionFor#submit").click(function() {

      //get data attribute
      //current = $(this).parents("form:first").data("question");
      //next = $(this).parents("form:first").data("question")+1;
      //Hide all questions
      // $('.questionForm').hide();
      //show next question
      //$("#q" +next+"").fadeIn(200);
      //process("+current+");
      //return false;

   //});
//});








//process the answers
// function process(n){
//    var submitted = $("input[name=q'+n+']:checked").val();
//    if(submitted = sessionStorage.getItem("A"+n+'')){
//       score + score + point
//    }
//
//
//
// if (n == total){
//    $("#results").html("<h2>Your final score is:"+score+ "out of"  + "highest"+"</h2><a href=\"index.html\">Take Quiz");
// }
// if (score == highest){
//    $("#results").append("<p>You are a JavaScript guru!</p>");
// } else if (score == medium ){
//    $("#results").append("<p>Good job</p>");
// } else if (score == lowest){
//    $("#result").append("<p>Poor! Revisit your notes on JavaScript</p>")
// } else
//
//    alert ("false");
// }






//Add event listener
window.addEventListener("load", init, false);
