### **Hangman Game**

---

## **Welcome!**  
Get ready for a fun and classic game of **Hangman**! In this two-player game, **Player 1** chooses a secret word, and **Player 2** has 5 lives to guess it, one letter at a time. Can you reveal the full word before you run out of lives?

---

## **What to Expect**  
- **Secret Word Input:** **Player 1** enters the word to be guessed (kept hidden).  
- **Letter Guesses:** **Player 2** guesses one letter at a time.  
- **Life System:** **Player 2** starts with 5 lives—each wrong guess costs 1 life.  
- **Progress Display:** The word is displayed with asterisks (`*`), revealing correct letters as they’re guessed.  
- **Winning:** **Player 2** wins if they guess the full word before running out of lives.  
- **Losing:** If **Player 2** uses up all their lives, they lose, and the word is revealed.

---

## **How to Play**  
1. **Install Node.js:**  
   Download it from [https://nodejs.org/](https://nodejs.org/).  

2. **Install Dependencies:**  
   Run this in your terminal:  
   ```bash
   npm install prompt-sync
   ```  

3. **Start the Game:**  
   Save the script as `index.js` and run:  
   ```bash
   node index.js
   ```  

---

## **Gameplay Flow**  
1. **Player 1** enters a secret word (it’s hidden after entry).  
2. **Player 2** guesses letters:
   - If correct, the letter is revealed in the word.  
   - If wrong, **Player 2** loses 1 life.  

---

## **Sample Game Session**  
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

---

## **Can You Win?**  
Challenge a friend, or play solo by trying to guess a randomly chosen word. Have fun and show off your word-guessing skills! 📝✨
