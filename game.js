const question = document.getElementById("question");
const choice = Array.from(document.getElementsByClassName("choice-text"));
const qcountText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQ = {};
let acceptAns = true;
let score = 0;
let count = 0;
let availableQ = [];

let questions = [];
const cat = localStorage.getItem("category");

fetch(cat)
.then(res => {
    return res.json();

})
.then(loadedQuestions =>{
    console.log(loadedQuestions.results)
    questions = loadedQuestions.results.map(loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.question
        };
        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random()* 3)+1;
        answerChoices.splice(formattedQuestion.answer -1,0,loadedQuestion.correct_answer);

        answerChoices.forEach((choice,index) => {
            formattedQuestion["choice" + (index+1)] = choice;
        })

        return formattedQuestion;
    })
    start();
})
.catch(err =>{
    console.log(err)
});

const correct = 10;
const max_q = 10;

start = () => {
    count = 0;
    score = 0;
    availableQ = [...questions];
    getNew();
}

getNew = () => {
    if(availableQ.length == 0 || count >= max_q){
        localStorage.setItem("recentScore", score);
        return window.location.assign('endScreen.html');
    }

    count++;
    qcountText.innerText = count + "/" + max_q;
    const num = Math.floor(Math.random() * availableQ.length);
    currentQ = availableQ[num]
    question.innerText = currentQ.question

    choice.forEach( choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQ["choice" +number];
    });

    availableQ.splice(num, 1)

    acceptAns = true;
};

choice.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptAns) return;

        acceptAns = false;
        const selected = e.target;
        const answer = selected.dataset["number"]

        let color =  selected.parentElement.style.backgroundColor;

        if (answer == currentQ.answer) {
            selected.parentElement.style.backgroundColor = "#36AB6B"
            score += correct;
            scoreText.innerText = score;
        }
        else{
            selected.parentElement.style.backgroundColor = "#D3253F"
        }
        

        

        setTimeout(( )=> {
            selected.parentElement.style.backgroundColor = color;
            getNew();
        }, 1000);
        

    });
});
