let questions = [

    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Tim_Bernes_Lee",
        "answer_3": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Wie wahlst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3":"a=title{...}",
        "right_answer": 1
    },

    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate",
        "answer_2": "100 = let rate",
        "answer_3":"rate = 100",
        "right_answer": 4    
    },

    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Tim_Bernes_Lee",
        "answer_3": "Justin Bieber",
        "right_answer": 3
    },

];

// globale Variablen 

let rightQuestions = 0;

let currentQuestion = 0;


// fucntions 
// main function
function init() {

    document.getElementById('all-questions').innerHTML = questions.length // Show Question lenght

    console.log(" init test")

    showQuestion()
}


function showQuestion() {

    if(currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none'

        document.getElementById('amount-of-questions').innerHTML = questions.length
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions

        document.getElementById('header-image').src = 'img/win.jpg'

        document.getElementById('progress-bar').innerHTML = `100%`
        document.getElementById('progress-bar').style.width = `100%`
    }else {  // show next question 
 
    let percent = currentQuestion / questions.length *100
    document.getElementById('progress-bar').innerHTML = `${percent}%`
    document.getElementById('progress-bar').style.width = `${percent}%`

    console.log(percent)    

    let question = questions[currentQuestion]
    // show question
    document.getElementById('questiontext').innerHTML = question['question']
    //show Answer
    document.getElementById('answer_1').innerHTML = question['answer_1']
    document.getElementById('answer_2').innerHTML = question['answer_2']
    document.getElementById('answer_3').innerHTML = question['answer_3']
    document.getElementById('answer_4').innerHTML = question['answer_4']

    document.getElementById('question-number').innerHTML = currentQuestion + 1


} }


function answer(selection) {            // Answere right or wrong 
    let question = questions[currentQuestion]

    let selectedQuestionNumber = selection.slice(-1)
    
    let ifOfRightAnswer = `answer_${question['right_answer']}`

    if (selectedQuestionNumber == question['right_answer']) {
        console.log("richtige Antwort")
        document.getElementById(selection).classList.add('bg-success')

        rightQuestions++
        

    } else { 
        console.log("falsche Antwort")
        document.getElementById(selection).classList.add('bg-danger')
        document.getElementById(ifOfRightAnswer).classList.add('bg-success')

    }
    document.getElementById('next-button').disabled = false

}

function nextQuestion() {
    currentQuestion++;
    

    document.getElementById('next-button').disabled = true

    resetAnswerButtons()

    showQuestion()
} 

function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('bg-danger')
    document.getElementById('answer_1').classList.remove('bg-success')
    document.getElementById('answer_2').classList.remove('bg-danger')
    document.getElementById('answer_2').classList.remove('bg-success')
    document.getElementById('answer_3').classList.remove('bg-danger')
    document.getElementById('answer_3').classList.remove('bg-success')
    document.getElementById('answer_4').classList.remove('bg-danger')
    document.getElementById('answer_4').classList.remove('bg-success')
}