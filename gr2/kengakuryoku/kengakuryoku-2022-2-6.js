const questions1 = [
  {
    questionText: {
      A: "Did you see Mike yesterday?",
      B: "Yes, I (&emsp;&emsp;). I saw him at the library."
    },
    options: {
      1: "do",
      2: "am",
      3: "did",
      4: "was"
    },
    answer: "3"
  },
  {
    questionText: {
      A: "There (&emsp;&emsp;) a lot of books in your father&#x2019;s room.",
      B: "He likes reading very much."
    },
    options: {
      1: "is",
      2: "are",
      3: "have",
      4: "has"
    },
    answer: "2"
  },
  {
    questionText: {
      A: "How was the festival?",
      B: "It was exciting. I enjoyed (&emsp;&emsp;) with others."
    },
    options: {
      1: "dancing",
      2: "was dancing",
      3: "to dance",
      4: "danced"
    },
    answer: "1"
  },
  {
    questionText: {
      A: "I have a lot of homework today.",
      B: "You (&emsp;&emsp;) play video games today."
    },
    options: {
      1: "can",
      2: "will",
      3: "don&#x2019;t have to",
      4: "must not"
    },
    answer: "4"
  }
];

const questions2 = [
  {
    questionText: {
      A: "What are the (&emsp;&emsp;) of the flowers, <i>ajisai</i>?",
      B: "They are white, blue, and red. They are beautiful."
    },
    options: {
      1: "fruits",
      2: "kinds",
      3: "colors",
      4: "places"
    },
    answer: "3"
  },
  {
    questionText: {
      A: "What was your brother doing (&emsp;&emsp;) you came home?",
      B: "He was watching TV."
    },
    options: {
      1: "when",
      2: "because",
      3: "that",
      4: "if"
    },
    answer: "1"
  }
];

const questionBoxContainer1 = document.getElementById('question-box-container1');
const questionBoxContainer2 = document.getElementById('question-box-container2');
const submitButton = document.getElementById('submit-button');

function buildTest(questions, num) {

  const questionBox = [];

  questions.forEach(
    (currentQuestion, questionNumber) => {

      const questionText = [];
      for(letter in currentQuestion.questionText) {

        if((Object.keys(currentQuestion.questionText).length) > 1) {
          questionText.push(
            `<div id="question-text-label">${letter}:</div>
            <div id="question-text-line">${currentQuestion.questionText[`${letter}`]}</div>`
          )
        } else {
          questionText.push(
            `<div id="question-text-line">${currentQuestion.questionText[`${letter}`]}</div>`
          )
        }
      }

      const optionBox = [];
      for(number in currentQuestion.options) {
        optionBox.push(
          `<div class="option-box">
            <label>
              <input type="radio" name="question-${num}-${questionNumber}" value="${number}"/>
              <span style="color: gray;">${number}</span>&nbsp;&nbsp;${currentQuestion.options[`${number}`]}
            </label>
          </div>`
        )
      }
      
      questionBox.push(
        `<div class="question-box">
          <div class="check-mark-box"></div>
          <div id="question-number">
            ${questionNumber+1}
          </div>
          <div class="question-text-and-option-boxes">
            <div id="question-text">${questionText.join('')}</div>
            <div class="option-box-container">${optionBox.join('')}</div>
          </div>
        </div>`
      )
    }
  )

  return questionBox.join('');
}

questionBoxContainer1.innerHTML = buildTest(questions1, 1);
questionBoxContainer2.innerHTML = buildTest(questions2, 2);

function checkAnswers() {

  const optionBoxContainer1 = questionBoxContainer1.querySelectorAll('.option-box-container');
  const optionBoxContainer2 = questionBoxContainer2.querySelectorAll('.option-box-container');

  questions1.forEach(
    (currentQuestion, questionNumber) => {

      const selector = `input[name="question-1-${questionNumber}"]:checked`;
      const userAnswer = (optionBoxContainer1[questionNumber].querySelector(selector) || {}).value;
      const checkMarkBox = questionBoxContainer1.querySelectorAll('.check-mark-box');

      if(userAnswer === currentQuestion.answer) {
        optionBoxContainer1[questionNumber].style.color = 'blue';
        checkMarkBox[questionNumber].innerHTML = `<img src='correct-icon.png' class='result-icon'>`
      } else {
        optionBoxContainer1[questionNumber].style.color = 'red';
        checkMarkBox[questionNumber].innerHTML = `<img src='incorrect-icon.png' class='result-icon'>`
      }
    }
  )

  questions2.forEach(
    (currentQuestion, questionNumber) => {

      const selector = `input[name="question-2-${questionNumber}"]:checked`;
      const userAnswer = (optionBoxContainer2[questionNumber].querySelector(selector) || {}).value;
      const checkMarkBox = questionBoxContainer2.querySelectorAll('.check-mark-box');

      if(userAnswer === currentQuestion.answer) {
        optionBoxContainer2[questionNumber].style.color = 'blue';
        checkMarkBox[questionNumber].innerHTML = `<img src='correct-icon.png' class='result-icon'>`
      } else {
        optionBoxContainer2[questionNumber].style.color = 'red';
        checkMarkBox[questionNumber].innerHTML = `<img src='incorrect-icon.png' class='result-icon'>`
      }
    }
  )

}

submitButton.addEventListener('click', checkAnswers);