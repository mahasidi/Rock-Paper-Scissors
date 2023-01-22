    const playOptions = ['rock', 'paper', 'scissors'];
    function getComputerChoice() {
      let randomNum = Math.floor(Math.random() * 3);
      return playOptions[randomNum];
    }

    function playRound(playerSelection, computerSelection) {
      if (playerSelection == computerSelection) {
        return "A tie! No one wins";
      }
      else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return "You Win! Paper beats Rock";
      }
      else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return "You Win! Rock beats Scissors";
      }
      else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return "You Win! Scissors beats Paper";
      }
      else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
        return "You Lose! Paper beats Rock";
      }
      else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
        return "You Lose! Rock beats Scissors";
      }
      else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
        return "You Lose! Scissors beats Paper";
      }
      else {
        return "Invalid input, cannot run game!";
      }
    }

    // scores
    let playerScore = 0;
    let computerScore = 0;

    // event listener for rock selection
    const rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', () => {
          // displaying results using DOM
          showResults('rock') }
    );

    // event listener for paper selection
    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', () => {
          // displaying results using DOM
          showResults('paper') }
    );

    // event listener for rock selection
    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', () => {
          // displaying results using DOM
        showResults('scissors') }
    );

    // helper to simplify displaying results
      function showResults(choice) {
        const results = document.querySelector('#results');
        const compSection = document.querySelector('#computer');
        const computer = getComputerChoice();
        let currGame = playRound(choice, computer);
        results.textContent = currGame;
        compSection.textContent = "Computer's Selection: " + computer;
        // if player won, add to the score
        if (currGame.includes('Win!')) {
          playerScore++;
          }
          else if (currGame.includes('Lose!')){
            computerScore++;
          }
          // score();
      }

      // show score 
      function score() {
          const results = document.querySelector('#score');
          results.textContent = 'Player score: ' + playerScore + "\n" +
          'Computer score: ' + computerScore;
      }