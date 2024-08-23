const mainbox = document.querySelector("#main-id");
const timerBox = document.querySelector(".Timer");
const scoreBox = document.querySelector(".Score");
const targetBox = document.querySelector(".Hit");

let targetNumber;
const fixedScore = 10;
let currentScore = 0;

function startGame() {
  createBubbles();
  startTimer();
  updateScore();
  generateTargetNumber();
}

function createBubbles() {
  const bubbleSize = 50; // Size of each bubble (width and height in pixels)
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const columns = Math.floor(screenWidth / bubbleSize);
  const rows = Math.floor(screenHeight / bubbleSize);

  let bubblesMarkup = "";
  for (let i = 0; i < rows * columns; i++) {
    const num = Math.floor(Math.random() * 10);
    bubblesMarkup += `<div id="circle" style="width:${bubbleSize}px; height:${bubbleSize}px;">${num}</div>`;
  }
  mainbox.innerHTML = bubblesMarkup;
}

function startTimer() {
  let count = 0;
  const timer = setInterval(() => {
    if (count < 60) {
      count++;
      timerBox.innerHTML = `${count}s`;
    } else {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function updateScore() {
  mainbox.addEventListener("click", (event) => {
    const clickedNum = event.target.textContent;
    if (clickedNum == targetNumber) {
      currentScore += fixedScore;
      createBubbles();
      generateTargetNumber();
      scoreBox.innerHTML = currentScore;
    }
  });
}

function generateTargetNumber() {
  targetNumber = Math.floor(Math.random() * 10);
  targetBox.innerHTML = targetNumber;
}

function endGame() {
  mainbox.innerHTML = `<div id="FinalText">Game Over</div>`;
  targetBox.innerHTML = "";
  timerBox.innerHTML = "";
}

document.querySelector("#ButtonStart").addEventListener("click", startGame);
