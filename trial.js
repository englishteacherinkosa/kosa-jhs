const optionsContainer = document.getElementById('options-box');
const itemBoxContainer1 = document.getElementById('item-box-container1');
const itemBoxContainer2 = document.getElementById('item-box-container2');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

const questions1 = [
  {
    question: {
      A: "(\xa0\xa0\xa0\xa0\xa0) notebook is this?",
      B: "It&#x2019;s Miyu&#x2019;s."
    },
    options: {
      1: "Who",
      2: "Which",
      3: "Whose",
      4: "How"
    },
    correctAnswer: "3"
  },
  {
    question: {
      A: "(\xa0\xa0\xa0\xa0\xa0) your brothers play soccer?",
      B: "Yes. I sometimes play with them."
    },
    options: {
      1: "Is",
      2: "Are",
      3: "Does",
      4: "Do"
    },
    correctAnswer: "4"
  },
  {
    question: {
      A: "Is Keigo your friend?",
      B: "Yes. I always go to the park with (\xa0\xa0\xa0\xa0\xa0)"
    },
    options: {
      1: "he",
      2: "his",
      3: "him",
      4: "them"
    },
    correctAnswer: "3"
  },
  {
    question: {
      A: "(\xa0\xa0\xa0\xa0\xa0) run in the room.",
      B: "I&#x2019;m sorry."
    },
    options: {
      1: "Do",
      2: "Not",
      3: "Don&#x2019;t",
      4: "Aren&#x2019;t"
    },
    correctAnswer: "3"
  },
  {
    question: {
      A: "Do you like music?",
      B: "Yes. But I (\xa0\xa0\xa0\xa0\xa0) sing well."
    },
    options: {
      1: "can&#x2019;t",
      2: "can",
      3: "aren&#x2019;t",
      4: "are"
    },
    correctAnswer: "1"
  },
  {
    question: {
      A: "Are John and Tom basketball fans?",
      B: "No, (\xa0\xa0\xa0\xa0\xa0) aren&#x2019;t. They like baseball."
    },
    options: {
      1: "them",
      2: "they",
      3: "us",
      4: "we"
    },
    correctAnswer: "2"
  }
];


function buildTest(questions, num) {

  const itemBox = [];
  
  questions.forEach(
    (currentQuestion, questionNumber) => {
      
      const options = [];
      for(number in currentQuestion.options) {
        options.push(
          `<div class="option-box">
            <label>
              <input type="radio" name="question${num}-${questionNumber}" value="${number}"/>
              <strong>${number}</strong>&nbsp;&nbsp;${currentQuestion.options[number]}
            </label>
          </div>`
        );
      }

      itemBox.push(
        `<div id="item-box">
          <div class="check-mark-box${num}"></div>
          <div class="question-number-box">
            <span class="question-number">${questionNumber+1}</span>
          </div>
          <div class="question-box">
            <div class="question-A">
              <div class="question-A-letter">
                A:
              </div>
              <div class="question-A-text">
                ${currentQuestion.question['A']}
              </div>
            </div>
            <div class="question-B">
              <div class="question-B-letter">
                B:
              </div>
              <div class="question-B-text">
                ${currentQuestion.question['B']}
              </div>
            </div>
            <div class="options-box">${options.join('')}</div>
          </div>
        </div>`
      )
    }
  )

  return itemBox.join('');
};

itemBoxContainer1.innerHTML = buildTest(questions1, 1);

function checkAnswers() {

  const optionsContainers1 = itemBoxContainer1.querySelectorAll('.options-box');

  let numCorrect = 0;

  questions1.forEach(
    (currentQuestion, questionNumber) => {

      const optionsContainer1 = optionsContainers1[questionNumber];
      const selector = `input[name=question1-${questionNumber}]:checked`;
      const userAnswer = (optionsContainer1.querySelector(selector) || {}).value;
      const checkMarkContainer1 = document.querySelectorAll('.check-mark-box1');

      if(userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        optionsContainers1[questionNumber].style.color = 'blue';
        checkMarkContainer1[questionNumber].innerHTML = `<img src='correct-icon.png' class='result-icon'>`;
      } else {
        optionsContainers1[questionNumber].style.color = 'red';
        checkMarkContainer1[questionNumber].innerHTML = `<img src='incorrect-icon.png' class='result-icon'>`;
      }
    }
  )

  console.log(numCorrect);
  resultsContainer.innerHTML = `点数：${numCorrect}/${questions1.length}`;
};

submitButton.addEventListener('click', checkAnswers);