const questions8 = [
  {
    questionText: {
      A: "( the piano / weekend / practice / every ).",
      B: "OK."
    },
    answer: "Practice the piano every weekend"
  },
  {
    questionText: {
      A: "( your sister / movies / watch / does )?",
      B: "Yes, she likes them."
    },
    answer: "Does your sister watch movies"
  },
  {
    questionText: {
      A: "( is / your / what / father&#x2019;s / name )?",
      B: "It&#x2019;s Naoki."
    },
    answer: "What is your father's name"
  },
  {
    questionText: {
      A: "Do you like basketball?",
      B: "No. ( well / I / play / can&#x2019;t / it )."
    },
    answer: "I can't play it well"
  }
];

const questions9 = [
  {
    questionText: {
      Kate: "You have a nice bag.",
      Takuya: "Thank you, but it&#x2019;s not mine.",
      Kate1: "(　　　)?",
      Takuya1: "It&#x2019;s my brother&#x2019;s"
    },
    answer: "Whose is it?"
  },
  {
    questionText: {
      Yumi: "Look. We can see animals here.",
      Jane: "Yes. I like animals very much.",
      Kate1: "(　　　)?",
      Jane1: "I like dogs."
    },
    answer: "What animals do you like?"
  },
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
questionBoxContainer1.innerHTML = buildTest(questions9);

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