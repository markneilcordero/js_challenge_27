function hangmanGame()
{
    const prompt = require('prompt-sync')();

    console.clear();
    console.log("Welcome to Hangman!");
    const secretWord = prompt("Player 1, enter a secret word: ").toUpperCase();

    console.clear();
    const secretArray = secretWord.split("");
    let displayWord = Array(secretWord.length).fill("*");
    let remainingLives = 5;

    let guessedLetters = [];

    console.log("Let the guessing begin!");

    while (remainingLives > 0 && displayWord.join("") !== secretWord)
    {
        console.log(`\nWord to guess: ${displayWord.join("")}`);
        console.log(`You have ${remainingLives} lives left.`);

        const letter = prompt("Letter? ").toUpperCase();

        if (guessedLetters.includes(letter))
        {
            console.log("You've already guessed that letter! Try another.");
            continue;
        }

        guessedLetters.push(letter);

        if (secretArray.includes(letter))
        {
            secretArray.forEach((char, index) => {
                if (char === letter)
                {
                    displayWord[index] = letter;
                }
            });
            console.log("Good guess!");
        }
        else
        {
            remainingLives--;
            console.log("Wrong guess! You lose a life.");
        }
    }

    if (displayWord.join("") === secretWord)
    {
        console.log(`\nCongratulations! You guessed the word: ${secretWord}`);
    }
    else
    {
        console.log(`\nOut of lives! The correct word was: ${secretWord}`);
    }
}

hangmanGame();