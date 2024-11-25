const questions1 = [
  {
    questionText: {
      A: "(&emsp;&emsp;) is Mr. Brown from?",
      B: "He&#x2019;s from London."
    },
    options: {
      1: "What",
      2: "Who",
      3: "Where",
      4: "When"
    },
    answer: "3"
  },
  {
    questionText: {
      A: "Did you go to the library yesterday?",
      B: "Yes. I (&emsp;&emsp;) there with Ryota."
    },
    options: {
      1: "am",
      2: "was",
      3: "do",
      4: "did"
    },
    answer: "2"
  },
  {
    questionText: {
      A: "Mom, can I go to the park now?",
      B: "No, you can&#x2019;t. You (&emsp;&emsp;) do you homework first."
    },
    options: {
      1: "must",
      2: "must not",
      3: "can",
      4: "can't"
    },
    answer: "1"
  },
  {
    questionText: {
      A: "Were you at home yesterday?",
      B: "Yes. I enjoyed (&emsp;&emsp;) TV with my sister."
    },
    options: {
      1: "watch",
      2: "watched",
      3: "to watch",
      4: "watching"
    },
    answer: "4"
  }
];

const questions2 = [
  {
    questionText: {
      A: "Let&#x2019;s go to the (&emsp;&emsp;) this weekend",
      B: "That&#x2019;s sounds good. I want to take pictures of the animals."
    },
    options: {
      1: "museum",
      2: "zoo",
      3: "station",
      4: "temple"
    },
    answer: "2"
  },
  {
    questionText: {
      A: "You look happy today.",
      B: "Yes. I&#x2019;m happy (&emsp;&emsp;) I got a new bag for my birthday."
    },
    options: {
      1: "because",
      2: "when",
      3: "if",
      4: "but"
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