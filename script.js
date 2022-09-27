//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var LittleMyScore = 0;
var MoominScore = 0;
var SnufkinScore = 0;
var SnorkMaidenScore = 0;




//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result= document.getElementById("result");



//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", LittleMy);
q1a2.addEventListener("click", Moomin);
q1a3.addEventListener("click", Snufkin);
q1a4.addEventListener("click", SnorkMaiden);

q2a1.addEventListener("click", Snufkin);
q2a2.addEventListener("click", Moomin);
q2a3.addEventListener("click", LittleMy);
q2a4.addEventListener("click", SnorkMaiden);

q3a1.addEventListener("click", Snufkin);
q3a2.addEventListener("click", SnorkMaiden);
q3a3.addEventListener("click", LittleMy);
q3a4.addEventListener("click", Moomin);




//#TODO: Define quiz functions here
function LittleMy(){
  LittleMyScore += 1;
  questionCount += 1;
  

  if(questionCount >=3){
  updateResult();
}
}


  function Moomin (){
 MoominScore += 1;
  questionCount += 1;
 
    if(questionCount >=3){
  updateResult();
}
}
  function Snufkin(){
  SnufkinScore += 1;
  questionCount += 1;
 
    if(questionCount >=3){
  updateResult();
}
}

function SnorkMaiden (){
 SnorkMaidenScore += 1;
  questionCount += 1;
  if(questionCount >=3){
  updateResult();
}
}
 //function results
function updateResult(){
  if(LittleMyScore >=2){
    result.innerHTML=
      "You are Little My! A adventurous person with no fear of what gets in your way. You are resilent and determined to reach your goals";
  
  } else if(SnufkinScore >=2){ 
    result.innerHTML=
      "You are Snufkin! A quiet and always forward person. You are upfront to your friends when there is a problem and is able to identify problems, finding solutions to them quickly. You also like to keep to yourself and stay independent.";

  }else if(SnorkMaidenScore >=2){ 
    result.innerHTML=
      "You are Snork Maiden! A very kind and amazing finder of beautiful things. You also know whenever something is wrong, bringing it up to fix it immeditaley";

  }  else if(MoominScore >=2){ 
    result.innerHTML=
      "You are Moomin. A energetic and down to earth person. You care very much for your friends and will stand by them no matter what.";
    
  } else { 
    result.innerHTML= "Huh, we can't find the character anywhere. Maybe they're off sailing. Check again soon!"
  }
}


document.getElementById("myForm").reset();
