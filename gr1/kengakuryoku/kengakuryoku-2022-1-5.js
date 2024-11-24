const questions1 = [
  {
    questionText: {
      A: "(&emsp;&emsp;) your sister make lunch on Saturdays and Sundays?",
      B: "Yes. I like her lunch."
    },
    options: {
      1: "Are",
      2: "Is",
      3: "Do",
      4: "Does"
    },
    answer: "4"
  },
  {
    questionText: {
      A: "(&emsp;&emsp;) ball is this?",
      B: "It&#x2019;s my sister&#x2019;s."
    },
    options: {
      1: "How",
      2: "What",
      3: "Which",
      4: "Whose"
    },
    answer: "4"
  },
  {
    questionText: {
      A: "(&emsp;&emsp;) play soccer here.",
      B: "I&#x2019;m sorry."
    },
    options: {
      1: "Don&#x2019;t",
      2: "Not",
      3: "Aren&#x2019;t",
      4: "Do"
    },
    answer: "1"
  },
  {
    questionText: {
      A: "Are you and your brother baseball fans?",
      B: "Yes, (&emsp;&emsp;) are."
    },
    options: {
      1: "they",
      2: "you",
      3: "we",
      4: "he"
    },
    answer: "3"
  }
];

const questions2 = [
  {
    questionText: {
      A: "Do you eat (&emsp;&emsp;) every day?",
      B: "Yes. I eat it at seven in the morning."
    },
    options: {
      1: "lunch",
      2: "breakfast",
      3: "school",
      4: "dinner"
    },
    answer: "2"
  },
  {
    questionText: {
      A: "I go to Okinawa in (&emsp;&emsp;). I like summer."
    },
    options: {
      1: "March",
      2: "August",
      3: "November",
      4: "January"
    },
    answer: "2"
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