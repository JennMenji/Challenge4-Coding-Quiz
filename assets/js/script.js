var startButton = document.getElementById("start-btn");
var timer = document.querySelector("#timer");
var mainPage = document.querySelector("#main-page");
var questionsSection = document.getElementById("questions-section");
var firstQuestionEl;

// create a question with a header and 4 buttons for possible answers

//Array with all Questions
var questions = [
  {
    question: "This is your first question?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "c",
  },
  {
    question: "This is your second question?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "a",
  },
  {
    question: "This is your third question?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "b",
  },
  {
    question: "This is your fourth question?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "d",
  },
  {
    question: "This is your fifth question?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: "a",
  },
];

// making the objects within the array a button
var creatingButtons = function () {
  var questionSectionEl = document.createElement("div");
  var questionTitle = document.createElement("h2");
  var questionAnswer = document.createElement("button");
  questionAnswer.className = "btn";

  questionSectionEl.appendChild(questionTitle);
  questionSectionEl.appendChild(questionAnswer);
  mainPage.appendChild(questionSectionEl);

  console.log(mainPage);

  //   questionSectionEl.className = "questions";
  //   questionSectionEl.textContent = questions[0].question;

  //   for (var i = 0; i < questions.answers; i++) {
  //     var question = document.createElement("button");
  //     question.textContent = question.question[i].answers;
  //   }
  //   console.log(questionSectionEl.nodeType);
  //   mainPage = questionSectionEl;

  //   var deleteButtonEl = document.createElement("button");
  //   deleteButtonEl.textContent = "Delete";
  //   deleteButtonEl.className = "btn";
  //   mainPage = deleteButtonEl;
};

questions.forEach(function (question) {
  var question = document.createElement("button");
  question.textContent = question.question[i].answers;
});

// Timer Function
function timerCounter() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    if (timeLeft >= 0) {
      timer.textContent = "Time Remaining: " + timeLeft;
      console.log("There are " + timeLeft + " seconds left");
      timeLeft--;
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Start Quiz Function
var startQuiz = function () {
  console.log("the quiz has started");
  timerCounter(creatingButtons());

  //   creatingButtons();
};

startButton.onclick = startQuiz;

// When start button clicked then start timer starts and the user is presented with a question
// When the user answers a question then the a message is displayed whether the response was incorrect or correct and is then presented with another question
// When an question is answered incorrectly then the time is subtracted from the clock
// When all questions are answered or the timer reaches 0 then the game is over
// When the game is over then then the user can save their initials and score

/* <main>
  <!-- Question Section -->
  <section class="questions-section">
    <!-- First Set -->
    <div id="questions" class="questions">
      <h2 id="first-question" class="question"></h2>
      <ul id="first-answer-set" class="answers btn"></ul>
    </div>
    <!-- Second Set -->
    <div id="questions" class="questions">
      <h2 id="second-question" class="question"></h2>
      <ul id="second-answer-set" class="answers btn"></ul>
    </div>
    <!-- Third Set -->
    <div id="questions" class="questions">
      <h2 id="third-question" class="question"></h2>
      <ul id="third-answer-set" class="answers btn"></ul>
    </div>
    <!-- Fourth Set -->
    <div id="questions" class="questions">
      <h2 id="fourth-question" class="question"></h2>
      <ul id="fourth-answer-set" class="answers btn"></ul>
    </div>
    <!-- Fifth Set -->
    <div id="questions" class="questions">
      <h2 id="fifth-question" class="question"></h2>
      <ul id="fifth-answer-set" class="answers btn"></ul>
    </div>
  </section>
</main> */
