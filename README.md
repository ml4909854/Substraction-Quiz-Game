# Netlify link : https://spiffy-biscochitos-73393f.netlify.app/
# Substraction-Quiz-Game
The Subtraction Quiz Game is a fun and interactive web-based game that challenges users to answer random subtraction questions. Users are presented with a subtraction problem, and they must enter the correct answer to score points. The game tracks the score, which persists across page reloads using localStorage.
# Features
Random Subtraction Questions: The game generates random subtraction problems (e.g., "What is 50 minus 20?").
Score Tracking: The user’s score increases with correct answers and decreases with incorrect answers.
Persistent Score: The score is saved in localStorage, ensuring that users' progress is retained even after refreshing the page.
First-Time Load: Upon first use, the game clears localStorage, ensuring the score starts at 0.
New Questions After Submission: A new subtraction question is presented after each answer submission.
# Technologies Used
HTML: For structuring the webpage and displaying questions, answers, and the score.
CSS: For styling the quiz interface, making it user-friendly and visually appealing.
JavaScript: For generating random subtraction questions, handling user input, updating the score, and managing game flow.
# How It Works
When the game is loaded, it retrieves the score from localStorage. If no previous score exists (i.e., on the first load), it initializes the score to 0.
The game displays a random subtraction problem (e.g., "What is 80 minus 30?").
The user inputs their answer, and the score is updated based on whether the answer is correct or incorrect.
After submitting the answer, the game generates a new subtraction question and continues the game.
# Installation
Clone or download the repository.
Open the index.html file in your browser to start playing.
Example Question
What is 60 minus 25?
# Future Enhancements
Add difficulty levels (e.g., easy, medium, and hard) to increase challenge.
Implement a timer to add a time constraint for answering each question.
Track and display the total number of correct answers.
