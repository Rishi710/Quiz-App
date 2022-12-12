const quizData = [
  {
    question: "Who is the president of US?",
    a: "Rishi Gautam",
    b: "Donald Trump",
    c: "Anuj Singh",
    d: "Monarch CodeBetter",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopter Terminals Motorboats Lamborghini",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1991",
    b: "1996",
    c: "1995",
    d: "1992",
    correct: "c",
  },
  {
    question: "How old is ",
    a: "24",
    b: "23",
    c: "20",
    d: "21",
    correct: "d",
  },
  // {
  //   question: "The external JavaScript file must contain the <script> tag.",
  //   a: "True",
  //   b: "False",
  //   correct: "a",
  // },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "alert('Hello World');",
    b: "msg('Hello World');",
    c: "msgBox('Hello World');",
    d: "alertBox('Hello World');",
    correct:"a",
  },
];

const currentQuestion = 0;

const questionEL = document.getElementById("question");
const quizId = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEl=document.querySelectorAll(".answer");
// const oneId=document.getElementById("one");

let currentQuiz = 0;
let score=0;
let answer=undefined;
loadQuiz();


function loadQuiz() {

// call DeSelected Function
  deSelectAnswer()
  const currentQuizData = quizData[currentQuiz];
  
  questionEL.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected(){

  let answer=undefined;
  // console.log(answer);
  answerEl.forEach(answerEle=>{
    // console.log(elementAns.checked);
    if(answerEle.checked){
      answer= answerEle.id
    }
  });
  return answer;
}

function deSelectAnswer(){
   answerEl.forEach(answerEle=>{
    answerEle.checked=false;
   });
}

submitBtn.addEventListener("click", ()=>{
// currentQuiz++;

const answer=getSelected();

  console.log(answer);
if(answer){
  if(answer===quizData[currentQuiz].correct){
   score++;
  }
    currentQuiz++;
    if(currentQuiz<quizData.length){
      loadQuiz();
    }else{
      alert("You Finished!");
      
      if(score>3){
      quizId.innerHTML=`<h2> You answered correctly ${quizData.length}/${score} Questions.
      That's a Good Result <button onclick="location.reload()">Try Again</button>`;
      }else{
        quizId.innerHTML=`<h2> You answered correctly ${quizData.length}/${score} Questions.
        That's a Very Bad Result <button onclick="location.reload()">Try Again</button>`;
      }
    
      console.log(score);

    }
}
});
// console.log(score);
