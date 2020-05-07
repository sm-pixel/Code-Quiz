// Questions & Answers (4 each question)
var questionArray = [{
        question: "What is Stanley's wifes name?",
        answers: ["A. Cynthia", "B. Teri", "C. Susan", "D. Melissa"],
        correct: "B. Teri"
    },

    {
        question: "Who's concert did Michael Scott attend where he thought he might have gotten accidentally high?",
         answers: ["A. Common", "B. Red Hot Chili Peppers", "C. Alicia Keys", "D. Dave Matthews Band"],
        correct: "C. Alicia Keys"
    },

    {
        question: "Who pronounces popcorn as popcarn?",
        answers: ["A. Creed", "B. Phyllis", "C. Andy", "D. Angela"],
        correct: "B. Phyllis"
    },

    {
        question: "What does Dwight keep a in his car for special occasions?",
        answers: ["A. Birkenstocks", "B. Chuck Taylor's", "C. Hairbrush", "D. Altoids"],
        correct: "A. Birkenstocks"
    },

    {
        question: "One of the cast was in a band called The Grass Roots in the 60s and 70s and actually sings an original song at the end of the series. Who was it?",
        answers: ["A. Kevin", "B. Andy", "C. Dwight", "D. Creed"],
        correct: "D. Creed"
    }
]

// Variables for score and timer
var score = 0;
var currentQuestion = 0;
var timeLeft = 10 * questionArray.length;
var timerEl = document.querySelector("#timer")
// Start quiz and move from question to question

var start = document.querySelector("#startButton");
var questionsDiv = document.querySelector("#questionsDiv");
var possibles = document.querySelector("#possiblesDiv");


function checker(event) {
   
    if(event.target.value === questionArray[currentQuestion].correct){
        console.log('correct')
    }else{
        
        timeLeft -= 10
    }
    currentQuestion++
    if(currentQuestion === questionArray.length){
        endGame()
        return
    }
    render()
}

//[{intials: "test", score: 12}]

function render() {
    questionsDiv.innerHTML = "";
    possibles.innerHTML = "";
    var startQuestion = questionArray[currentQuestion].question;
    questionsDiv.textContent = startQuestion;
    
    
    for (var i = 0; i < questionArray[currentQuestion].answers.length; i++) {
        var newButton = document.createElement("button")
        var newDiv = document.createElement("div")
        newButton.textContent = questionArray[currentQuestion].answers[i];
        newButton.setAttribute("class","btn btn-primary btn-lg mb-2 ")
        newButton.value = questionArray[currentQuestion].answers[i]
        newButton.onclick = checker
        newDiv.appendChild(newButton)
        possibles.appendChild(newDiv)
    }
} 

function endGame() {
    clearInterval(timer)
    console.log("end game")
    questionsDiv.textContent = "Game Over!"

}

function startTimer() {
    timerEl.textContent = "Time: "+ timeLeft 
    timer = setInterval(function () {
        timeLeft --
        timerEl.textContent = "Time: "+ timeLeft 
        if(timeLeft === 0){
            endGame()
        }
    },1000)
}

start.addEventListener("click", function(){
    document.querySelector("#start").innerHTML =""
    startTimer()
    render(questionArray);
});

// Add 20 points for each right answer

// Remove 10-15 seconds for each wrong answer

// Loop through Questions