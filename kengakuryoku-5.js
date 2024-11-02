const optionsContainer = document.getElementById('options-box');
const itemBoxContainer1 = document.getElementById('item-box-container1');
const itemBoxContainer2 = document.getElementById('item-box-container2');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

const questions1 = [
  {
    question: {
      A: "(&emsp;&emsp;) is Mr. Brown from?",
      B: "He's from London."
    },
    options: {
      1: "What",
      2: "Who",
      3: "Where",
      4: "When"
    },
    correctAnswer: "3"
  },
  {
    question: {
      A: "Did you go to the library yesterday?",
      B: "Yes. I (&emsp;&emsp;) there with Ryota."
    },
    options: {
      1: "am",
      2: "was",
      3: "do",
      4: "did"
    },
    correctAnswer: "2"
  },
  {
    question: {
      A: "Mom, can I do to the park now?",
      B: "No, you can't. You (&emsp;&emsp;) do you homework first."
    },
    options: {
      1: "must",
      2: "must not",
      3: "can",
      4: "can't"
    },
    correctAnswer: "1"
  },
  {
    question: {
      A: "Were you at home yesterday?",
      B: "Yes. I enjoyed (&emsp;&emsp;) TV with my sister."
    },
    options: {
      1: "watch",
      2: "watched",
      3: "to watch",
      4: "watching"
    },
    correctAnswer: "4"
  }
];

const questions2 = [
  {
    question: {
      A: "Let's go to the (&emsp;&emsp;) this weekend",
      B: "That's sounds good. I want to take pictures of the animals."
    },
    options: {
      1: "museum",
      2: "zoo",
      3: "station",
      4: "temple"
    },
    correctAnswer: "2"
  },
  {
    question: {
      A: "You look happy today.",
      B: "Yes. I'm happy (&emsp;&emsp;) I got a new bag for my birthday."
    },
    options: {
      1: "because",
      2: "when",
      3: "if",
      4: "but"
    },
    correctAnswer: "1"
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
  resultsContainer.innerHTML = `Score: ${numCorrect}/${questions1.length + questions2.length}`;
};

submitButton.addEventListener('click', checkAnswers);