<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <title> JavaScript QUIZ</title>
      <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
      <link href="css/styles.css" rel="stylesheet" type="text/css">
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script><script   src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
      <script src="js/scripts.js"></script>
   </head>
   <body>
      <div id="page-wrap">
      <h1>QUEASTIONS ON JavaScript</h1>
         <?php

         $answer1 = $_POST['question-1-answers'];
         $answer2 = $_POST['question-2-answers'];
         $answer3 = $_POST['question-3-answers'];
         $answer4 = $_POST['question-4-answers'];
         $answer5 = $_POST['question-5-answers'];

         $totalCorrect = 0;

         if ($answer1 == "B") { $totalCorrect++; }
         if ($answer2 == "C") { $totalCorrect++; }
         if ($answer3 == "B") { $totalCorrect++; }
         if ($answer4 == "A") { $totalCorrect++; }
         if ($answer5 == "C") { $totalCorrect++; }

         echo "<div id='results'>$totalCorrect / 5 correct</div>";

         ?>

      </div>



   </body>
</html>
