const resultContainer = document.getElementById("wheel-result");
let currentDegree = 0;
const wheel = document.getElementById("wheel");
const results = ["100", "200", "500", "1000", "LOSE", "JACKPOT", "350", "250"];

const scoreCard = document.querySelector(".tables").querySelector("tbody");
const recordRows = Array.from(scoreCard.querySelectorAll("tr"));

let round = 1;

// Function to trigger confetti
function showConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function spinWheel() {
  if (round > 5) {
    location.reload();
  }
  
  const cellIndex = round - 1;
  const resultCell = recordRows[cellIndex].querySelector(".recordResult");
  resultCell.textContent = "--";
  resultContainer.textContent = "";

  let randomDegree = Math.floor(Math.random() * 360) + 360 * 5;
  currentDegree += randomDegree;
  wheel.style.transition = "transform 4s linear";
  wheel.style.transform = `rotate(${currentDegree}deg)`;

  // Simulating the result selection after wheel stops
  setTimeout(() => {
    const result = results[Math.floor(Math.random() * results.length)];
    resultContainer.textContent = result;
    resultCell.textContent = result;
    wheel.style.transition = "none";

    // Show confetti if the result is "JACKPOT"
    if (result === "JACKPOT") {
      showConfetti();
    }
  }, 4000);

  round++;
}





