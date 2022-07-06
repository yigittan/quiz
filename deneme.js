function Question(text,choices,answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

function Quiz(questions) {
    this.questions = questions ;
    this.score = 0;
    this.questionIndex = 0;
}

Question.prototype.controlAnswer = function(answer) {
    return this.answer ===answer
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    let question = this.getQuestion();

    if (question.controlAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

let q1 = new Question("telefonunun rengi nedir?",["Siyah","Gri","Gümüş","Beyaz"],"Siyah");

let q2 = new Question("telefonumun modeli nedir ?",["iphone13","iphone12","iphone11","iphone10"],"iphone11");

let q3 = new Question("telefonumun üretim yeri ?",["USA","KATAR","ALMANYA","TÜRKİYE"],"USA");

let questions = [q1,q2,q3];

let quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
    if(quiz.isFinish()) {
        showScore();
    } else {
        let question = quiz.getQuestion();
        let choices = question.choices;
        document.querySelector("#question-text").innerHTML = question.text;

        for (let i=0; i<choices.length;i++) {
            let element = document.querySelector("#choice"+i);
            element.innerHTML = choices[i];

            guess(`btn${i}`,choices[i])
            console.log(i)
        }
    }
}

function guess(id,guess) {
    let btn = document.getElementById(id);
    btn.onclick = function() {
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {
    document.querySelector("#result").innerHTML = `${quiz.score}`
}