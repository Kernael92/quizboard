var scrore = 0; //set score to 0
var total = 5; //Total number of questions
var point = 1; //points per correct answer
var highest = total * point;



















$(document).ready(function() {
   //Hide all questions
   $('.questionForm').hide();
   //show first question
   $("#q1").show();
   $("q1 #submit").click(function() {
      $("questionForm").hide();
      $('#q2').fadeIn(200);
      return false;
   });
   $("q2 #submit").click(function() {
      $("questionForm").hide();
      $('#q3').fadeIn(200);
      return false;
   });
   $("q3 #submit").click(function() {
      $("questionForm").hide();
      $('#q4').fadeIn(200);
      return false;
   });
   $("q4 #submit").click(function() {
      $("questionForm").hide();
      $('#q5').fadeIn(200);
      return false;
   });
   $("q5 #submit").click(function() {
      $("questionForm").hide();
      $('#results').fadeIn(200);
      return false;
   });

});
