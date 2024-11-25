const questions8 = [
  {
    questionText: {
      A: "Did you see this movie?",
      B: "No. I ( have / see / to / it / time / didn&#x2019;t )."
    },
    answer: "didn&#x2019;t have time to see it"
  },
  {
    questionText: {
      A: "Let&#x2019;s ( tennis / is / play / it / sunny / if ) tomorrow.",
      B: "Yes, let&#x2019;s."
    },
    answer: "play tennis if it is sunny"
  },
  {
    questionText: {
      A: "( a hospital / there / around / is ) here?",
      B: "Yes. Sakura Hospital is near the station."
    },
    answer: "Is ther a hospital around"
  },
  {
    questionText: {
      A: "( have / you / do / don&#x2019;t / to ) your homework today.",
      B: "OK. I&#x2019;ll do it tomorrow."
    },
    answer: "You don&#x2019;t have to do"
  }
];

const questions9 = [
  {
    location: "家で",
    questionText: {
      Mary: "This cake looks delicious.",
      Bob: "You can&#x2019;t eat it now. It&#x2019;s for our grandmother.",
      Mary1: "(　　　)?",
      Bob1: "She will come in the evening."
    },
    answer: "When is she coming"
  },
  {
    location: "授業中に",
    questionText: {
      Aya: "Oh, I don&#x2019;t have a pencil.",
      Jane: "Don&#x2019;t worry. (　　　).",
      Aya1: "Thank you, Jane.",
      Jane1: "Here it is."
    },
    answer: "I have another pencil"
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