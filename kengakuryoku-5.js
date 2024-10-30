const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    questionA: "A: (\xa0\xa0\xa0\xa0\xa0) is Mr. Brown from?",
    questionB: "B: He's from London.",
    answers: {
      a: "What",
      b: "Who",
      c: "Where",
      d: "When"
    },
    correctAnswer: "c"
  },
  {
    questionA: "A: Did you go to the library yesterday?",
    questionB: "B: Yes. I (\xa0\xa0\xa0\xa0\xa0) there with Ryota.",
    answers: {
      a: "am",
      b: "was",
      c: "do",
      d: "did"
    },
    correctAnswer: "b"
  },
  {
    questionA: "A: Mom, can I go to the park now?",
    questionB: "B: No, you can't. You (\xa0\xa0\xa0\xa0\xa0) do you homework first.",
    answers: {
      a: "must",
      b: "must not",
      c: "can",
      d: "can't"
    },
    correctAnswer: "a"
  },
  {
    questionA: "A: Were you at home yesterday?",
    questionB: "B: Yes. I enjoyed (\xa0\xa0\xa0\xa0\xa0) TV with my sister.",
    answers: {
      a: "watch",
      b: "watched",
      c: "to watch",
      d: "watching"
    },
    correctAnswer: "d"
  },
  {
    questionA: "A: Let's go to the (\xa0\xa0\xa0\xa0\xa0) this weekend.",
    questionB: "B: That sound good. I want to take pictures of animals",
    answers: {
      a: "museum",
      b: "zoo",
      c: "station",
      d: "temple"
    },
    correctAnswer: "b"
  },
  {
    questionA: "A: You look happy today.",
    questionB: "B: Yes. I'm happy (\xa0\xa0\xa0\xa0\xa0) I got a new bag for my birtday.",
    answers: {
      a: "because",
      b: "when",
      c: "if",
      d: "but"
    },
    correctAnswer: "a"
  }
];

function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter}:
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.questionA} </div>
        <div class="question"> ${currentQuestion.questionB} </div>
        <div class="answers"> ${answers.join('')} </div>
        <hr>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
};

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'blue';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

buildQuiz();

submitButton.addEventListener('click', showResults);
