const optionsContainer = document.getElementById('options-box');
const itemBoxContainer1 = document.getElementById('item-box-container1');
const itemBoxContainer2 = document.getElementById('item-box-container2');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

const questions1 = [
  {
    question: {
      A: "Did you see Mike yesterday?",
      B: "Yes, I (\xa0\xa0\xa0\xa0\xa0). I saw him at the library."
    },
    options: {
      a: "do",
      b: "am",
      c: "did",
      d: "was"
    },
    correctAnswer: "c"
  },
  {
    question: {
      A: "There (\xa0\xa0\xa0\xa0\xa0) a lot of books in your father&#x2019;s room.",
      B: "He likes reading very much."
    },
    options: {
      a: "is",
      b: "are",
      c: "have",
      d: "has"
    },
    correctAnswer: "b"
  },
  {
    question: {
      A: "How was the festival?",
      B: "It was exciting. I enjoyed (\xa0\xa0\xa0\xa0\xa0) with others."
    },
    options: {
      a: "dancing",
      b: "was dancing",
      c: "to dance",
      d: "danced"
    },
    correctAnswer: "a"
  },
  {
    question: {
      A: "I have a lot of homework today.",
      B: "You (\xa0\xa0\xa0\xa0\xa0) play video games today."
    },
    options: {
      a: "can",
      b: "will",
      c: "don't have to",
      d: "must not"
    },
    correctAnswer: "d"
  }
];

const questions2 = [
  {
    question: {
      A: "What are the (\xa0\xa0\xa0\xa0\xa0) of the flowers, <i>ajisai</i>?",
      B: "They are white, blue, and red. They are beautiful."
    },
    options: {
      a: "fruits",
      b: "kinds",
      c: "colors",
      d: "places"
    },
    correctAnswer: "c"
  },
  {
    question: {
      A: "What was you brother doing (\xa0\xa0\xa0\xa0\xa0) you came home?",
      B: "B: He was watching TV."
    },
    options: {
      a: "when",
      b: "because",
      c: "that",
      d: "if"
    },
    correctAnswer: "a"
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