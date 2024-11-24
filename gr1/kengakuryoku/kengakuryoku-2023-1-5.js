const questions1 = [
  {
    questionText: {
      A: "Are you a soccer fan?",
      B: "Yes, (&emsp;&emsp;). I play it every day."
    },
    options: {
      1: "I am",
      2: "I&#x2019;m not",
      3: "I do",
      4: "I don&#x2019;t"
    },
    answer: "1"
  },
  {
    questionText: {
      A: "Can your brother play baseball?",
      B: "Yes. I sometimes play it with (&emsp;&emsp;)."
    },
    options: {
      1: "he",
      2: "his",
      3: "him",
      4: "her"
    },
    answer: "3"
  },
  {
    questionText: {
      A: "(&emsp;&emsp;) is that teacher?",
      B: "That is Mr. Inoue."
    },
    options: {
      1: "Who",
      2: "Whose",
      3: "What",
      4: "How"
    },
    answer: "1"
  },
  {
    questionText: {
      A: "Do you often play baseball with Mary?",
      B: "Yes. She and I (&emsp;&emsp;) good friends."
    },
    options: {
      1: "am",
      2: "is",
      3: "are",
      4: "do"
    },
    answer: "3"
  }
];

const questions2 = [
  {
    questionText: {
      A: "I like (&emsp;&emsp;) very much. I play the guitar every day."
    },
    options: {
      1: "music",
      2: "food",
      3: "pictures",
      4: "sports"
    },
    answer: "1"
  },
  {
    questionText: {
      A: "My brother studies English every day. He can (&emsp;&emsp;) it well."
    },
    options: {
      1: "play",
      2: "sing",
      3: "speak",
      4: "eat"
    },
    answer: "3"
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