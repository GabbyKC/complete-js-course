(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        let sc;
        if (ans === this.correct) {
            console.log('Correct Answer!');
            sc = callback(true);

        } else {
            console.log('Wrong answer :(');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------');
    }

    let q1 = new Question('Is the sky blue?', ['Yes', 'No'], 0);
    let q2 = new Question('Who made this quiz?', ['your mother', 'GabbyKC', 'fonFing'], 1);
    let q3 = new Question('Do pigs fly?', ['duh, ofc', 'obvs not'], 1);
    let q4 = new Question('Is JS awesome?', ['damn straight', 'uhm, no'], 0);

    let questions = [q1, q2, q3, q4];

    function score() {
        let score = 0;
        return function(correct) {
            if (correct) {
                score++;
            }
            return score;
        }
    }

    let keepScore = score();

    function nextQuestion() {
        let num = Math.floor(Math.random() * questions.length);
        questions[num].displayQuestion();

        let answer = prompt('Please select the correct answer');

        if (answer !== 'exit') {
            questions[num].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();


})();
