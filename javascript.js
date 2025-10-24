function getComputerChoice()
{
    let num= (Math.random()*1000)%3 ;
    if(num <1)
    {
        document.querySelector('#computer_Choice').src = "images/paper.png";
        return "Paper";
    }
    else if(num <2)
    {
        document.querySelector('#computer_Choice').src = "images/scissors.png";
        return "Scissors";
    }
    else if(num <3)
    {
        document.querySelector('#computer_Choice').src = "images/rock.png";
        return "Rock";
    }   
    else
        return "Error. Invalid choice";
}
function RestartGame()
{
    if (playerScore == 5) {
        alert("You Won");
        resetGame();
    } else if (computerScore == 5) {
        alert("You lost");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    computer_Score.textContent = "Computer Score: 0";
    player_Score.textContent = "Player Score: 0";
    let output = document.querySelector('.output-text');
    output.textContent = "First to 5 wins";
    document.querySelector('#player_Choice').src = "images/mystery.png";
    document.querySelector('#computer_Choice').src = "images/mystery.png";
}

function playRound(p_choice)
{
    let c_choice= getComputerChoice();
    if (p_choice==null)
        return null;
    else if(p_choice=="Rock" && c_choice=="Scissors")
    {
        let text= (p_choice+" beats "+c_choice+". Good job! Plus One Point for you");
        playerScore++;
        let output = document.querySelector('.output-text');
        output.textContent=text;
        let score = document.querySelector('#player_Score');
        score.textContent="Player Score: "+playerScore;
        RestartGame();
        return 0;
    }
    else if(p_choice=="Scissors" && c_choice=="Paper")
    {
        let text= (p_choice+" beats "+c_choice+". Good job! Plus One Point for you");
        playerScore++;
        let output = document.querySelector('.output-text');
        output.textContent=text;
        let score = document.querySelector('#player_Score');
        score.textContent="Player Score: "+playerScore;
        RestartGame();
        return 0;
    }
    else if(p_choice=="Paper" && c_choice=="Rock")
    {
        let text= (p_choice+" beats "+c_choice+". Good job! Plus One Point for you");
        playerScore++;
        let output = document.querySelector('.output-text');
        output.textContent=text;
        let score = document.querySelector('#player_Score');
        score.textContent="Player Score: "+playerScore;
        RestartGame();
        return 0;
    }
    else if(p_choice==c_choice)
    {
        let text= (p_choice+" and "+c_choice+" is A tie. No points for everyone");
        let output = document.querySelector('.output-text');
        output.textContent=text;
        RestartGame();
        return 0;
    }
    else
    {
        let text= (c_choice+" beats "+p_choice+". Plus One Point for the computer :D");
        computerScore++;
        let output = document.querySelector('.output-text');
        output.textContent=text;
        let score = document.querySelector('#computer_Score');
        score.textContent="Computer Score: "+computerScore;
        RestartGame();
        return 0;
    }
}

let playerScore=0;
let computerScore=0;
let playerChoice = null;

const rock_button = document.querySelector("#rock_B");
const paper_button = document.querySelector("#paper_B");
const scissors_button = document.querySelector("#scissors_B");

// Event listeners
rock_button.addEventListener('click', () => {
    if (true) playerChoice = 'Rock';
    document.querySelector('#player_Choice').src = "images/rock.png";
    playRound(playerChoice);
});

paper_button.addEventListener('click', () => {
    if (true) playerChoice = 'Paper';
    document.querySelector('#player_Choice').src = "images/paper.png";
    playRound(playerChoice);
});

scissors_button.addEventListener('click', () => {
    if (true) playerChoice = 'Scissors';
    document.querySelector('#player_Choice').src = "images/scissors.png";
    playRound(playerChoice);
});
