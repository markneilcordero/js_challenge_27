### Documentation for Challenge 27: Hangman Game

---

## **Overview**  
This is a simple Hangman game where **Player 1** enters a secret word, and **Player 2** guesses the word one letter at a time. Player 2 has 5 lives to guess the word correctly.

---

## **Features**  
- **Word Input:** Player 1 types the secret word.  
- **Guessing Mechanism:** Player 2 guesses one letter at a time.  
- **Life System:** Player 2 starts with 5 lives. A wrong guess deducts 1 life.  
- **Word Display:** The word is displayed with asterisks (`*`) for hidden letters. Correct guesses reveal the correct positions.  
- **Winning Condition:** Player 2 wins if they reveal the full word before lives run out.  
- **Losing Condition:** Player 2 loses if all lives are used and the word is not fully revealed.  

---

## **Instructions**  
1. Install Node.js: [https://nodejs.org/](https://nodejs.org/)  
2. Open a terminal and run:  
   ```bash
   npm install prompt-sync
   ```  
3. Save the file as `hangman.js` and run the game using:  
   ```bash
   node hangman.js
   ```  

---

## **Gameplay Flow**  
1. **Player 1** enters the secret word (hidden after entering).  
2. **Player 2** guesses letters until:  
   - The word is fully revealed (win).  
   - They run out of lives (lose).  

---

## **Sample Output**  
```
Welcome to Hangman!  
Player 1, enter a secret word: HELLO  

Let the guessing begin!  
Word to guess: *****  
You have 5 lives left.  
Letter? E  

Good guess!  
Word to guess: *E***  
You have 5 lives left.  
Letter? Z  

Wrong guess! You lose a life.  
Word to guess: *E***  
You have 4 lives left.  
```