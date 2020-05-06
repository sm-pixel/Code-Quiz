// Start quiz 

// Questions (5-10) & Answers (4 each question)
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
        question: "Finish the jingle... "Give me a Break, give me a break, break me of a piece of that...."",
        answers: ["A. Fancy feast", "B. Football cream", "C. Apple sauce", "D. Chrysler car"],
        correct: "A. Fancy feast"
    },

    {
        question: "One of the cast was in a band called The Grass Roots in the 60s and 70s and actually sings an original song at the end of the series. Who was it?",
        answers: ["A. Kevin", "B. Andy", "C. Dwight", "D. Creed"],
        correct: "D. Creed"
    }
]

// Variables for score and timer
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;

// Add 10-20 points for each right answer

// Remove 10-15 seconds for each wrong answer

// Loop through Questions