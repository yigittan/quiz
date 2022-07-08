const writeQuestion = document.querySelector("#enterQuestion");
const choices = document.querySelectorAll(".choice");
const form = document.querySelector("form");
const answer = document.querySelector("#answer")

let question = document.querySelector(".question");
let answer0 = document.querySelector(".input0")
let answer1 = document.querySelector(".input1")
let answer2 = document.querySelector(".input2")
let answer3 = document.querySelector(".input3")
let answers = [answer0.value,answer1.value,answer2.value,answer3.value]



form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let i=0;i<4;i++) {
        let element = document.querySelector("#Answer"+i);
        element.innerHTML =answers[i];
    }

    let writeText = document.querySelector("#question");
    writeText.innerHTML = question.value

})