const questions =[
    {
        question :"which is the largest animal in world?",
        answers : [
            {text: "Shark", correct: false },
            {text: "Blue whale", correct: true },
            {text: "Elephant", correct: false },
            {text: "Giraffe", correct: false }

        ]

        },
        {
            question :"which is the largest desert in the world?",
            answers : [
                {text: "Kalahari", correct: false },
                {text: "GOBI", correct: false },
                {text: "Sahara", correct: false },
                {text: "Antarctica", correct: true }
    
            ]
    
            },
            {
                question :"which is the smallest continent in the  world?",
                answers : [
                    {text: "Asia", correct: false },
                    {text: "Australia", correct: true },
                    {text: "Africa", correct: false },
                    {text: "Antarctica", correct: false }
        
                ]
        
                },
                {
                    question :"which is the smallest country in the  world?",
                    answers : [
                        {text: "Bhutan", correct: true },
                        {text: "Nepal", correct: false },
                        {text: "sri lanka", correct: false },
                        {text: "vactican city", correct: false }
            
                    ]
            
                    } 
              
    
];
const questionElement = document.getElementById("question");
const answerbtn = document.getElementById("answerbtn");
const nextbtn = document.getElementById("nextbtn");

let cqindex= 0;
let score =0;
function startquiz(){
cqindex=0;
score=0;
nextbtn.innerHTML= "Next"
showQuestion();
}

function showQuestion(){
    resetState();
    let cq= questions[cqindex];
    let qn= cqindex +1;
    questionElement.innerHTML= qn +". "+ cq.question;
    cq.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
            button.addEventListener("click", selectAnswer);
        
    });

}
function resetState(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild)
    }
}

function selectAnswer(e) {
const selectedBtn= e.target;
const iscorrect = selectedBtn.dataset.correct ==="true";
if(iscorrect){
    selectedBtn.classList.add("correct");
    score++;
}else {
    selectedBtn.classList.add("incorrect")
}

Array.from(answerbtn.children).forEach(button => {
    if(button.dataset.correct ==="true"){
    button.classList.add("correct")
    }
    // button.disabled= true;

});
nextbtn.style.display = "block";

};
function showScore(){
    resetState();
    questionElement.innerHTML=` your score ${score} out of ${questions.length} `
    nextbtn.innerHTML= "play again";
    nextbtn.style.display= "block"
};
function handleNextButton(){
    cqindex++;
    if(cqindex<questions.length){
        showQuestion();
    } else {
        showScore();
    }
};
nextbtn.addEventListener("click", ()=>{
    if(cqindex<questions.length){
        handleNextButton();
    } else {
startquiz();
    };
})
startquiz();

