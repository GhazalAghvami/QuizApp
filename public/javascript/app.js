var quiz = [{question: 'Who wrote the book "The Origin of Species"?',
choices: ["Charles Darwin","Louis Pasteur","Sir Alexander Fleming", "Stephen Hawking"], correct:"Charles Darwin"}, {question:"Which gas evolves when charcoal is burnt?", choices:["Oxygen","Carbon Dioxide", "Ozone","Nitrogen"], correct:"Carbon Dioxide"}, {question:"How many planets are there in our solar system?", choices:["8","9","10","12"], correct:"9"}, {question:"What is known as the universal solvent?", choices:["Water","Sulphuric Acid", "Aqua Regia", "Hydrochloric Acid"], correct:"Water"},  {question:"Enzymes and anti-bodies are mainly made of?", choices:["Vitamins","Proteins","Carbohydrates","Fats"], correct: "Proteins"}
];

function showQuiz(){
  var quizString = "";
for (i=0; i<quiz.length; i+=1){
     quizString += getQuizString(i);
}
  document.getElementById('content').innerHTML = quizString;
}

function getQuizString(i){
return '<div class="well container form-inline">'
                      +'<h2> Question '+[i+1]+ '</h2>'
                      +'<p>'+quiz[i].question+'</p>'
                      +'<ul><select id="question'+ i + '">'
                      + '<option value="Selection">Select One</option>'
                      + '<option value="'+quiz[i].choices[0]+'">'+quiz[i].choices[0]+'</option>'
                      + '<option value="'+quiz[i].choices[1]+'">'+quiz[i].choices[1]+'</option>'
                      + '<option value="'+quiz[i].choices[2]+'">'+quiz[i].choices[2]+'</option>'
                      + '<option value="'+quiz[i].choices[3]+'">'+quiz[i].choices[3]+'</option>'
                      + '</select></ul></div>';
                    }

showQuiz();

function submit(){
  var corrects = 0;
  for (var j=0; j<quiz.length; j++){
    if (document.getElementById("question"+[j]).value === quiz[j].correct){
        corrects += 1;
      }
}
$('#myModal').modal('toggle');
document.getElementById('result').innerHTML =("You got "+corrects+" out of "+ (quiz.length) + " questions correct");
//alert("You got "+corrects+" out of "+ (quiz.length) + " questions correct");
}

/*
document.getElementById('closeButton').addEventListener('submit',
function(event){
  $('#myModal').modal('toggle');
});
*/




/*
var timer = setTimeout(function() {
  console.log(document.getElementById("question1").value);
}, 2000);
*
// console.log(valOf);
Question
<select id="question" + i "">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/
