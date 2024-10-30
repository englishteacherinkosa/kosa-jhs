const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    questionA: "A: Did you see Mike yesterday?",
    questionB: "B: Yes, I (\xa0\xa0\xa0\xa0\xa0). I saw him at the library.",
    answers: {
      a: "do",
      b: "am",
      c: "did",
      d: "was"
    },
    correctAnswer: "c"
  },
  {
    questionA: "A: There (\xa0\xa0\xa0\xa0\xa0) a lot of books in your father's room.",
    questionB: "B: He likes reading very much.",
    answers: {
      a: "is",
      b: "are",
      c: "have",
      d: "has"
    },
    correctAnswer: "b"
  },
  {
    questionA: "A: How was the festival?",
    questionB: "B: It was exciting. I enjoyed (\xa0\xa0\xa0\xa0\xa0) with others.",
    answers: {
      a: "dancing",
      b: "was dancing",
      c: "to dance",
      d: "danced"
    },
    correctAnswer: "a"
  },
  {
    questionA: "A: I have a lot of homework today.",
    questionB: "B: You (\xa0\xa0\xa0\xa0\xa0) play video games today.",
    answers: {
      a: "can",
      b: "will",
      c: "don't have to",
      d: "must not"
    },
    correctAnswer: "d"
  },
  {
    questionA: "A: What are the (\xa0\xa0\xa0\xa0\xa0) of the flowers, <i>ajisai</i>?",
    questionB: "B: They are white, blue, and red. They are beautiful",
    answers: {
      a: "fruits",
      b: "kinds",
      c: "colors",
      d: "places"
    },
    correctAnswer: "c"
  },
  {
    questionA: "A: What was you brother doing (\xa0\xa0\xa0\xa0\xa0) you came home?",
    questionB: "B: He was watching TV.",
    answers: {
      a: "when",
      b: "because",
      c: "that",
      d: "if"
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
