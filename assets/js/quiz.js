/** POPUP INFO  AND QUIZ SECTION */
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const voltar = document.querySelector('.voltar');
const goToHome = document.querySelector(".goHome-btn");

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

goToHome.onclick = () => {
    configContainerQuiz.classList.remove('active');
}

voltar.onclick = () => {
    quizSection.classList.remove('active');
}

/** SESSION QUIZ CATEGORY */
const configContainerQuiz = document.querySelector(".config-container-quiz");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

// QUIZ STATE VARIABLE
const QUIZ_TIME_LIMIT = 30;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "Beginner Level";
let numberOfQuestions = 15;
let currentQuestion = null;
const questionsIndexHistory = [];

let correctAnswerCount = 0;

// DISPLAY THE QUIZ RESULT AND HIDE THE QUIZ CONTAINER
const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.process-value');

    // Calcula % final com base no número de questões respondidas corretamente
    const progressEndValue = (correctAnswerCount / numberOfQuestions) * 100;

    let progressStartValue = 0;

    // Animação usando requestAnimationFrame
    const animateProgress = () => {
        if (progressStartValue < progressEndValue) {
            progressStartValue += 0.5; // velocidade da animação (podes aumentar/diminuir)

            progressValue.textContent = `${Math.floor(progressStartValue)}%`;
            circularProgress.style.background = 
                `conic-gradient(blue ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

            requestAnimationFrame(animateProgress);
        } else {
            // Garante que o valor final aparece certinho
            progressValue.textContent = `${Math.round(progressEndValue)}%`;
            circularProgress.style.background = 
                `conic-gradient(blue ${progressEndValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;
        }
    };

    animateProgress();

    // Texto final
    const resultText = `Your Score <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort!`;
    document.querySelector(".score-text").innerHTML = resultText;
}


// CLEAR AND RESET THE TIMER
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}

// INITIALIZE AND START THE TIMER FOR THE CURRENT QUESTION
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <= 0){
            clearInterval(timer);
            HighlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402"

            // DISABLE ALL ANSWER OPTIONS AFTER ONE OPTION IS SELECTED
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    }, 1000);
}

//Fecth a random question from based on the selected category:
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    // SHOW THE RESULTS IF ALL QUESTIONS HAVE BEEN USED
    if(questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }

    // FILTER OUT ALREADY ASKED  QUESTIONS  AND CHOOSE A RANDOM ONE
    const availableQuestion = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestion[Math.floor(Math.random() * categoryQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
};

// HIGHLIGHTT THE CORRECT ANSWER OPTION and add icon
const HighlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");

    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
};
 
// HANBLE THE USER´S ANSWER SELECTION
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? HighlightCorrectAnswer() : correctAnswerCount++;

    // INSERT ICON BASED ON CORRECTNESS
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    // DISABLE ALL ANSWER OPTIONS AFTER ONE OPTION IS SELECTED
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    nextQuestionBtn.style.visibility = "visible";
};

// RENDER THE CURRENT QUESTION AND ITS OPTIONS IN THE QUIZ 
let shuffledQuestions = []; // nova lista embaralhada

// Função para embaralhar
const shuffleArray = (array) => {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

// Quando o quiz começa
const startQuiz = () => {
    configContainerQuiz.style.display = "none";
    quizContainer.style.display = "block";

    quizCategory = configContainerQuiz.querySelector(".category-option-quiz.active").textContent;
    numberOfQuestions = parseInt(configContainerQuiz.querySelector(".question-option-quiz.active").textContent);

    // pega todas as perguntas da categoria e embaralha
    const categoryQuestions = questions.find(
        cat => cat.category.toLowerCase() === quizCategory.toLowerCase()
    ).questions || [];

    shuffledQuestions = shuffleArray(categoryQuestions).slice(0, numberOfQuestions);

    rendeQuestion(); // inicia primeira
};

// getRandomQuestion agora vira apenas um "pega próxima"
const getNextQuestion = () => {
    if (questionsIndexHistory.length >= shuffledQuestions.length) {
        return showQuizResult();
    }
    const nextQ = shuffledQuestions[questionsIndexHistory.length];
    questionsIndexHistory.push(questionsIndexHistory.length); // marca posição
    return nextQ;
};

// e no rendeQuestion troca a chamada
const rendeQuestion = () => {
    currentQuestion = getNextQuestion();
    if(!currentQuestion) return;

    resetTimer();
    startTimer();

    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
};

// HIGHLIGHT THE SELECTED OPTION ON CLICK - CATEGORY OR NO. OF QUESTION
document.querySelectorAll(".category-option-quiz, .question-option-quiz").forEach(option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

// RESET THE QUIZ AND RETURN TO THE CONFIGURATION CONTAINER
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionsIndexHistory.length = 0;
    configContainerQuiz.style.display = "block";
    resultContainer.style.display = "none";
}

nextQuestionBtn.addEventListener("click", rendeQuestion);
document.querySelector(".tryAgain-btn").addEventListener("click", resetQuiz);
document.querySelector(".goHome-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);