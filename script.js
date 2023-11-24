// quiz pag 1 
const options = document.getElementsByClassName("option-btn");
const sendButton = document.getElementsByClassName("send-btn");
const wrongAnswer = document.getElementsByClassName("wrong-answer");
const sendAnswer = document.getElementsByClassName("send-answer");
const sendAnswerInfo = document.getElementsByClassName("send-answer-info");

var savedValue="";

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
        savedValue = this.value;
        console.log("Value saved:", savedValue);
    });
}


function quiz1() {
    if (savedValue === "b") {
        sendAnswer[0].classList.remove("hidden");
        wrongAnswer[0].classList.add("hidden");
        sendAnswerInfo[0].classList.remove("hidden");
    } else {
        wrongAnswer[0].classList.remove("hidden");
        sendAnswer[0].classList.add("hidden");
        sendAnswerInfo[0].classList.add("hidden");
    }
}


sendButton[0].addEventListener("click", quiz1);
