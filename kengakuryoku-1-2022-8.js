const questions8 = [
  {
    questionText: {
      A: "( at / eat / lunch / let's ) this restaurant.",
      B: "Sure."
    },
    answer: "Let's eat lunch at"
  },
  {
    questionText: {
      A: "( Japanese / can / read / you )?",
      B: "Yes, I can."
    },
    answer: "Can you read Japanese"
  },
  {
    questionText: {
      A: "You have a nice book.",
      B: "( not / is / mine / this book ). It&#x2019;s Kanako&#x2019;s."
    },
    answer: "This book is not mine"
  },
  {
    questionText: {
      A: "I like sushi. ( do / food / like / what / you )?",
      B: "I like udon."
    },
    answer: "What food do you like"
  }
];

const question9 = [
  {
    questionText: {
      A: "( the piano / weekend / practice / every ).",
      B: "OK."
    },
    answer: "Practice the piano every weekend"
  }
];

const questionBoxContainer = document.getElementById('question-box-container');
const submitButton = document.getElementById('submit-button');

function buildTest(questions) {

  const questionBox = [];

  questions.forEach(
    (currentQuestion, questionNumber) => {

      const questionTextBox = [];
      for(letter in currentQuestion.questionText) {
        questionTextBox.push(
          `<div>${letter}:</div>
          <div id="question-text-line">${currentQuestion.questionText[`${letter}`]}</div>`
        )
      }
      
      questionBox.push(
        `<div class="question-box">
          <div id="question-number-and-mark-box">
            <div id="question-number">(${questionNumber+1})</div>
            <div class="check-mark-box"></div>
          </div>
          <div id="question-and-answer-box">
            <div id="question-text">${questionTextBox.join('')}</div>
            <input class="student-answer" type="text"></input>
            <div class="correct-answer"></div>
          </div>
        </div>`
      )
    }
  )

  return questionBox.join('');
}

questionBoxContainer.innerHTML = buildTest(questions8);

function checkAnswers() {
  
  const studentAnswer = questionBoxContainer.querySelectorAll('.student-answer');
  const correctAnswer = questionBoxContainer.querySelectorAll('.correct-answer');
  const checkMarkBox = questionBoxContainer.querySelectorAll('.check-mark-box');

  questions8.forEach(
    (currentQuestion, questionNumber) => {

      if(studentAnswer[questionNumber].value === currentQuestion.answer) {
        console.log("correct");
        correctAnswer[questionNumber].innerHTML = '';
        studentAnswer[questionNumber].style.background = "";
        checkMarkBox[questionNumber].innerHTML = `<img src='correct-icon.png' class='result-icon'>`;
      } else {
        correctAnswer[questionNumber].innerHTML = currentQuestion.answer;
        studentAnswer[questionNumber].style.background = "lightpink";
        checkMarkBox[questionNumber].innerHTML = `<img src='incorrect-icon.png' class='result-icon'>`;
      }
    }
  )

}

submitButton.addEventListener('click', checkAnswers);