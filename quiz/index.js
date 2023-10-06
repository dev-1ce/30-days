const questions = [
    {
        question : "Which is the largest animal",
        answers :[
            {text : "Sharks" , correct : "false"},
            {text: "Lion",correct:"false"},
            {text: "Blue-Whale",correct:"true"},
            {text: "Mammoth",correct:"false"},
        ]
    },
    {
        question : "Which country has won the most world cup",
        answers :[
            {text : "Geramny" , correct : "false"},
            {text: "Brazil",correct:"true"},
            {text: "France",correct:"false"},
            {text: "Argentina",correct:"false"},
        ]
    },
    {
        question : "Who is the greatest cricketer",
        answers :[
            {text : "Virat" , correct : true},
            {text: "Don-Bradman",correct:false},
            {text: "Sachin",correct:false},
            {text: "Viv-Richards",correct:false},
        ]
    },
    {
        question : "Which is the smallest continent",
        answers :[
            {text : "Asia" , correct : false},
            {text: "Africa",correct:false},
            {text: "Europe",correct:false},
            {text: "Australia",correct:true},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currQuestionIndex = 0 ;
let score = 0 ;

function startQuiz(){
    currQuestionIndex = 0 ;
    score = 0 ;
    nextButton.innerHTML = "Next";
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currQuestionIndex];
    let questionNo = currQuestionIndex +1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selecAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selecAnswer(e){
    const selectedBtn  = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();