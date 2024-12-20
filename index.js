const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 100);
const form = document.getElementById("form");
const question = document.getElementById("question");
const input = document.getElementById("input");
const totalScore = document.getElementById('score')

if (!localStorage.getItem("initialized")) {
  localStorage.clear();
  localStorage.setItem("initialized", true);
}

let score = JSON.parse(localStorage.getItem("score"))

if(!score){
  score = 0
}

totalScore.innerHTML = `score : ${score}`
question.innerHTML = `What is ${num1} Substracted by ${num2}?`;

const correctAnswer = num1 - num2;



form.addEventListener("submit", function () {
  // Prevent the form from refreshing the page
  

 const userAnswer = +input.value 

  // Check the answer and update the score
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage()
  } else {
    score--;
    updateLocalStorage()
  }

  // Clear the input field for the next question
  input.value = "";
});

function updateLocalStorage(){
    localStorage.setItem("score" ,JSON.stringify(score) )
}