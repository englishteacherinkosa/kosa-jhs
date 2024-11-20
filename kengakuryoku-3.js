const optionsContainer = document.getElementById('options-box');
const itemBoxContainer1 = document.getElementById('item-box-container1');
const itemBoxContainer2 = document.getElementById('item-box-container2');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

const questions1 = [
  {
    question: {
      A: "(\xa0\xa0\xa0\xa0\xa0) she studying now?",
      B: "Yes. She likes studying English."
    },
    options: {
      1: "Is",
      2: "Are",
      3: "Do",
      4: "Does"
    },
    correctAnswer: "1"
  },
  {
    question: {
      A: "I&#x2019;ll give you this book.",
      B: "Thank you. But it (\xa0\xa0\xa0\xa0\xa0) difficult for me."
    },
    options: {
      1: "reads",
      2: "watches",
      3: "looks",
      4: "says"
    },
    correctAnswer: "3"
  },
  {
    question: {
      A: "Did Mary go to the park?",
      B: "I think (\xa0\xa0\xa0\xa0\xa0) she went to her friend&#x2019;s house."
    },
    options: {
      1: "when",
      2: "this",
      3: "that",
      4: "and"
    },
    correctAnswer: "3"
  },
  {
    question: {
      A: "(\xa0\xa0\xa0\xa0\xa0) bag is this?",
      B: "It&#x2019;s Yumi&#x2019;s."
    },
    options: {
      1: "What",
      2: "Who",
      3: "Which",
      4: "Whose"
    },
    correctAnswer: "4"
  }
];

const questions2 = [
  {
    question: {
      A: "What is your father&#x2019;s (\xa0\xa0\xa0\xa0\xa0)?",
      B: "He is a teacher. He teaches math."
    },
    options: {
      1: "question",
      2: "name",
      3: "job",
      4: "friend"
    },
    correctAnswer: "3"
  },
  {
    question: {
      A: "You can become a member of our soccer team (\xa0\xa0\xa0\xa0\xa0) you like.",
      B: "Thank you, but I&#x2019;m interested in the tennis team."
    },
    options: {
      1: "and",
      2: "because",
      3: "if",
      4: "but"
    },
    correctAnswer: "3"
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
