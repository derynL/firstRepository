const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  } else {
    confirm('Invalid choice. Try again.');
  }
};

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else if (computerChoice === 2) {
    return 'scissors';
  }
};

const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log(`Duplicate choice - it's a tie!`);
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('Computer wins!');
    } else {
      console.log('You win!');
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      console.log('Computer wins!');
    } else {
      console.log('You win!');
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log('Computer wins!');
    } else {
      console.log('You win!');
    }
  }
  if (userChoice === 'bomb') {
    console.log(`You simply can't be beaten!`);
  }
};

const playGame = function () {
  let userChoice = prompt('Enter rock, paper or scissors');
  console.log(`You chose ${getUserChoice(userChoice)}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer chose ${computerChoice}`);
  determineWinner(userChoice, computerChoice);
};
playGame();
