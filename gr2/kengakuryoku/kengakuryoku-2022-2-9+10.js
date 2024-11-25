const questions8 = [
  {
    questionText: {
      A: "What did you do last Sunday?",
      B: "I ( meet / my friend / Kyoto / to / visited )."
    },
    answer: "visited Kyoto to meet my friend"
  },
  {
    questionText: {
      A: "( are / how / students / there / many ) in your class?",
      B: "There are thirty-five."
    },
    answer: "How many students are there"
  },
  {
    questionText: {
      A: "What were you doing yesterday morning?",
      B: "( teaching / math / was / I ) to my friends at the library."
    },
    answer: "I was teaching math"
  },
  {
    questionText: {
      A: "It&#x2019;s Amy&#x2019;s birthday next Friday.",
      B: "Yes. I ( a book / will / her / give )."
    },
    answer: "will give her a book"
  }
];

const questions9 = [
  {
    location: "町で",
    questionText: {
      Ken: "I&#x2019;m going to see this movie.",
      Bob: "Oh, I want to see it, too. (　　　)?",
      Ken1: "Sure. When are you free?",
      Bob1: "Next Sunday."
    },
    answer: "May I go with you"
  },
  {
    location: "学校で",
    questionText: {
      Nancy: "I can&#x2019;t find my bag.",
      Yuito: "Wait. Is this yours?",
      Nancy1: "Oh, that&#x2019;s mine. (　　　)?",
      Yuito1: "Under the table."
    },
    answer: "Where was it"
  }
];

const questionBoxContainer = document.getElementById('question-box-container');
const questionBoxContainer1 = document.getElementById('question-box-container1');
const submitButton = document.getElementById('submit-button');

function buildTest(questions) {

  const questionBox = [];

  questions.forEach(
    (currentQuestion, questionNumber) => {

      const questionTextBox = [];
      for(letter in currentQuestion.questionText) {

        if((Object.keys(currentQuestion.questionText).length) > 1) {
          if(Object.keys(currentQuestion.questionText).indexOf(letter)%2 === 0) {
            questionTextBox.push(
              `<div id="question-text-label">${Object.keys(currentQuestion.questionText)[0]}:</div>
              <div id="question-text-line">${currentQuestion.questionText[`${letter}`]}</div>`
            )
          } else {
            questionTextBox.push(
              `<div id="question-text-label">${Object.keys(currentQuestion.questionText)[1]}:</div>
              <div id="question-text-line">${currentQuestion.questionText[`${letter}`]}</div>`
            )
          }
        } else {
          questionTextBox.push(
            `<div id="question-text-line">${currentQuestion.questionText[`${letter}`]}</div>`
          )
        }
      }
      
      if(Object.hasOwn(questions[questionNumber], 'location') === false){
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
      } else {
        questionBox.push(
          `<div class="question-box">
            <div id="question-number-and-mark-box">
              <div id="question-number">(${questionNumber+1})</div>
              <div class="check-mark-box"></div>
            </div>
            <div id="question-and-answer-box">
              <div id="location">〈${questions[questionNumber].location}〉</div>
              <div id="question-text">${questionTextBox.join('')}</div>
              <input class="student-answer" type="text"></input>
              <div class="correct-answer"></div>
            </div>
          </div>`
        )
      }
    }
  )

  return questionBox.join('');
}

questionBoxContainer.innerHTML = buildTest(questions8);
questionBoxContainer1.innerHTML = buildTest(questions9);

function checkAnswers() {
  
  const studentAnswer = questionBoxContainer.querySelectorAll('.student-answer');
  const correctAnswer = document.querySelectorAll('.correct-answer');
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

  questions9.forEach(
    (currentQuestion, questionNumber) => {
      correctAnswer[questionNumber+4].innerHTML = currentQuestion.answer;
    }
  )

}

submitButton.addEventListener('click', checkAnswers);