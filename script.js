// const questions = [
//     {
//         question: "What is the capital of France?",
//         correctAnswer: "Paris",
//         wrongAnswers: ["Lyon", "Marseille", "Toulouse"]
//     },
//     {
//         question: "What is 2 + 2?",
//         correctAnswer: "4",
//         wrongAnswers: ["3", "5", "22"]
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         correctAnswer: "Mars",
//         wrongAnswers: ["Jupiter", "Saturn", "Venus"]
//     }
// ];

const questions = [
    {
        question: "What process is defined as the splitting of a heavy nucleus into smaller nuclei?",
        correctAnswer: "Nuclear Fission",
        wrongAnswers: ["Nuclear Fusion", "Radioactive decay", "Chain reaction"]
    },
    {
        question: "What process is defined as the combining of light nuclei to form a heavier nucleus?",
        correctAnswer: "Nuclear Fusion",
        wrongAnswers: ["Radioactive decay", "Nuclear Fission", "Chain reaction"]
    },
    {
        question: "Which of the following fuels is most commonly used in nuclear power plants operating today?",
        correctAnswer: "Uranium-235 (U-235)",
        wrongAnswers: ["Hydrogen isotopes (Deuterium, Tritium)", "Plutonium-239 (Pu-239)", "Thorium-232 (Th-232)"]
    },
    {
        question: "Which of the following is a fertile material that can be converted to fissile Uranium-233?",
        correctAnswer: "Thorium-232 (Th-232)",
        wrongAnswers: ["Hydrogen isotopes (Deuterium, Tritium)", "Plutonium-239 (Pu-239)", "Uranium-235 (U-235)"]
    },
    {
        question: "What is a key condition required for achieving nuclear fusion?",
        correctAnswer: "Extremely high temperature (~100 million °C)",
        wrongAnswers: ["Moderate temperature and pressure", "A critical mass of fuel", "Cooling with ordinary water"]
    },
    {
        question: "What is a key condition required for achieving nuclear fission in current power plants?",
        correctAnswer: "Moderate temperature and pressure",
        wrongAnswers: ["Extremely high temperature (~100 million °C)", "Need for external lithium breeding", "Minimal radioactive waste"]
    },
    {
        question: "Which nuclear power plant component is responsible for converting thermal energy from steam into mechanical energy (rotational motion)?",
        correctAnswer: "Turbine",
        wrongAnswers: ["Generator", "Condenser", "Steam Generator"]
    },
    {
        question: "Which nuclear power plant component is attached to the turbine and converts mechanical energy into electrical energy?",
        correctAnswer: "Generator",
        wrongAnswers: ["Condenser", "Steam Generator", "Turbine"]
    },
    {
        question: "What type of nuclear waste includes items like clothing, tools, or filters that have been exposed to radiation and is often safely buried in shallow landfills?",
        correctAnswer: "Low-Level Waste (LLW)",
        wrongAnswers: ["High-Level Waste (HLW)", "Intermediate-Level Waste (ILW)", "Spent Fuel"]
    },
    {
        question: "What type of nuclear waste comes mainly from spent nuclear fuel, is extremely radioactive, and requires cooling and secure long-term storage?",
        correctAnswer: "High-Level Waste (HLW)",
        wrongAnswers: ["Intermediate-Level Waste (ILW)", "Low-Level Waste (LLW)", "Decommissioning Waste"]
    },
    {
        question: "According to the source, which factor contributes significantly to the high upfront costs (CAPEX) of building a nuclear reactor?",
        correctAnswer: "Licensing, site preparation, and design",
        wrongAnswers: ["Fuel costs", "Staff salaries", "Spent fuel management"]
    },
    {
        question: "According to the source, which factor represents a relatively low ongoing operating cost for a nuclear reactor once built?",
        correctAnswer: "Fuel costs",
        wrongAnswers: ["Spent Fuel Management", "Staff salaries", "Maintenance and inspections"]
    },
    {
        question: "Which major nuclear incident in 2011 was caused by a massive earthquake and tsunami disabling backup generators, leading to loss of cooling?",
        correctAnswer: "Fukushima Daiichi",
        wrongAnswers: ["Chernobyl", "Three Mile Island", "Kyshtym"]
    },
    {
        question: "Which major nuclear incident in 1986 was caused by a flawed reactor design combined with serious operator errors during a safety test?",
        correctAnswer: "Chernobyl",
        wrongAnswers: ["Three Mile Island", "Kyshtym", "Fukushima Daiichi"]
    },
    {
        question: "What is listed as a key environmental advantage of nuclear power?",
        correctAnswer: "Very low greenhouse gas emissions",
        wrongAnswers: ["Minimal radioactive waste", "No risk of accidents", "Low water usage"]
    },
    {
        question: "What is listed as a key environmental disadvantage of nuclear power?",
        correctAnswer: "Radioactive Waste requiring long-term storage",
        wrongAnswers: ["Extremely high energy density", "Small land footprint", "Reduced air pollution"]
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
