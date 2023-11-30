const restartButton = document.getElementsByClassName("restart-btn");
const scrollToTopButton = document.getElementsByClassName("scroll-to-top-btn");

scrollToTopButton[0].addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

restartButton[0].addEventListener("click", function() {
    location.reload();
});


function initializeQuiz(options, sendButton, wrongAnswer, sendAnswer, sendAnswerInfo, correctAnswer) {
    var savedValue = "";

    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function() {
            savedValue = this.value;
            console.log("Value saved:", savedValue);
        });
    }

    function checkAnswer() {
        if (savedValue === correctAnswer) {
            sendAnswer.classList.remove("hidden");
            wrongAnswer.classList.add("hidden");
            sendAnswerInfo.classList.remove("hidden");
        } else {
            wrongAnswer.classList.remove("hidden");
            sendAnswer.classList.add("hidden");
            sendAnswerInfo.classList.add("hidden");
        }
    }

    sendButton.addEventListener("click", checkAnswer);
}

// quiz pag1/1
const options1 = document.getElementsByClassName("option-btn-1");
const sendButton1 = document.getElementsByClassName("send-btn-1")[0];
const wrongAnswer1 = document.getElementsByClassName("wrong-answer-1")[0];
const sendAnswer1 = document.getElementsByClassName("send-answer-1")[0];
const sendAnswerInfo1 = document.getElementsByClassName("send-answer-info-1")[0];
const correctAnswer1 = document.getElementsByClassName("correct-answer-1")[0].value;

initializeQuiz(options1, sendButton1, wrongAnswer1, sendAnswer1, sendAnswerInfo1, correctAnswer1);

// quiz pag1/2
const options2 = document.getElementsByClassName("option-btn-2");
const sendButton2 = document.getElementsByClassName("send-btn-2")[0];
const wrongAnswer2 = document.getElementsByClassName("wrong-answer-2")[0];
const sendAnswer2 = document.getElementsByClassName("send-answer-2")[0];
const sendAnswerInfo2 = document.getElementsByClassName("send-answer-info-2")[0];
const correctAnswer2 = document.getElementsByClassName("correct-answer-2")[0].value;

initializeQuiz(options2, sendButton2, wrongAnswer2, sendAnswer2, sendAnswerInfo2, correctAnswer2);

// quiz pag1/3
const options3 = document.getElementsByClassName("option-btn-3");
const sendButton3 = document.getElementsByClassName("send-btn-3")[0];
const wrongAnswer3 = document.getElementsByClassName("wrong-answer-3")[0];
const sendAnswer3 = document.getElementsByClassName("send-answer-3")[0];
const sendAnswerInfo3 = document.getElementsByClassName("send-answer-info-3")[0];
const correctAnswer3 = document.getElementsByClassName("correct-answer-3")[0].value;

initializeQuiz(options3, sendButton3, wrongAnswer3, sendAnswer3, sendAnswerInfo3, correctAnswer3);
