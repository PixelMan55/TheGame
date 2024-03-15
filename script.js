let y = Math.floor(Math.random() * 10 + 1);
let guess = 1;
document.getElementById("submitGuess").onclick = function(){
    let x = document.getElementById("guessField").value;
    if(x == y)
    {
    alert("Nice! You guessed it right in"
    + guess + " GUESS ")
    }
    else{
        alert("You did not guess correctly. " + guess + " GUESS ")
    }
}