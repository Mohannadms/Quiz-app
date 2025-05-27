const questions = [
    {
        question: "What is the capital of France?",
        correctAnswer: "Paris",
        wrongAnswers: ["Lyon", "Marseille", "Toulouse"]
    },
    {
        question: "What is 2 + 2?",
        correctAnswer: "4",
        wrongAnswers: ["3", "5", "22"]
    },
    {
        question: "Which planet is known as the Red Planet?",
        correctAnswer: "Mars",
        wrongAnswers: ["Jupiter", "Saturn", "Venus"]
    }
];

let currentQuestionIndex = 0;
let currentStreak = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answerEls = [
    document.getElementById("ans1"),
    document.getElementById("ans2"),
    document.getElementById("ans3"),
    document.getElementById("ans4")
];
const feedbackEl = document.getElementById("feedback");
const streakEl = document.getElementById("streak");
const progressEl = document.getElementById("progress");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    const allAnswers = shuffle([q.correctAnswer, ...q.wrongAnswers]);

    questionEl.textContent = q.question;
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    answered = false;

    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    allAnswers.forEach((ans, i) => {
        const ansBox = answerEls[i];
        ansBox.classList.remove("correct", "wrong");
        ansBox.querySelector(".text").textContent = ans;

        ansBox.onclick = (e) => {
            if (answered) return;
            answered = true;
            if (ans === q.correctAnswer) {
                ansBox.classList.add("correct");
                feedbackEl.textContent = "Correct!";
                feedbackEl.classList.add("correct");
                currentStreak++;
            } else {
                ansBox.classList.add("wrong");
                feedbackEl.textContent = `Wrong! Correct answer: ${q.correctAnswer}`;
                feedbackEl.classList.add("wrong");

                // highlight correct answer
                answerEls.forEach(el => {
                    if (el.querySelector(".text").textContent === q.correctAnswer) {
                        el.classList.add("correct");
                    }
                });

                currentStreak = 0;
            }
            feedbackEl.classList.add("show");
            streakEl.textContent = `🔥 Streak: ${currentStreak}`;

            // allow clicking anywhere to go to next question
            setTimeout(() => {
                document.body.addEventListener("click", nextQuestionOnce, { once: true });
            }, 300);
        };
    });
}

function nextQuestionOnce() {
    currentQuestionIndex++;

    // If we've shown all questions, reshuffle and reset index
    if (currentQuestionIndex >= questions.length) {
        shuffle(questions);
        currentQuestionIndex = 0;
    }

    loadQuestion();
}

loadQuestion();
