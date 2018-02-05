var Word = require('./word');
var inquirer = require('inquirer');
const chalk = require('chalk');

var lives;
var randomword;
var WordCons;

var countries = ["BULGARIA", "ROMANIA", "AUSTRALIA", "CHILE", "BRAZIL", "CANADA", "SPAIN", "INDIA", "AFGHANISTAN", "ALBANIA", "ALGERIA", "ARGENTINA", "AUSTRALIA", "AZERBAIJAN", "BELGIUM", "BOLIVIA", "BRAZIL", "CAMBODIA", "CHAD", "DENMARK"];

function setPlay() {
    randomword = getRandomCountry();
    WordCons = new Word(randomword);
    var count = 0;
    lives = 10;
    var guessed = [];
}


var continueGame = function () {
    if (lives != 0) {
        inquirer.prompt([
            {
                name: 'name',
                message: 'Guess a letter !'
            },
        ]).then(function (answers) {

            WordCons.passCharacter(answers.name.toUpperCase());
            //console.log(checkletter);
            // Check letter guessed
            var checkletter = WordCons.checkLetter(answers.name.toUpperCase());
            if (checkletter > 0) {
                console.log(chalk.bold.green("Correct !!"));
                console.log("**********")
            } else {
                console.log(chalk.bold.red("InCorrect !!"));
                console.log("**********")
                lives--;
                console.log(chalk.bold.red("lives left" + " " + lives));
            }

            console.log(WordCons.word());
            checkWordGuessed(WordCons.word());
            continueGame();

        });
    }
    else {
        console.log("\nGame Over");
    }
}

function getRandomCountry() {
    return countries[Math.floor(Math.random() * countries.length)];
}

function checkWordGuessed(checkword) {
    var guessword = checkword.split('_').join('').replace(/\s/g, '');
    //console.log(guessword.replace(/\s/g, ''));
    //console.log(randomword);
    if (randomword == guessword) {
        //reset lives and game
        console.log(chalk.bold.green("You Win!! Lets Continue"))
        resetGame();
    }
}

function resetGame() {
    setPlay();
    //continueGame();
}

setPlay();
continueGame();

