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

const questions9 = [
  {
    location: "公園の前で",
    questionText: {
      Jane: "Wow, this is a big park.",
      Kaoru: "Yes. I come to the park on weekends.",
      Jane1: "(　　　)?",
      Kaoru1: "I dance here."
    },
    answer: "What do you do here"
  },
  {
    location: "友達と家で",
    questionText: {
      Emily: "You have many computers.",
      Yumi: "Yes.",
      Emily1: "(　　　)?",
      Yumi1: "I have five computers."
    },
    answer: "How many computers do you have"
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