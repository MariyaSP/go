const questions = document.querySelectorAll('.question');
const questionsHeader  = document.querySelectorAll('.question-header');
const questiobsBtn = document.querySelectorAll('.question-btn');
const questionAnswer = document.querySelectorAll('.question-answer');




questiobsBtn.forEach( (btn, index) => {

    btn.addEventListener('click', (e) => {

        for( let i = 0; i < questions.length; i++){
            if(index === i) {
                questionAnswer[i].style.height = 
                questionAnswer[i].classList.contains('question-active') ? 
                '' : `${questionAnswer[i].scrollHeight}px`;
                questionAnswer[i].classList.toggle('question-active');
            } else {
                questionAnswer[i].classList.remove('question-active');
            }
        }
    });
});
