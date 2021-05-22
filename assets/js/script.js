var startButton = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");

function timerCounter() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    if (timeLeft >= 0) {
      timer.textContent = timeLeft;
      console.log("There are " + timeLeft + " seconds left");
      timeLeft--;
    } else {
      clearInterval(timeInterval);
    }
  }, 1000);
}

startButton.onclick = timerCounter;

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
