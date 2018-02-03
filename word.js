var letter = require('./letter');
var newletterarray;
function Word(word){
    this.letterarray = word.split('').map(function(item){return new letter(item)});
    this.word = function(){
        var wordformat = "";
        this.letterarray.forEach(function(item,index){
            //console.log(item.returnCharacter());
            wordformat = wordformat + " " +  item.returnCharacter();

        }); 
        console.log(wordformat);          
    };
    this.passCharacter = function(character){
        // call updateGuessed(character);
        this.letterarray.forEach(function(item,index){
            item.updateGuessed(character);
        });
    
    };
}

//var checkletter = new letter('L');
// console.log(checkletter);
// console.log(checkletter.returnCharacter());
// console.log("___________________");
// checkletter.updateGuessed('M');
// console.log(checkletter.guessed);
// console.log(checkletter.returnCharacter());


// var newword = new Word("Abhishek");
// console.log(newword.letterarray);
// console.log(newword.word());
// console.log("************************");
// newword.word(newword.passCharacter('i'));
// console.log(newword.letterarray);
// console.log(newword.word());
// console.log("*************************")
// newword.word(newword.passCharacter('b'));
// console.log(newword.letterarray);
// console.log(newword.word());


module.exports = Word;