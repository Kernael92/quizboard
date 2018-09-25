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
      var q1 = document.getElementByName('q1');
      var q2 = document.getElementByName('q2');
      var q3 = document.getElementByName('q3');
      var q4 = document.getElementByName('q4');
      var q5 = document.getElementByName('q5');

      if (n == total){
         $("#results").html("<h2>Your final score is:"+score+ "out of"  + "highest"+"</h2><a href=\"index.html\">Take Quiz");
      }
      if (score == highest){
         $("#results").append("<p>You are a JavaScript guru!</p>");
      } else if (score == medium ){
         $("#results").append("<p>Good job</p>");
      } else if (score == lowest){
         $("#result").append("<p>Poor! Revisit your notes on JavaScript</p>")
      } else

         alert ("false");
      });



   });

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
function process(n){
   var submitted = $("input[name=q'+n+']:checked").val();
   if(submitted = sessionStorage.getItem("A"+n+'')){
      score + score + point
   }



if (n == total){
   $("#results").html("<h2>Your final score is:"+score+ "out of"  + "highest"+"</h2><a href=\"index.html\">Take Quiz");
}
if (score == highest){
   $("#results").append("<p>You are a JavaScript guru!</p>");
} else if (score == medium ){
   $("#results").append("<p>Good job</p>");
} else if (score == lowest){
   $("#result").append("<p>Poor! Revisit your notes on JavaScript</p>")
} else

   alert ("false");
}






//Add event listener
window.addEventListener("load", init, false);
