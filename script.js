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

// quiz execute
const options1 = document.getElementsByClassName("option-btn-1");
const sendButton1 = document.getElementsByClassName("send-btn-1")[0];
const wrongAnswer1 = document.getElementsByClassName("wrong-answer-1")[0];
const sendAnswer1 = document.getElementsByClassName("send-answer-1")[0];
const sendAnswerInfo1 = document.getElementsByClassName("send-answer-info-1")[0];
const correctAnswer1 = document.getElementsByClassName("correct-answer-1")[0].value;

initializeQuiz(options1, sendButton1, wrongAnswer1, sendAnswer1, sendAnswerInfo1, correctAnswer1);
