Dice Game  - Author: Emma Lee 

Overview

This is a simple and interactive Dice Game where a user competes against the computer. Both the user and the computer roll a pair of dice three times, and the scores are calculated based on the dice results. The player with the highest accumulated score after three rounds wins the game. The game has a fun and engaging design with a fun color scheme and animations.

Features

The user rolls a pair of dice against the computer.
If any of the dice show a 1, the score for that round is 0.
Rolling a pair of identical dice doubles the score for that round.
The game tracks and displays scores after each round.
After three rounds, the winner is announced.
The game includes a reset button to start a new game.
Technologies Used

HTML: The structure of the game.
CSS: Styling of the game, compiled from SASS for better organization.
JavaScript: Logic for the game, including random dice roll, score calculation, and animations.
SASS: Used for styling, with variables and mixins to enhance reusability.

Click the Roll Dice button to roll the dice for both the player and the computer.
The game will show the current roll and the score for each round.
After three rounds, the game will calculate the total score and display the winner.
Click the Reset Game button to start a new game at any time.
Design Overview

Color Scheme: Feminine shades of purple, pink, and red to create an engaging and playful aesthetic.
Responsive Layout: The game is designed to work well on both desktop and mobile devices.
Animations: Dice roll animations and hover effects on buttons to enhance user experience.
Files in This Project

index.html: The main HTML file that structures the game page.
styles.scss: The source SASS file containing variables, mixins, and custom styles.
styles.css: The compiled CSS file generated from styles.scss.
game.js: The JavaScript file that contains the logic for rolling dice, calculating scores, and handling game flow.
images/: Folder containing the dice images used in the game.
