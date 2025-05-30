function rollDice() {
  const min = 1;
  const max = 6;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  const diceimg = document.getElementById("dice-img");
  const diceNumber = document.getElementById("dice-number");

  diceimg.classList.remove("shake");
  setTimeout(() => {
    diceimg.classList.add("shake");
  }, 10);

  if (random === 1) {
    diceimg.src = "images/dice-1.png";
  } else if (random === 2) {
    diceimg.src = "images/dice-2.png";
  } else if (random === 3) {
    diceimg.src = "images/dice-3.png";
  } else if (random === 4) {
    diceimg.src = "images/dice-4.png";
  } else if (random === 5) {
    diceimg.src = "images/dice-5.png";
  } else if (random === 6) {
    diceimg.src = "images/dice-6.png";
  }
  diceNumber.innerText = random;
}
