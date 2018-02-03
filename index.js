var Word = require('./word');
var inquirer = require('inquirer');

var countries = ["BULGARIA", "ROMANIA", "AUSTRALIA", "CHILE", "BRAZIL", "CANADA", "SPAIN", "INDIA", "AFGHANISTAN", "ALBANIA", "ALGERIA", "ARGENTINA", "AUSTRALIA", "AZERBAIJAN","BELGIUM","BOLIVIA", "BRAZIL","CAMBODIA", "CHAD", "DENMARK"];

var randomword = getRandomCountry();

var WordCons = new Word(randomword);
var count = 0;
var lives = 10;

var continueGame = function () {
    if (count < randomword.length) {
        inquirer.prompt([
            {
                name: 'name',
                message: 'Guess a letter !'
            },
        ]).then(function (answers) {

            WordCons.passCharacter(answers.name.toUpperCase());
            WordCons.word();            
            //console.log(WordCons.word());
            count++;
            continueGame();
        });
    }
}

function getRandomCountry() {

    return countries[Math.floor(Math.random() * countries.length)];
    
}

continueGame();

