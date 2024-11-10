// Player object constructor
function Player() {
    this.roundScore = 0;
    this.totalScore = 0;
    this.diceValues = [];
}

// Function to generate a random dice roll between 1 and 6
function getRandomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to roll two dice, calculate and update scores based on game rules
Player.prototype.rollDice = function () {
    this.diceValues = [getRandomDice(), getRandomDice()];
    let [dice1, dice2] = this.diceValues;

    if (dice1 === 1 || dice2 === 1) {
        this.roundScore = 0;
    } else if (dice1 === dice2) {
        this.roundScore = (dice1 + dice2) * 2;
    } else {
        this.roundScore = dice1 + dice2;
    }

    this.totalScore += this.roundScore;
};

// Initialize players and counters
const player = new Player();
const computer = new Player();
let roundCount = 0;

// Roll Dice Button functionality
document.getElementById('roll-btn').addEventListener('click', function () {
    if (roundCount < 3) {
        // Roll dice and update scores for player and computer
        player.rollDice();
        computer.rollDice();
        roundCount++;

        // Display current dice and scores
        displayDice(player, 'player-dice');
        displayDice(computer, 'computer-dice');
        updateScores();

        // Check if it's the final round
        if (roundCount === 3) {
            displayWinner();
        }
    }
});

// Reset Button functionality
document.getElementById('reset-btn').addEventListener('click', function () {
    resetGame();
});

// Display Dice images based on roll
function displayDice(playerObj, elementId) {
    const diceContainer = document.getElementById(elementId);
    diceContainer.innerHTML = playerObj.diceValues.map(value => `<img src="images/dice-${value}.png" alt="Dice ${value}">`).join('');
}

// Update scores in HTML
function updateScores() {
    document.getElementById('player-round-score').textContent = player.roundScore;
    document.getElementById('player-total-score').textContent = player.totalScore;
    document.getElementById('computer-round-score').textContent = computer.roundScore;
    document.getElementById('computer-total-score').textContent = computer.totalScore;
}

// Display Winner Message
function displayWinner() {
    const message = document.getElementById('winner-message');
    if (player.totalScore > computer.totalScore) {
        message.textContent = 'Player Wins!';
    } else if (player.totalScore < computer.totalScore) {
        message.textContent = 'Computer Wins!';
    } else {
        message.textContent = 'It\'s a Tie!';
    }
}

// Reset Game
function resetGame() {
    player.totalScore = 0;
    player.roundScore = 0;
    computer.totalScore = 0;
    computer.roundScore = 0;
    roundCount = 0;
    updateScores();
    document.getElementById('player-dice').innerHTML = '';
    document.getElementById('computer-dice').innerHTML = '';
    document.getElementById('winner-message').textContent = '';
}
