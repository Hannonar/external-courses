String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }
HangProt = Object.create(Object);
Hangman = Object.create(HangProt);
Hangman = function(Word)
{
    this.startAgain(Word);
    
}
Hangman.prototype.guess = function(Letter)
{
    if(this._guessed.indexOf("_") === -1) console.log("You won!");
    else
    {
        var s = 0;
        var x = Letter.toLowerCase();
        var a = this._word.indexOf(x,s);
        if(a!=-1)
        {
            while(a!=-1)
            {
                this._guessed = this._guessed.replaceAt(a,x);
                s = a+1;
                a = this._word.indexOf(x,s);
            }
            if(this._guessed.indexOf("_") === -1) console.log("You won!")
            return 1;
        }
        else 
        {
            if(this._errors === 0) 
            {
                console.log("Game Over");
            }
            else this._errors--;
            this._wrong.push(x);
            return 0;
        }
    }
};
Hangman.prototype.getGuessedString = function()
{
    return this._guessed;
};
Hangman.prototype.getErrorsLeft = function()
{
    return this._errors;
}
Hangman.prototype.getWrongSymbols = function()
{
    return this._wrong;
}
Hangman.prototype.getStatus = function()
{
    return [this.getGuessedString(), this.getErrorsLeft(), this.getWrongSymbols()];
}
Hangman.prototype.startAgain = function(Word)
{
    this._word = Word.toLowerCase();
    this._errors = 6;
    this._wrong = [];
    this._guessed = "_".repeat(Word.length);
}


var hangman = new Hangman('webpurple');
hangman.guess("w");
hangman.guess("e");
console.log(hangman.getGuessedString());
hangman.guess('z');
hangman.guess('x');
hangman.guess('q');
console.log(hangman.getErrorsLeft());
console.log(hangman.getWrongSymbols());
hangman.startAgain('hangman');
console.log(hangman.getStatus());
hangman.guess('H');
hangman.guess('a');
hangman.guess('n');
hangman.guess('g');
hangman.guess('m');
