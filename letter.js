function Letter(letter){
    this.letter = letter;
    this.guessed = false;
    this.returnCharacter = function(){
         if(this.guessed == true){
             return this.letter;
         } else{
            return "_";          
         }
    };
    this.updateGuessed = function(charactor){
        //if Correct return setup this.guess to true
        if(this.letter == charactor) {
            this.guessed = true;
        } 
    };
}


//var checkletter = new Letter('L');

// console.log(checkletter.returnCharacter());
// console.log("___________________");
// checkletter.updateGuessed("L");
// console.log(checkletter.guessed);
// console.log(checkletter.returnCharacter());

module.exports = Letter;