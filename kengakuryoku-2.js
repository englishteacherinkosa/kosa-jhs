const optionsContainer = document.getElementById('options-box');
const itemBoxContainer1 = document.getElementById('item-box-container1');
const itemBoxContainer2 = document.getElementById('item-box-container2');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

const questions1 = [
  {
    question: {
      A: "(\xa0\xa0\xa0\xa0\xa0) Ryota and Tsuyoshi in Asahi Park yesterday?",
      B: "Yes. They played soccer."
    },
    options: {
      1: "Is",
      2: "Are",
      3: "Was",
      4: "Were"
    },
    correctAnswer: "4"
  },
  {
    question: {
      A: "How was the party last week?",
      B: "Great. I enjoyed (\xa0\xa0\xa0\xa0\xa0) with many people."
    },
    options: {
      1: "talk",
      2: "to talk",
      3: "talking",
      4: "talked"
    },
    correctAnswer: "3"
  },
  {
    question: {
      A: "You (\xa0\xa0\xa0\xa0\xa0) to clean your room before dinner, Ted.",
      B: "OK, mom."
    },
    options: {
      1: "must",
      2: "go",
      3: "going",
      4: "have"
    },
    correctAnswer: "4"
  },
  {
    question: {
      A: "Our school will have a festival (\xa0\xa0\xa0\xa0\xa0) September 12th.",
      B: "That&#x2019;s good. I want to enjoy it."
    },
    options: {
      1: "in",
      2: "on",
      3: "for",
      4: "at"
    },
    correctAnswer: "2"
  }
];

const questions2 = [
  {
    question: {
      A: "I want to use this computer.",
      B: "Please tell me (\xa0\xa0\xa0\xa0\xa0) you use it."
    },
    options: {
      1: "when",
      2: "but",
      3: "because",
      4: "so"
    },
    correctAnswer: "1"
  },
  {
    question: {
      A: "Hiroto wants to see a lot of old pictures in the world. He will go to a (\xa0\xa0\xa0\xa0\xa0).",
      B: ""
    },
    options: {
      1: "zoo",
      2: "museum",
      3: "station",
      4: "restaurant"
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
itemBoxContainer2.innerHTML = buildTest(questions2, 2);


function checkAnswers() {

  const optionsContainers1 = itemBoxContainer1.querySelectorAll('.options-box');
  const optionsContainers2 = itemBoxContainer2.querySelectorAll('.options-box');

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

  questions2.forEach(
    (currentQuestion, questionNumber) => {

      const optionsContainer2 = optionsContainers2[questionNumber];
      const selector = `input[name=question2-${questionNumber}]:checked`;
      const userAnswer = (optionsContainer2.querySelector(selector) || {}).value;
      const checkMarkContainer2 = document.querySelectorAll('.check-mark-box2');

      if(userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        optionsContainers2[questionNumber].style.color = 'blue';
        checkMarkContainer2[questionNumber].innerHTML = `<img src='correct-icon.png' class='result-icon'>`;
      } else {
        optionsContainers2[questionNumber].style.color = 'red';
        checkMarkContainer2[questionNumber].innerHTML = `<img src='incorrect-icon.png' class='result-icon'>`;
      }
    }
  )

  console.log(numCorrect);
  resultsContainer.innerHTML = `点数：${numCorrect}/${questions1.length + questions2.length}`;
};

submitButton.addEventListener('click', checkAnswers);